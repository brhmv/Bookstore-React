import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getProductsFetch } from '../../Store/Api';
import './RelatedProducts.css'
import Item from '../Item/Item'
import Books from "../TopBooks/Books";

const RelatedProducts = () => {

    const dispatch = useDispatch();
    const { allProducts, status, error } = useSelector((state) => state.shop);
    const [randomItems, setRandomItems] = useState([]);

    const getRandomItems = (array, count) => {
        const arrayCopy = [...array];
        const shuffled = arrayCopy.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    useEffect(() => {
        dispatch(getProductsFetch());
        const items = getRandomItems(allProducts, 10);
        setRandomItems(items);
    }, [dispatch, allProducts.length]);


    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />

            {/* <div className="relatedproducts-item">
                {randomItems.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div> */}


            <div>
                <Books booksData={randomItems} />
            </div>
        </div>
    )
}

export default RelatedProducts