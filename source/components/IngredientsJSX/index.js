// Core
import React, { Component } from 'react';
import { List, hasIn } from 'immutable';

//Components
import { Catcher, Ingredient } from '../../components';

export default class IngredientsJSX extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const {
            actions,
            ingredients,
            actionMode,
            localAction,
            filter,
        } = this.props;

        console.log(`IngredientsJSX -> actions ->`, actions);
        // console.log(`IngredientsJSX -> ingredients ->`, ingredients);
        // console.log(`IngredientsJSX -> actionMode ->`, actionMode);
        // console.log(`IngredientsJSX -> localAction ->`, localAction);
        const JSX = ingredients.map((ingredient) => {
            if (!filter || filter.findIndex((fItem) => fItem.get('id') === ingredient.get('id')) > -1) {
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

            }

            return null;

        });

        return (
            <div>
                {JSX}
            </div>
        );

    }
}
