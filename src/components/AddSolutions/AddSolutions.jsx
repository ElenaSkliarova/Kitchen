import { useContext } from 'react';
import {Context} from '../../context/Context';
import s from './AddSolutions.module.css';
import SolutionItem from '../SolutionItem/SolutionItem';

function AddSolutions(){
    const {add_solutions} = useContext(Context);

    return(
        <div className={s.add_solutions_wrapper}>
            <div className='main_container'>
                <div className={s.title}>
                    <p>Наши <span style={{color: 'var(--brand-color2)'}}>дополнительные</span></p>
                    <p><span style={{color: 'var(--brand-color2)'}}>решения</span> для Вашей кухни</p>
                    <div className={s.line}></div>
                </div>

                <div className={s.add_solutions_content}>
                    {add_solutions.map(el => <SolutionItem key={el.id} {...el}/>)}
                </div>
            </div>          
        </div>
    )
}

export default AddSolutions
