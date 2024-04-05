import { Form, Formik } from 'formik';
import CustomInput from "./formElements/customInput/CustomInput";
import CustomTextInput from './formElements/customTextInput/CustomTextInput';
import CustomCheckboxInput from './formElements/customCheckboxInput/CustomCheckboxInput';
import Button from '../button/Button';

import yupSchema from '../../validation/yupSchema';

import scss from './FormPostUser.module.scss';

const initialDataForRegistrationUser = {
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    conditions: false
}

const FormPostUser = () => {

    const handlerRegistrationUser = (values, actions) => {
        console.log(values);        
        actions.setSubmitting(false);
        actions.resetForm(initialDataForRegistrationUser);
    }

    return (
        <Formik 
            initialValues={initialDataForRegistrationUser} 
            onSubmit={handlerRegistrationUser} 
            validateOnMount={true} 
            validationSchema={yupSchema}
        >
        {(props) => {
            const { values, errors, handleChange, setFieldTouched, setFieldValue } = props;
            const isDisableSubmit = 
                !errors.phone & !!values.phone &
                !errors.email & !!values.email & 
                !errors.message & !!values.message &
                values.conditions

            return (
                <Form className={scss.form}>

                    <CustomInput name="name" label="Имя" 
                        CustomComponent={CustomTextInput} 
                        setFieldTouched={setFieldTouched}
                        handleChange={handleChange}
                    />

                    <CustomInput name="phone" label="Номер телефона*" 
                        type="tel"
                        CustomComponent={CustomTextInput} 
                        setFieldTouched={setFieldTouched}
                        handleChange={handleChange}
                    />

                    <CustomInput name="email" label="E-mail*" 
                        type="email"
                        CustomComponent={CustomTextInput} 
                        setFieldTouched={setFieldTouched}
                        handleChange={handleChange}
                    />

                    <CustomInput name="service" label="Интересующий товар/услуга" 
                        CustomComponent={CustomTextInput} 
                        setFieldTouched={setFieldTouched}
                        handleChange={handleChange}
                    />

                    <CustomInput name="message" label="Сообщение*" 
                        as="textarea"
                        stylesInput={scss.inputArea} 
                        CustomComponent={CustomTextInput} 
                        setFieldTouched={setFieldTouched}
                        handleChange={handleChange}
                    />
 
                    <CustomInput name="conditions" label="Отправляя заявку Вы соглашаетесь с политикой конфиденциальности"
                        type="checkbox"
                        styleLabel={scss.labelInputCheckbox} 
                        CustomComponent={CustomCheckboxInput} 
                        setFieldValue={setFieldValue}
                        handleChange={handleChange}
                        valueConditions={values.conditions}
                    />

                    <Button styles={scss.buttonSubmit} text="Sign up" type="submit" disabled={!isDisableSubmit} />

                </Form>
            );
        }}
        </Formik>
    );
};

export default FormPostUser;