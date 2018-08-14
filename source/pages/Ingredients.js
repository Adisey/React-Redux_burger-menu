// Core
import React, { Component } from 'react';

//Components
import { CreatorIngredient } from '../components';

export default class Ingredients extends Component {
    render () {
        return (
            <div>
                <h3>Ингредиенты</h3>
                <CreatorIngredient />
            </div>
        );
    }
}
