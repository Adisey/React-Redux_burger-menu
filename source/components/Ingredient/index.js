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
            <section className = 'mainIngredient'>
                <div className = 'pictureShIng'>
                        pic
                </div>
                <div className = 'descriptionShIng'>
                    <div className = 'infoShIng'>
                        <div className = 'nameShIng'>{name}</div>
                        <div className = 'priceShIng'>{price}</div>
                    </div>
                </div>
                <div className = 'barShIng'>
                    <img
                        alt = 'удалить'
                        height = '20'
                        src = '../../../static/remove-50x50.png'
                        width = '20'
                    />
                    <img
                        alt = 'редактировать'
                        height = '20'
                        src = '../../../static/edit-50x50.png'
                        width = '20'
                    />

                </div>
            </section>
        );
    }
}
