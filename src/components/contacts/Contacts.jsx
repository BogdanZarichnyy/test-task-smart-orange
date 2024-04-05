import FormPostUser from '../formPostUser/FormPostUser';

import scss from './Contacts.module.scss';

import textsHeaders from '../../assets/texts/textsHeaders';
import contactsImage from '../../images/contacts/contacts.jpg'

const Contacts = () => {
    return (
        <section className={scss.contacts}>
            <div className='container'>
                
                <h2 className={scss.title}>{textsHeaders.contacts}</h2>

                <div className={scss.wrraper}>

                    <FormPostUser />

                    <img className={scss.image} src={contactsImage} alt='contacts' width="750" />

                </div>
            </div>
        </section>
    );
};

export default Contacts;