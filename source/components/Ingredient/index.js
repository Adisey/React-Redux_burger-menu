// Core
import React, { Component } from 'react';

// Instruments
import './styles.css';

export default class Ingredient extends Component {
    constructor (props) {
        super(props);
    }

    _localAction = () => {
        const { id } = this.props;
        this.props.localAction(id);
    }

    render () {
        const {
            name,
            id,
            priceCent,
            image,
            actionMode,
        } = this.props;
        const price = (priceCent / 100).toFixed(2);

        return (
            <section className = 'mainIngredient'>
                <div className = 'pictureShIng'>
                    {image !== null ? <img className = 'ShowPictureIngredient' src = { image } /> : ''}
                </div>
                <div className = 'descriptionShIng'>
                    <div className = 'infoShIng'>
                        <div className = 'nameShIng'>{name}</div>
                        <div className = 'priceShIng'>{price}</div>
                    </div>
                </div>
                <div className = 'barShIng'>
                    {actionMode === 'View' ?
                        <img
                            alt = 'удалить'
                            height = '20'
                            src = '../../../static/remove-50x50.png'
                            width = '20'
                        /> : null}
                    {actionMode === 'View' ?
                        <img
                            alt = 'редактировать'
                            height = '20'
                            src = '../../../static/edit-50x50.png'
                            width = '20'
                        /> : null}
                    {actionMode === 'Add' ?
                        <img
                            alt = 'добавить'
                            className = 'imageButton'
                            src = '../../../static/plus-50x50.png'
                            onClick = { this._localAction }
                        /> : null}
                    {actionMode === 'Remove' ?
                        <img
                            alt = 'удалить'
                            className = 'imageButton'
                            onClick = { this._localAction }
                            src = '../../../static/minus-50x50.png'
                        /> : null}

                </div>
            </section>
        );
    }
}
