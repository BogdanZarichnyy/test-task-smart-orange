import scss from './Tasks.module.scss';

import textsHeaders from '../../assets/texts/textsHeaders';
import textTasks from '../../assets/texts/textsTasks';

const Tasks = () => {
    return (
        <section className={scss.tasks}>
            <div className='container'>

                <h2 className={scss.title}>{textsHeaders.tasks}</h2>

                <ul className={scss.tasksList}>
                    {textTasks.map((item) => 
                        <li className={scss.taskItem} key={item.id}>
                            <h3 className={scss.number}>{item.id}</h3>
                            <p className={scss.text}>{item.task}</p>
                        </li>
                    )}
                </ul>

            </div>
        </section>
    );
};

export default Tasks;