// Core
import React, { Component } from 'react';

//Components
import { Catcher, Ingredient } from '../../components';

export default class IngredientsJSX extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { actions, ingredients, actionMode, localAction } = this.props;
        const JSX = ingredients.map((ingredient) => {
            return (
                <Catcher key = { ingredient.get('id') }>
                    <Ingredient
                        actionMode = { actionMode }
                        id = { ingredient.get('id') }
                        image = { ingredient.get('image') }
                        localAction = { localAction }
                        name = { ingredient.get('name') }
                        priceCent = { ingredient.get('priceCent') }

                    />
                </Catcher>
            );
        });

        return (
            <div>
                {JSX}
            </div>
        );

    }
}
