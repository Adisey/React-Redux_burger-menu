// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlipMove from 'react-flip-move';

// Instruments
import './NewBurger.css';

//Components
import { IngredientsJSX, CreatorBurger } from '../components';

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
            createBurgerAsync:     burgersActions.createBurgerAsync,
        }, dispatch),
    };
};

@connect(
    mapStateToProps,
    mapDispatchToProps
)

export default class Burgers extends Component {
    state = {
        availableIngredients: this.props.ingredients.sort(),
        selectedIngredients:  [],
        burgerPriceCent:      0, // ToDo:  Посчитать сумму
    };

    componentDidMount () {
        const { actions } = this.props;

        actions.fetchIngredientsAsync();
    }

    _addIngredient = (id) => {
        console.log(`_addIngredient ->`, id);
        this.setState({ selectedIngredients: this.state.availableIngredients });

        // this.selectedIngredients = this.state.availableIngredients;

    };
    _removeIngredient = (id) => {
        console.log(`_removeIngredient ->`, id);
    };

    render () {
        const { actions } = this.props;
        const actionModeRemove = 'Remove';
        const actionModeAdd = 'Add';
        const { availableIngredients, selectedIngredients, burgerPriceCent }  = this.state;

        const selectedIngredientsID = selectedIngredients
            .map((ingredient) => {
                return ingredient.get('id');
            });

        // console.log(`selectedIngredientsID ->`, selectedIngredientsID);
        // console.log(`selectedIngredients ->`, selectedIngredients);

        return (
            <div className = 'mainPageNewBurger'>
                <div className = 'newPageNewBurger'>
                    <CreatorBurger
                        actions = { actions }
                        burgerPriceCent = { burgerPriceCent }
                        selectedIngredientsID = { selectedIngredientsID }
                    />
                    <FlipMove>
                        <IngredientsJSX
                            actionMode = { actionModeRemove }
                            actions = { actions }
                            ingredients = { selectedIngredients }
                            localAction = { this._removeIngredient }
                        />
                    </FlipMove>
                </div>
                <div>
                    <FlipMove>
                        <IngredientsJSX
                            actionMode = { actionModeAdd }
                            actions = { actions }
                            ingredients = { availableIngredients }
                            localAction = { this._addIngredient }
                        />
                    </FlipMove>
                </div>

            </div>
        );
    }
}

// ToDo: Добавление/Удаление Игредиентов в Бургер
