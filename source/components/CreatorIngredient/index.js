// Core
import React, { Component, createRef } from 'react';
import { Formik, Form, Field } from 'formik';

// Instruments
import './style.css';
import { creatorIngredient } from '../../bus/forms/shapes';

export default class CreatorIngredient extends Component {
    formikForm = createRef();

    _submitForm = (formData, actions) => {
        this._createPost(formData);
        actions.resetForm();
    };

    _createPost = ({ name }) => {
        console.log(`name ->`, name);
        // if (!comment) {
        //     return null;
        // }
        //
        // this.props.actions.createPostAsync(comment);
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
            <Formik
                initialValues = { creatorIngredient.shape }
                ref = { this.formikForm }
                render = { () => {
                    return (
                        <section >
                            <Form>
                                <Field
                                    component = 'textarea'
                                    name = 'name'
                                    placeholder = { `Название ингредиента.` }
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
        );
    }
}
