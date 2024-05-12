import React, { useEffect, useState } from 'react';
import './CSS/ShopCategory.css';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsFetch } from '../Store/Api';
import Books from '../Components/TopBooks/Books';


function ShopCategory(props) {
    const dispatch = useDispatch();
    const { allProducts, status, error } = useSelector((state) => state.shop);
    const [filteredProducts, setFilteredProducts] = useState([]);


    useEffect(() => {
        if (status === 'idle') { dispatch(getProductsFetch()); }
        console.log(allProducts);
    }, [dispatch, status]);

    useEffect(() => {
        if (props.category !== "all") {
            setFilteredProducts(allProducts.filter(item => item.category === props.category));
        }
        else {
            setFilteredProducts(allProducts);
        }
        console.log(filteredProducts);
    }, [allProducts, props.category]);


    ////////////////////////////////////////////////////////////////////////

    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        let sortedProducts = [...filteredProducts];

        if (sortOrder !== '') {
            sortedProducts = sortGoodsByPrice(sortedProducts, sortOrder);
        }

        setFilteredProducts(sortedProducts);
    }, [sortOrder]);

    const sortGoodsByPrice = (array, order) => {
        let sortedProducts = [...array];
        sortedProducts.sort((a, b) => {
            if (order === 'increase') {
                return parseFloat(a.price) - parseFloat(b.price);
            } else if (order === 'decrease') {
                return parseFloat(b.price) - parseFloat(a.price);
            }
            return 0;
        });
        return sortedProducts;
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    //////////////////////////////////////////////////////////////////////////

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="shop-category">

            <h1>All Books</h1>
            <hr />


            <div className="sort-div">
                <b>Sort by Price:</b>
                <select className="sort-select" onChange={handleSortChange} value={sortOrder}>
                    <option value="">Select</option>
                    <option value="increase">Low to high</option>
                    <option value="decrease">High to low</option>
                </select>
            </div>

            <Books booksData={filteredProducts} />

            <div className="shopcategory-loadmore"> <a href="#">Explore More</a></div>

        </div>
    );
}

export default ShopCategory;