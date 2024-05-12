import React, { useState } from 'react';
import './Navbar.css';
import cart_icon from "../Assets/cart_icon.png";
import logo from "../Assets/logo.png";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
    DropdownMenu,
    DropdownItem,
    DropdownDivider,
    Dropdown,
} from 'semantic-ui-react'


function Navbar() {
    const [menu, setMenu] = useState("shop");

    const bagProducts = useSelector((state) => state.shop.BagProducts);

    const itemCount = bagProducts.reduce((count, product) => count + product.quantity, 0);

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <div><img src={logo} alt='logo' /></div>
                <p>BookShop</p>
            </div>

            <ul className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}> <Link to='/browse-all' className='active'>Explore All</Link>{menu === "shop" ? <hr /> : <></>}</li>

                <li onClick={() => { setMenu("category") }} >


                    <Dropdown text='Categories' style={{ color: menu == "category" ? "orange" : "black", margin: '0px' }}>
                        <DropdownMenu>

                            <DropdownItem style={{ backgroundColor: 'orange', color: 'black', fontSize: '25px' }}>
                                <Link to="/science">Science</Link>
                            </DropdownItem>

                            <DropdownDivider style={{ margin: '0px' }} />

                            <DropdownItem style={{ backgroundColor: 'orange', color: 'black', fontSize: '25px' }}>
                                <Link to="/fantasy">Fantasy</Link>
                            </DropdownItem>

                            <DropdownDivider style={{ margin: '0px' }} />

                            <DropdownItem style={{ backgroundColor: 'orange', color: 'black', fontSize: '25px' }}>
                                <Link to="/mystery">Mystery</Link>
                            </DropdownItem>

                            <DropdownDivider style={{ margin: '0px' }} />

                            <DropdownItem style={{ backgroundColor: 'orange', color: 'black', fontSize: '25px' }}>
                                <Link to="/thriller" >Thriller</Link>
                            </DropdownItem>

                            <DropdownDivider style={{ margin: '0px' }} />

                            <DropdownItem style={{ backgroundColor: 'orange', color: 'black', fontSize: '25px' }}>
                                <Link to="/romance">Romance</Link>
                            </DropdownItem>

                            <DropdownDivider style={{ margin: '0px' }} />



                            <DropdownDivider style={{ margin: '0px' }} />

                            <DropdownItem style={{ backgroundColor: 'orange', color: 'black', fontSize: '25px' }}>
                                <Link to="/browse-all">Browse All</Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>


                </li>


                {/* <li onClick={() => { setMenu("admin") }}><Link to='/admin/products'>Admin</Link>{menu === "admin" ? <hr /> : <></>}</li> */}


                <li onClick={() => { setMenu("admin") }} >
                    <Link to='/admin/products' style={{ color: menu == "admin" ? "orange" : "red" }}>Admin</Link>
                    {menu === "admin" ? <hr /> : null}
                </li>
            </ul>

            <div className='nav-login-cart'>
                <Link to='/login'><button className='login-button'>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt='icon' /></Link>
                <div className='nav-cart-count'>{itemCount}</div>
            </div>
        </div >
    );
}

export default Navbar;