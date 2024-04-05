import scss from './FooterSocial.module.scss';

import sprite from '../../../images/sprite.svg';
import textsHeaders from '../../../assets/texts/textsHeaders';

const FooterSocial = () => {
    return (
        <div className={scss.social}>

            <h2 className={scss.title}>{textsHeaders.footerSocial}</h2>

            <ul className={scss.socialList}>
                <li className={scss.socialItem}>
                    <a className={scss.link} href='#'>
                        <svg className={scss.icon} width="10" height="19">
                            <use id="facebook" href={`${sprite}#facebook`} />
                        </svg>
                    </a>
                </li>
                <li className={scss.socialItem}>
                    <a className={scss.link} href='#'>
                        <svg className={scss.icon} width="21" height="16">
                            <use id="twitter" href={`${sprite}#twitter`} />
                        </svg>
                    </a>
                </li>
                <li className={scss.socialItem}>
                    <a className={scss.link} href='#'>
                        <svg className={scss.icon} width="20" height="19">
                            <use id="linkedin" href={`${sprite}#linkedin`} />
                        </svg>
                    </a>
                </li>
                <li className={scss.socialItem}>
                    <a className={scss.link} href='#'>
                        <svg className={scss.icon} width="14" height="18">
                            <use id="pininterest" href={`${sprite}#pininterest`} />
                        </svg>
                    </a>
                </li>
            </ul>

        </div>
    );
};

export default FooterSocial;