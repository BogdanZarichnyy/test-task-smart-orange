import Button from '../button/Button';

import scss from './About.module.scss';

import aboutImages from '../../assets/images/aboutImages';
import textsHeaders from '../../assets/texts/textsHeaders';
import textsParagraphs from '../../assets/texts/textsParagraphs';

const About = () => {

    const handlerInfo = () => {
        console.log('Read more');
    }

    return (
        <section className={scss.about}>
            <div className='container'>
                <div className={scss.wrraper}>

                    <ul className={scss.imagesList}>
                        {aboutImages.map((item) => 
                            <li className={scss.imageItem} key={item.id}>
                                <img src={item.image} alt={item.alt} width="270" />
                            </li>
                        )}
                    </ul>

                    <div className={scss.company}>

                        <h2 className={scss.title}>{textsHeaders.about}</h2>

                        <p className={scss.text}>{textsParagraphs.about}</p>

                        <Button styles={scss.buttonAbout} text="ЧИТАТЬ" onClick={handlerInfo} />
                        
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;