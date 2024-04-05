import scss from './FooterContacts.module.scss';

import sprite from '../../../images/sprite.svg';
import textsHeaders from '../../../assets/texts/textsHeaders';
import address from '../../../assets/texts/textsAddress';

const FooterContacts = () => {

    const formatNumber = (numberTel) => {
        return numberTel.replace(/^\+(\d{2}) \((\d{3})\)\ (\d{3})\ (\d{2})\ (\d{2})$/, '$1$2$3$4$5');
    }

    return (
        <div className={scss.contacts}>

            <h2 className={scss.title}>{textsHeaders.footerContacts}</h2>

            <ul className={scss.contactsList}>
                <li className={scss.contact}>
                    <a className={scss.link} href='https://maps.app.goo.gl/Gnn9LcnZ9wKrNais8' rel="noopener noreferrer" target="_blank">
                        <svg className={scss.icon} width="17" height="16">
                            <use id="map-pin" href={`${sprite}#map-pin`} />
                        </svg>
                        {address.address}
                    </a>
                </li>
                <li className={scss.contact}>
                    <a className={scss.link} href={`tel:${formatNumber(address.tel)}`}>
                        <svg className={scss.icon} width="17" height="16">
                            <use id="phone" href={`${sprite}#phone`} />
                        </svg>
                        {address.tel}
                    </a>
                </li>
                <li className={scss.contact}>
                    <a className={scss.link} href={`mailto:${address.email}`}>
                        <svg className={scss.icon} width="16" height="11">
                            <use id="email" href={`${sprite}#email`} />
                        </svg>
                        {address.email}
                    </a>
                </li>
            </ul>

        </div>
    );
};

export default FooterContacts;