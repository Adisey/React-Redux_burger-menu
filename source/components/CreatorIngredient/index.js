// Core
import React, { Component, createRef } from 'react';
import { Formik, Form, Field } from 'formik';
import Dropzone from "react-dropzone";
import cx from 'classnames';

// Instruments
import './styles.css';
import { creatorIngredient } from '../../bus/forms/shapes';

export default class CreatorIngredient extends Component {
    constructor (props) {
        super(props);
    }
    state = {
        imgSrc: null,
    };

    formikForm = createRef();

    _submitForm = (formData, actions) => {
        this._createIngredient(formData);
        actions.resetForm();
    };

    _createIngredient = ({ name, price }) => {
        if (!name) {
            return null;
        }
        const priceCent = Math.round(price * 100);
        // .toFixed(2) для отображения.

        this.props.actions.createIngredientAsync({ name, priceCent });
    };

    _submitFormOnEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            this.formikForm.current.submitForm();
        }
    };

    _handleDrop = (files) => {
        const currentFile = files[0];
        const myFileItemReader = new FileReader();

        myFileItemReader.addEventListener('load', () => {
            console.log(`reader.result ->`, myFileItemReader.result);
            this.setState({
                imgSrc: myFileItemReader.result,
            });
        }, false);
        myFileItemReader.readAsDataURL(currentFile);

    };

    render () {
        const { isFetching } = this.props;
        const { imgSrc } =  this.state;

        console.log(`this.props ->`, this.props);
        console.log(`this.state ->`, this.state);

        return (
            <Formik
                initialValues = { creatorIngredient.shape }
                ref = { this.formikForm }
                render = { (props) => {
                    const { isValid, touched, errors } = props;
                    const nameStyle = cx({ invalidInput: !isValid && touched.name && errors.name });
                    const priceStyle = cx({ invalidInput: !isValid && touched.price && errors.price });

                    return (
                        <div className = 'main'>
                            <div className = 'loadPicture'>
                                <Dropzone
                                    accept = 'image/*'
                                    className = 'previewPicture'
                                    multiple = { false }
                                    onDrop = { this._handleDrop.bind(this) }>
                                    {imgSrc !== null ? <img className = 'picture' src = { imgSrc } />: 'Загрузить картинку'}
                                </Dropzone>
                            </div>

                            <div className = 'descriptionCrIng'>
                                <h3> Новый ингредиент </h3>
                                <div className = 'mainForm'>
                                    <Form>
                                        <div className = 'field'>
                                            <label htmlFor = 'name'>Название</label>
                                            <Field
                                                className = { nameStyle }
                                                disabled = { isFetching }
                                                id = 'name'
                                                name = 'name'
                                                placeholder = { `Название ингредиента.` }
                                                type = 'text'
                                                onKeyPress = { this._submitFormOnEnter }
                                            />
                                        </div>
                                        <div className = 'spandiv'>
                                            <span>{touched.name && errors.name ? errors.name : '.'}</span></div>
                                        <div className = 'field'>
                                            <label htmlFor = 'price'>Цена</label>
                                            <Field
                                                className = { priceStyle }
                                                disabled = { isFetching }
                                                id = 'price'
                                                name = 'price'
                                                placeholder = { `0.00` }
                                                type = 'number'
                                                onKeyPress = { this._submitFormOnEnter }
                                            />
                                        </div>
                                        <div className = 'spandiv'>
                                            <span>{touched.price && errors.price ? errors.price : '.'}</span></div>
                                        <div className = 'field'>
                                            <div />
                                            <input type = 'submit' value = 'Сохранить' />
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>

                    );
                } }
                validationSchema = { creatorIngredient.schema }
                onSubmit = { this._submitForm }
            />
        );
    }
}
