// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlipMove from 'react-flip-move';
import { List, toJS } from 'immutable';

// Instruments
import './NewBurger.css';

//Components
import { IngredientsJSX, CreatorBurger } from '../components';

//Actionns
import { ingredientsActions } from '../bus/ingredients/actions';
import { newBburgersActions } from '../bus/newBurger/actions';
import { burgersActions } from "../bus/burgers/actions";

const mapStateToProps = (state) => {
    return {
        ingredients:          state.ingredients,
        availableIngredients: state.newBurgers.get('availableIngredients'),
        selectedIngredients:  state.newBurgers.get('selectedIngredients'),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            createBurgerAsync:     burgersActions.createBurgerAsync,
            fetchIngredientsAsync: ingredientsActions.fetchIngredientsAsync,
            addIngredient:         newBburgersActions.addIngredient,
            removeIngredient:      newBburgersActions.removeIngredient,
        }, dispatch),
    };
};

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class NewBurger extends Component {
    componentDidMount () {
        const { actions } = this.props;

        actions.fetchIngredientsAsync();
    }

    _addIngredient = (id) => {
        const { actions }= this.props;

        actions.addIngredient(id);
    };
    _removeIngredient = (id) => {
        console.log(`_removeIngredient ->`, id);
    };

    render () {
        const {
            actions,
            ingredients,
            availableIngredients,
            selectedIngredients,
        } = this.props;
        const actionModeRemove = 'Remove';
        const actionModeAdd = 'Add';

        console.log(`Render NewBurger -------------------------> this.props ->`, this.props);

        return (
            <div className = 'mainPageNewBurger'>
                <div className = 'newPageNewBurger'>
                    <CreatorBurger
                        actions = { actions }
                        // burgerPriceCent = { burgerPriceCent }
                        // selectedIngredientsID = { selectedIngredientsID }
                    />
                    <FlipMove>
                        <IngredientsJSX
                            actionMode = { actionModeRemove }
                            actions = { actions }
                            filter = { selectedIngredients }
                            ingredients = { ingredients }
                            localAction = { this._removeIngredient }
                        />
                    </FlipMove>
                </div>
                <div>
                    <FlipMove>
                        <IngredientsJSX
                            actionMode = { actionModeAdd }
                            actions = { actions }
                            filter = { availableIngredients }
                            ingredients = { ingredients }
                            localAction = { this._addIngredient }
                        />
                    </FlipMove>
                </div>

            </div>
        );
    }
}

// ToDo: Добавление/Удаление Игредиентов в Бургер
