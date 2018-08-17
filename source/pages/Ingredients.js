// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import './styles.css';

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
        const { actions, Ingredients } = this.props;

        return (
            <div className = 'mainpage'>
                <Spinner />
                <CreatorIngredient actions = { actions } />
            </div>
        );
    }
}
