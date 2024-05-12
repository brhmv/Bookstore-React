import React, { useEffect, useState } from "react";
import './Popular.css';
import Item from '../Item/Item';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsFetch } from '../../Store/Api';
import Books from "../TopBooks/Books";
const Popular = () => {
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
        <div className="popular">
            <h1>Popular Ones</h1>
            <hr />
            <div className="popular-item">
                <Books booksData={randomItems} />
            </div>
        </div>
    );
};

export default Popular;