import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';

import scss from './Header.module.scss';

import navigation from '../../routers/routers';

const Header = () => {
    const [active, setActive] = useState(1);

    return (
        <header className={scss.header} id="home">
            <div className='container'>
                <nav className={scss.wrraper}>

                    <Logo />

                    <ul className={scss.navigationList}>
                        {navigation.map((item) => 
                            <li className={[scss.navigationItem, active === item.id && scss.active].join(' ')} key={item.id} onClick={() => setActive(item.id)}>
                                <Link className={scss.navigationLink} activeclass={scss.active} to={item.to}>{item.title}</Link>
                            </li>
                        )}
                    </ul>
        
                </nav>
            </div>
        </header>
    );
};

export default Header;