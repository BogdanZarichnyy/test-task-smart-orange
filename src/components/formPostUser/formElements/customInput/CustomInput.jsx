import PropTypes from 'prop-types';
import { useField } from 'formik';

import scss from './CustomInput.module.scss';

const CustomInput = ({ label, styleLabel, CustomComponent, ...props }) => {
    const [field, meta] = useField(props);
    // const {value, ...rest} = field;

    const formatLabel = (textLabel) => {
        if (textLabel.endsWith('*')) {
            const require = textLabel.indexOf("*");
            const label = textLabel.slice(0, require);
            return (
                <span className={[scss.textLabel, props.name === 'message' && scss.textArea].join(' ')}>
                    {label}
                    <span className={scss.require}>*</span>
                </span>
            );
        } else {
            return <span className={scss.textLabel}>{label}</span>
        }
    }

    return (
        <label className={[scss.labelInput, styleLabel].join(" ")} htmlFor={props.name}>
            <CustomComponent {...field} {...meta} {...props} 
                // {...rest} 
            >
                {formatLabel(label)}
            </CustomComponent>
        </label>
    );
};

export default CustomInput;

CustomInput.propTypes = {
    label: PropTypes.string,
    styleLabel: PropTypes.string,
    CustomComponent: PropTypes.func,
    props: PropTypes.object,
};