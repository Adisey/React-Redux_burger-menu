// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// Styles
import './styles.css';

// Components
import { Header } from '../components';
import { Burgers, Ingredients } from '../pages';
import { book } from './book';

// Actions
//import { authAction } from '../bus/auth/actions';

const mapStateToProps = (state) => {
    return {
        //        isAuthenticated: state.auth.get('isAuthenticated'),
        //        isInitialized:   state.auth.get('isInitialized'),
    };
};

const mapDispatchToProps = {
//    initializedAsync: authAction.initializedAsync,
};

@hot(module)
@withRouter
@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class App extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className = 'content'>
                    <Switch>
                        <Route component = { Burgers } path = { book.burgers } />
                        <Route component = { Ingredients } path = { book.ingredients } />
                        <Redirect to = { book.burgers } />
                    </Switch>
                </div>
            </div>
        );
    }
}
