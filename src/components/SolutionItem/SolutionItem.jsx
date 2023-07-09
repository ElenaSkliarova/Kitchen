import s from './SolutionItem.module.css';
import Button from '../../UI/Button/Button';
import { useState } from 'react';
import Modal from '../../UI/Modal/Modal';

function SolutionItem(props){

    const [modalActive, setModalActive] = useState(false);

    const {img, title} = props;

    const emergingModal = () => {        
        setModalActive(true)
    }

    const children ={
        form_wrapper: 'modal_wrapper', 
        form: 'modal', 
        style_warning: 'warning_modal', 
        placeholder: 'Ваш телефон', 
        title: 'Получить консультацию', 
        style_btn: 'input_get_catalog'
    }

    return(
        <div className={s.solution_item_wrapper}>
            <div className={s.solution_img}>
                <img src={img} alt='additional features'/>
            </div>

            <div className={s.solution_info}>
                 <p className={s.title}>{title}</p>
                <Button onClick={emergingModal} title={'Получить консультацию'} style_btn={'get_consultation'}/>
                {modalActive && <Modal active={modalActive} setActive={setModalActive} children={children}/>}
            </div>            
        </div>
    )
}

export default SolutionItem