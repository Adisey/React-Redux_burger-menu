// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlipMove from 'react-flip-move';

// Instruments
import './NewBurger.css';

//Components
import { Spinner, IngredientsJSX, CreatorBurger } from '../components';

//Actionns
import { ingredientsActions } from '../bus/ingredients/actions';
import { burgersActions } from "../bus/burgers/actions";

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            fetchIngredientsAsync: ingredientsActions.fetchIngredientsAsync,
            createBurgerAsync: burgersActions.createBurgerAsync,
        }, dispatch),
    };
};

@connect(
    mapStateToProps,
    mapDispatchToProps
)

export default class Burgers extends Component {
    componentDidMount () {
        const { actions } = this.props;

        actions.fetchIngredientsAsync();
    }
    render () {
        const { actions, ingredients } = this.props;
        const actionModeRemove = 'Remove';
        const actionModeAdd = 'Add';
        const availableIngredients = ingredients.sort();
        const selectedIngredients = ingredients.sort();

        console.log(`actions ->`, actions);

        return (
            <div className = 'mainPageNewBurger'>
                <div className = 'newPageNewBurger'>
                    <CreatorBurger
                        actions = { actions }
                    />
                    <FlipMove>
                        <IngredientsJSX
                            actionMode = { actionModeRemove }
                            actions = { actions }
                            ingredients = { selectedIngredients }
                        />
                    </FlipMove>
                </div>
                <div>
                    <FlipMove>
                        <IngredientsJSX
                            actionMode = { actionModeAdd }
                            actions = { actions }
                            ingredients = { availableIngredients }
                        />
                    </FlipMove>
                </div>

            </div>
        );
    }
}

// ToDo: Добавление Игредиента в Бургер