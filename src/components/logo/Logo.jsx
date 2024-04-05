import { NavLink } from 'react-router-dom';

import logoText from '../../images/logo-header.png';
import sprite from '../../images/sprite.svg';

import scss from './Logo.module.scss';

const Logo = () => {   
    return (
        <NavLink className={scss.logo} to="/" end>
            <svg className={scss.logoIcon} width="28" height="26">
                <use id="logo-header" href={`${sprite}#logo-header`} />
            </svg>
            <img className={scss.logoImage} src={logoText} alt="Logo text" width="69"/>
        </NavLink>
    );
};

export default Logo;