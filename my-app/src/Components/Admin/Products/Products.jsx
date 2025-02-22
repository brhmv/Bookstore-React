import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsFetch, deleteProductViaIdFetch, UpdateProductFetch, SearchGoodsFetch, addProductFetch } from '../../../Store/Api';
import '../Products/Products.css';
import { addProductAsync } from '../../../Store/ShopSlice';

function Products() {
    const dispatch = useDispatch();
    const { allProducts, status, error } = useSelector((state) => state.shop);
    const deletedData = useSelector((state) => state.shop.deletedProductFromAll);

    const [searchValue, setSearchValue] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [changedObject, setChangedObject] = useState();
    const [selectedObject, setSelectedObject] = useState({});
    const [filteredProducts, setFilteredProducts] = useState([]);

    const [newProductName, setNewProductName] = useState('');
    const [newProductOldPrice, setNewProductOldPrice] = useState('');
    const [newProductNewPrice, setNewProductNewPrice] = useState('');

    const [sortOrder, setSortOrder] = useState('');

    let [flag, setFlag] = useState(false);

    useEffect(() => {
        dispatch(getProductsFetch());
    }, [dispatch, flag]);

    useEffect(() => {
        if (searchValue !== '') {
            const filteredArray = allProducts.filter((item) =>
                item.title.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredProducts(filteredArray);
        } else {
            setFilteredProducts(allProducts);
        }
    }, [searchValue, allProducts]);

    useEffect(() => {
        let sortedProducts = [...filteredProducts];

        if (sortOrder !== '') {
            sortedProducts = sortGoodsByPrice(sortedProducts, sortOrder);
        }

        setFilteredProducts(sortedProducts);
    }, [sortOrder, filteredProducts]);

    const handleEdit = () => {
        debugger;
        setShowModal(false);
        dispatch(UpdateProductFetch(selectedObject, changedObject));
        setFlag(!flag);
    };

    const handleAddProduct = () => {
        const newProduct = {
            title: newProductName,
            price: newProductNewPrice,
        };

        dispatch(addProductAsync(newProduct));

        setNewProductName('');
        setNewProductOldPrice('');
        setNewProductNewPrice('');

        setFlag(!flag);
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

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

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="products-admin">
            <div className="search-div">
                <input
                    type="text"
                    placeholder="Search by product name"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>

            {/* <div className='addProduct-div'>
                <input
                    placeholder='Name'
                    value={newProductName}
                    onChange={(e) => setNewProductName(e.target.value)}
                />
                <input
                    placeholder='Old Price'
                    value={newProductOldPrice}
                    onChange={(e) => setNewProductOldPrice(e.target.value)}
                />
                <input
                    placeholder='New Price'
                    value={newProductNewPrice}
                    onChange={(e) => setNewProductNewPrice(e.target.value)}
                />
                <button onClick={handleAddProduct}>Add Product</button>
            </div> */}

            <div className="sortProduct-div">
                <b>Sort by Price:</b>
                <select className="sort-select" onChange={handleSortChange} value={sortOrder}>
                    <option value="">Select</option>
                    <option value="increase">Low to high</option>
                    <option value="decrease">High to low</option>
                </select>
            </div>

            {/* <h1>{filteredProducts.length}</h1> */}
            <div className="productsdiv">
                {filteredProducts.map((item) => (
                    <div key={item.id} className='item-div'>
                        <p><b>Name: </b>{item.title}</p>
                        <p><b>Author: </b>{item.author}</p>
                        <p><b>Price: </b>{item.price}</p>
                        <p><b>Price: </b>{item.price}</p>

                        <div className='buttons-div'>
                            <button onClick={() => {
                                deleteProductViaIdFetch(item.id, dispatch);
                                setFlag(!flag);
                            }}>
                                Delete
                            </button>

                            <button
                                onClick={() => {
                                    setChangedObject({ ...item });
                                    setSelectedObject(item);
                                    setShowModal(true);
                                }}>
                                Edit
                            </button>
                        </div>
                    </div>
                ))}

                {showModal && (
                    <div className="editWindow">
                        <div>
                            <input
                                placeholder='Name'
                                value={changedObject.title}
                                onChange={(e) => setChangedObject(prevState => ({ ...prevState, title: e.target.value }))}
                            />

                            <input
                                placeholder='New Price'
                                value={changedObject.price}
                                type="number"
                                onChange={(e) => setChangedObject(prevState => ({ ...prevState, price: e.target.value }))}
                            />

                            {/* <input
                                placeholder='Old Price'
                                value={changedObject.old_price}
                                type="number"
                                onChange={(e) => setChangedObject(prevState => ({ ...prevState, old_price: e.target.value }))}
                            /> */}

                            <button onClick={handleEdit}>
                                EDIT
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Products;

