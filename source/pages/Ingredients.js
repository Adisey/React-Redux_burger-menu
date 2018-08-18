// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlipMove from 'react-flip-move';

// Instruments
import './styles.css';

//Components
import { CreatorIngredient, Spinner } from '../components';

//Actionns
import { ingredientsActions } from '../bus/ingredients/actions';
import Catcher from "../components/Catcher";
import Ingredient from "../components/Ingredient";

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            createIngredientAsync: ingredientsActions.createIngredientAsync,
            fetchIngrediensAsync:  ingredientsActions.fetchIngrediensAsync,
        }, dispatch),
    };
};

@connect(
    mapStateToProps,
    mapDispatchToProps
)

export default class Ingredients extends Component {
    componentDidMount () {
        const { actions } = this.props;

        actions.fetchIngrediensAsync();
    }

    render () {
        const { actions, ingredients } = this.props;

        const IngredientsJSX = ingredients.map((ingredient) => {
            return (
                <Catcher key = { ingredient.get('id') }>
                        <Ingredient
                            id = { ingredient.get('id') }
                            name = { ingredient.get('name') }
                            priceCent = { ingredient.get('priceCent') }
                        />
                </Catcher>
            );
        });

        return (
            <div className = 'mainpage'>
                <Spinner />
                <CreatorIngredient actions = { actions } />
                <FlipMove>{IngredientsJSX}</FlipMove>
            </div>
        );
    }
}
