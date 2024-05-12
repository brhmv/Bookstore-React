import React from "react";
import './CSS/Admin.css';
import AdminNavbar from "../Components/Admin/AdminNavbar/AdminNavbar";
import { Route, Routes } from "react-router-dom";
import Products from '../Components/Admin/Products/Products'
import Footer from "../Components/Footer/Footer";

function Admin() {
    return (
        <div className="admin">
            <AdminNavbar />

            <div className="routediv">

                <Routes>
                    <Route path='/admin' element={<Products />} />
                    <Route path='products' element={<Products />} />
                </Routes>

            </div>



        </div>
    );
}

export default Admin;

