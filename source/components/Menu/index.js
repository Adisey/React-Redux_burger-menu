// Core
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './style.css';


// Instruments
import { book } from '../../navigation/book';


export default class Menu extends Component {
    render () {
        return (
            <div className = 'menu'>
                <ul>
                    <li>
                        <NavLink to = { book.burgers }>
                            Бургеры
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to = { book.ingridients }>
                            Ингредиенты
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}
