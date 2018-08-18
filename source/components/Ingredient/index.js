// Core
import React, { Component } from 'react';

// Instruments
import './styles.css';

export default class Ingredient extends Component {
    render () {
        const {
            name,
            id,
            priceCent,
        } = this.props;
        const price = (priceCent/100).toFixed(2);

        return (
            <div>
                <section className = 'mainIngredient'>
                    <p>{name}</p>
                    <p>{price}</p>
                </section>
            </div>
        );
    }
}
