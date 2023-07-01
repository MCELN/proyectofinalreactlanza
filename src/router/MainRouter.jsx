import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from '../pages/Products';
import NavBar from '../components/navbar/NavBar';
import Item from '../pages/Item';
import Category from '../pages/Category';
import Home from '../pages/Home';
import CartShop from '../pages/CartShop';

const MainRouter = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path='*' element={<Home />} />
                <Route exact path='/' element={<Home />} />
                <Route exact path='/products' element={<Products />} />
                <Route exact path='/cartShop' element={<CartShop />} />
                <Route path='/products/:productId' element={<Item />} />
                <Route path='/category/:categoryId' element={<Category />} />
            </Routes>
        </Router>
    );
};

export default MainRouter
