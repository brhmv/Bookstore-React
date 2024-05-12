import React from "react";
import Popular from "../Components/Popular/Popular";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Footer from "../Components/Footer/Footer";
import ShopCategory from "./ShopCategory";

function Shop() {
    return (
        <div>
            {/* <Hero /> */}
            <ShopCategory category='all' />
            <br />
            <br />

            {/* <NewCollections /> */}
            <NewsLetter />
            <br />
            <br />

            <Popular />


            {/* <Footer /> */}
        </div>
    )
}

export default Shop;