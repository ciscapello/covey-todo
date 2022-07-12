import React from 'react';

import AppTodo from './views/appTodo';
import NavMenu from './views/navMenu';
import AboutTodo from './views/aboutTodo';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
    
    return  <div className='app'>
        <BrowserRouter>
            <NavMenu />
            <Routes>
                <Route path='/' element={<AppTodo />} />
                <Route path="about" element={<AboutTodo />}>
            </Route>
            </Routes>
        </BrowserRouter>
    </div>
}

export default App;