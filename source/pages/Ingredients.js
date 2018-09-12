// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlipMove from 'react-flip-move';

// Instruments
import './Ingredients.css';

//Components
import { CreatorIngredient, Spinner, Ingredient, Catcher, IngredientsJSX } from '../components';

//Actionns
import { ingredientsActions } from '../bus/ingredients/actions';

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            createIngredientAsync: ingredientsActions.createIngredientAsync,
            fetchIngredientsAsync: ingredientsActions.fetchIngredientsAsync,
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

        actions.fetchIngredientsAsync();
    }

    render () {
        const { actions, ingredients } = this.props;
        // ToDo: когда будет функция удаления и изменения, добавить в "localAction" и поменять "actionMode" на 'View'
        const actionMode = 'View';
        const localAction = {};

        return (
            <div className = 'mainPageIngredients'>
                <Spinner />
                <CreatorIngredient
                    actions = { actions }
                />
                <FlipMove>
                    <IngredientsJSX
                        actionMode = { actionMode }
                        actions = { actions }
                        ingredients = { ingredients }
                        localAction = {localAction}
                        filter = { false }

                    />
                </FlipMove>
            </div>
        );
    }
}

// ToDo: Удалить элемент и все его включения в готовое блюдо
// ToDo: Редактировать и пересчитать все в готовое блюда в которые он входит
