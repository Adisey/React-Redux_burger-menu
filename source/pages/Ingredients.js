// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import './style.css';

//Components
import { CreatorIngredient, Spinner } from '../components';

//Actionns
import { ingredientsActions } from '../bus/ingredients/actions';

const mapStateToProps = (state) => {
    return {
        Ingredients: state.Ingredients,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            createIngredientAsync: ingredientsActions.createIngredientAsync,
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
    }

    render () {
        const { actions, Ingredients } = this.props;

        return (
            <div>
                <Spinner />
                <h2>Ингредиенты</h2>
                <CreatorIngredient actions = { actions } />
            </div>
        );
    }
}
