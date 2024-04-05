import { useState } from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

import scss from './CustomCheckboxInput.module.scss';

import sprite from '../../../../images/sprite.svg';

const CustomCheckboxInput = ({ children, as = 'input', setFieldValue, handleChange, type, name, valueConditions }) => {
    const [check, setCheck] = useState(valueConditions);

    return (
        <label className={scss.checkBox}>
            <Field as={as}
                onClick={event => {
                    setCheck(!check);
                    setFieldValue(name, event.target.value);
                    handleChange(event);
                }}
                className={scss.checkBoxInput} 
                type={type} name={name} 
                value={check}
                checked={valueConditions}
            />
            <span className={scss.checkBoxArea}></span>
            <svg className={scss.icon} width="13" height="10">
                <use id="check" href={`${sprite}#check`} />
            </svg>
            {children}
        </label>
    )
}

export default CustomCheckboxInput;

CustomCheckboxInput.propTypes = {
    children: PropTypes.object,
    as: PropTypes.string,
    setFieldTouched: PropTypes.func,
    handleChange: PropTypes.func,
    type: PropTypes.string,
    name: PropTypes.string,
};