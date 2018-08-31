// Core
import React, { Component, createRef } from 'react';
import { Formik, Form, Field } from 'formik';
import Dropzone from "react-dropzone";
import cx from 'classnames';

// Instruments
import './styles.css';
import { creatorBurger } from '../../bus/forms/shapes';

// Const
import { imageMaxSize } from '../../init/middleware/core';

export default class CreatorBurger extends Component {
    constructor (props) {
        super(props);
    }

    state = {
        imgSrc: null,
    };
    formikForm = createRef();


    _submitForm = (formData, actions) => {
        formData.image= this.state.imgSrc;
        this._createBurger(formData);
        actions.resetForm();
        this.setState({ imgSrc: null });

    };

    _createBurger = ({ name, price, image }) => {
        if (!name) {
            return null;
        }
        const priceCent = 200;
        console.log(`this.props.actions ->`, this.props.actions);
        this.props.actions.createBurgerAsync({ name, priceCent, image });
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
        const { imgSrc } = this.state;

        return (
            <Formik
                initialValues = { creatorBurger.shape }
                ref = { this.formikForm }
                render = { (props) => {
                    const { isValid, touched, errors } = props;
                    const nameStyle = cx({ invalidInput: !isValid && touched.name && errors.name });

                    return (
                        <div className = 'mainCreateBurger'>
                            <div className = 'loadPictureCreateBurger'>
                                <Dropzone
                                    accept = 'image/*'
                                    className = 'previewPictureCreateBurger'
                                    maxSize = { imageMaxSize }
                                    multiple = { false }
                                    onDrop = { this._handleDrop.bind(this) }>
                                    {imgSrc !== null ? <img className = 'showCreateBurgerPicture' src = { imgSrc } />: 'Загрузить картинку'}
                                </Dropzone>
                            </div>

                            <div className = 'descriptionCreateBurger'>
                                <h3> Новый Бургер </h3>
                                <div className = 'mainFormCreateBurger'>
                                    <Form>
                                        <div className = 'fieldCreateBurger'>
                                            <label htmlFor = 'name'>Название</label>
                                            <Field
                                                className = { nameStyle }
                                                disabled = { isFetching }
                                                id = 'nameCreateBurger'
                                                name = 'name'
                                                placeholder = { `Название ингредиента.` }
                                                type = 'text'
                                                onKeyPress = { this._submitFormOnEnter }
                                            />
                                        </div>
                                        <div className = 'spanDivCreateBurger'>
                                            <span>{touched.name && errors.name ? errors.name : '.'}</span></div>
                                        <div className = 'fieldCreateBurger'>
                                            <div />
                                            <input type = 'submit' value = 'Сохранить' />
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>

                    );
                } }
                validationSchema = { creatorBurger.schema }
                onSubmit = { this._submitForm }
            />

        );
    }







    }
