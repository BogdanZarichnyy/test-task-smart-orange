import { Link } from 'react-router-dom';
import FooterInfo from './footerInfo/FooterInfo';
import FooterContacts from './footerContacts/FooterContacts';
import FooterSocial from './footerSocial/FooterSocial';

import scss from './Footer.module.scss';

import footerLogo from '../../images/logo-footer.png'
import textsParagraphs from '../../assets/texts/textsParagraphs';

const Footer = () => {
    return (
        <footer className={scss.footer}>
            <div className='container'>
                <div className={scss.wrraper}>

                    <Link className={scss.logoLink} to="/">
                        <img className={scss.logoImage} src={footerLogo} alt='contacts' width="145" />
                    </Link>

                    <FooterInfo />

                    <FooterContacts />

                    <FooterSocial />

                </div>
            </div>

            <p className={scss.author}>{textsParagraphs.footer}</p>

        </footer>
    );
};

export default Footer;