// Core
import React, { Component } from "react";

// Components
import Menu from '../Menu'

// Styles
import './style.css';

export default class Header extends Component {
    render () {
        return (
            <div className = 'header'>
                <div className = 'logo'>
                    <img src='../../../static/burger-60x60.png'/>
                </div>
                <Menu/>
            </div>
        );
    }
}
