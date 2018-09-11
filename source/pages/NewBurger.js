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
            fetchIngredientsAsync:       ingredientsActions.fetchIngredientsAsync,
            fetchBurgerIngredientsAsync: newBburgersActions.fetchBurgerIngredientsAsync,
            fillBurgerIngredients:       newBburgersActions.fillBurgerIngredients,
            createBurgerAsync:           burgersActions.createBurgerAsync,
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
        // ToDo: Это не красиво, нужно разобраться как это грузить отдельно.
        setTimeout(() => {
            actions.fillBurgerIngredients(this.props.ingredients);
        }, 1000);

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
        const {
            actions,
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
