import React from 'react';
import { NavLink } from "react-router-dom";


export default function navMenu() {
    let activeStyle = {
        backgroundColor: '#1665C0',
        color: 'white',
        transform: 'scale(1.2)',
        borderRadius: '5px',
        transition: '0.5s'
    };

    return <nav>
        <ul className='nav-list'>
            <li className='nav-item'>
                <NavLink
                    to="/"
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                >
                    Todo list
                </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink
                    to="about"
                    style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                >
                    About matrix
                </NavLink>
            </li>
        </ul>
        
        
    </nav>
}