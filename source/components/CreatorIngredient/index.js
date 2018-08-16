// Core
import React, { Component, createRef } from 'react';
import { Formik, Form, Field } from 'formik';

// Instruments
import './style.css';
import { creatorIngredient } from '../../bus/forms/shapes';

export default class CreatorIngredient extends Component {
    formikForm = createRef();

    _submitForm = (formData, actions) => {
        this._createIngredient(formData);
        actions.resetForm();
    };

    _createIngredient = ({ name, price }) => {
        if (!name) {
            return null;
        }
        const priceCent = Math.round(price*100);
        // .toFixed(2) для отображения.

        this.props.actions.createIngredientAsync({name, priceCent});
    };

    _submitFormOnEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            this.formikForm.current.submitForm();
        }
    };

    render () {
        // const { profile } = this.props;

        return (
            <div className = 'form'>
                <h3> Новый ингредиент </h3>
                <Formik
                    initialValues = { creatorIngredient.shape }
                    ref = { this.formikForm }
                    render = { () => {
                        return (
                            <section >
                                <Form>
                                    <Field
                                        // component = 'textarea'
                                        name = 'name'
                                        placeholder = { `Название ингредиента.` }
                                        type = 'text'
                                        onKeyPress = { this._submitFormOnEnter }
                                    />
                                    <Field
                                        id = 'price'
                                        name = 'price'
                                        placeholder = { `0.00` }
                                        type = 'text'
                                        onKeyPress = { this._submitFormOnEnter }
                                    />
                                    <input type = 'submit' value = 'Сохранить' />
                                </Form>
                            </section>
                        );
                    } }
                    validationSchema = { creatorIngredient.schema }
                    onSubmit = { this._submitForm }
                />
            </div>
        );
    }
}
