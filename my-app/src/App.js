import Navbar from './Components/Navbar/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignUp from './Pages/LoginSignUp'
import ShopCategory from './Pages/ShopCategory'
import Admin from './Pages/Admin';
import Footer from './Components/Footer/Footer';
import React, { useEffect } from 'react';
import Testimonial from './Components/Testimonial/Testimonial';







function App() {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);



  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/science' element={<ShopCategory category='science' />} />
        <Route path='/fantasy' element={<ShopCategory category='fantasy' />} />
        <Route path='/mystery' element={<ShopCategory category='mystery' />} />
        <Route path='/thriller' element={<ShopCategory category='thriller' />} />
        <Route path='/romance' element={<ShopCategory category='romance' />} />
        <Route path='/browse-all' element={<ShopCategory category='all' />} />

        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>

        <Route path='/cart' element={<Cart />} />

        <Route path='/login' element={<LoginSignUp />} />

        <Route path='/admin/*' element={<Admin />} />

      </Routes>

      {location.pathname === '/admin/products' ? null : <Footer />}
    </div>
  );
}

export default App;