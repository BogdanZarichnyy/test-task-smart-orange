import PropTypes from 'prop-types';

import scss from './Button.module.scss';

import sprite from '../../images/sprite.svg';

const Button = ({ styles, text, onClick, type = 'button', disabled = false }) => {
    return (
        <button 
            className={[scss.button, styles].join(" ")}
            style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
            onClick={onClick} 
            type={type} 
            disabled={disabled} 
        >
            {text}
            <svg className={scss.icon} width="18" height="9">
                <use id="arrow-right" href={`${sprite}#arrow-right`} />
            </svg>
        </button>
    )
}

export default Button;

Button.propTypes = {
    styles: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool,
};