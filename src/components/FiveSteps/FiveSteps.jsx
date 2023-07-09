import { forwardRef, useContext, useState } from 'react';
import s from './FiveSteps.module.css';
import { Context } from '../../context/Context';
import StepItem from '../StepItem/StepItem';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';


const FiveSteps = forwardRef((props, ref) => {

    const {five_steps} = useContext(Context);
    const first_steps = five_steps.slice(0,3);
    const last_steps = five_steps.slice(3);

    const [modalActive, setModalActive] = useState(false);

    const emergingModal = () => {
        setModalActive(true)
    }

    const children ={
        form_wrapper: 'modal_wrapper', 
        form: 'modal', 
        style_warning: 'warning_modal', 
        placeholder: 'Ваш телефон', 
        title: 'Получить Каталог', 
        style_btn: 'input_get_catalog'
    }

    return(
        <div className={s.five_steps_wrapper}>
            <div className={`${'main_container'} ${s.five_steps_section}`}>
                <div ref={ref} className={s.title}>
                    <p>5 шагов к Вашей идеальной кухне</p>
                    <div className={s.line}></div>
                </div>

                <div className={s.first_steps}>
                    {first_steps.map(el => <StepItem key={el.id} {...el}/>)}
                </div>

                <div className={s.last_steps}>
                    {last_steps.map(el => <StepItem key={el.id} {...el}/>)}
                </div>

                <div className={s.btn_section}>
                    <Button title={'Рассчитать стоимость'} style_btn={'calculate_cost'} style={{width:  '286px'}}/>
                    <Button onClick={emergingModal} title={'Получить весь каталог'} style_btn={'get_catalog'} style={{width:  '286px'}}/>
                    {modalActive && <Modal active={modalActive} setActive={setModalActive} children={children}/>}
                </div>
            </div>
        </div>
    )
})

export default FiveSteps