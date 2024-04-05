import { Link } from 'react-router-dom';

import scss from './FooterInfo.module.scss';

import navigation from '../../../routers/routers';
import textsHeaders from '../../../assets/texts/textsHeaders';

const FooterInfo = () => {
    return (
        <div className={scss.info}>

            <h2 className={scss.title}>{textsHeaders.footerInfo}</h2>

            <ul className={scss.navigationList}>
                {navigation.map((item) => 
                    <li className={scss.navigationItem} key={item.id}>
                        <Link className={scss.navigationLink} to={item.to}>{item.title}</Link>
                    </li>
                )}
            </ul>

        </div>
    );
};

export default FooterInfo;