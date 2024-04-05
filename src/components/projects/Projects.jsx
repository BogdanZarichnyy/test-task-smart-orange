import Button from '../button/Button';

import scss from './Projects.module.scss';

import textsHeaders from '../../assets/texts/textsHeaders';
import projectsImages from '../../assets/images/projectsImages'

const Projects = () => {

    const handlerInfo = () => {
        console.log('More info');
    }

    const handlerAllProjects = () => {
        console.log('All projects');
    }

    return (
        <section className={scss.projects}>
            <div className='container'>

                <h2 className={scss.title}>{textsHeaders.projects}</h2>

                <ul className={scss.projectsList}>
                    {projectsImages.map((item) => 
                        <li className={scss.projectItem} key={item.id}>
                            <img className={scss.image} src={item.image} alt={item.alt} height="255" />
                            <div className={scss.overlay}>
                                <div className={scss.info}>
                                    <h3 className={scss.text}>{item.info}</h3>
                                    <Button styles={scss.buttonProject} onClick={handlerInfo} text='ПОДРОБНЕЕ' />
                                </div>
                            </div>
                        </li>
                    )}
                </ul>

                <Button styles={scss.buttonProjects} text="ВСЕ ПРОЕКТЫ" onClick={handlerAllProjects} />

            </div>
        </section>
    );
};

export default Projects;