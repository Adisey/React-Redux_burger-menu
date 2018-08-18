// Core
import React, { Component } from 'react';

// Instruments
import './styles.css';

export default class Catcher extends Component {
    state = {
        error: false,
    };

    componentDidCatch (error, stack) {
        console.log('ERROR:', error.message);
        console.log('STACKTRACE:', stack.componentStack);

        this.setState({
            error: true,
        });
    }

    render () {
        const { error } = this.state;
        const { children } = this.props;

        if (error) {
            return
            return (
                <section className = { Styles.catcher }>
                    <span>Произошла неизвестная ошибка.</span>
                    <p>Разработчики уже работают над её устанением.</p>
                </section>
            );
        }

        return children;
    }
}
