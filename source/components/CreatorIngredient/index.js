// Core
import React, { Component, createRef } from 'react';
import { Formik, Form, Field } from 'formik';
import Dropzone from "react-dropzone";
import cx from 'classnames';

// Instruments
import './styles.css';
import { creatorIngredient } from '../../bus/forms/shapes';

// Const
const imageMaxSize = 51200; // bites

export default class CreatorIngredient extends Component {
    constructor (props) {
        super(props);
    }
    state = {
        imgSrc: null,
    };

    formikForm = createRef();

    _submitForm = (formData, actions) => {
        formData.image= this.state.imgSrc;
        this._createIngredient(formData);
        actions.resetForm();
        this.setState({ imgSrc: null });

    };

    _createIngredient = ({ name, price, image }) => {
        if (!name) {
            return null;
        }
        const priceCent = Math.round(price * 100);
        // .toFixed(2) для отображения.

        this.props.actions.createIngredientAsync({ name, priceCent, image });
    };

    _submitFormOnEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            this.formikForm.current.submitForm();
        }
    };

    _handleDrop = (files, rejectedFiles) => {
        if (rejectedFiles && rejectedFiles.length >0) {
            const rejectFile = rejectedFiles[0];
            const rejectFileSize = rejectFile.size;
            const rejectFileName = rejectFile.name;

            if (rejectFileSize > imageMaxSize) {
                const message = `Допустимый размер при загрузке - ${imageMaxSize/1024} Kb. \n Размер файла ${rejectFileName} -> ${(rejectFileSize/1024).toFixed(3)} Kb. \n Выберите другой файл.`;

                alert(message);

                return;
            }

        }
        const currentFile = files[0];
        const myFileItemReader = new FileReader();

        myFileItemReader.addEventListener('load', () => {
            this.setState({
                imgSrc: myFileItemReader.result,
            });
        }, false);
        myFileItemReader.readAsDataURL(currentFile);

    };

    render () {
        const { isFetching } = this.props;
        const { imgSrc } =  this.state;

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
                                    maxSize = { imageMaxSize }
                                    multiple = { false }
                                    onDrop = { this._handleDrop.bind(this) }>
                                    {imgSrc !== null ? <img className = 'showCreateIngredientPicture' src = { imgSrc } />: 'Загрузить картинку'}
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
