import { useState } from 'react';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';
import s from './TypeKitchenItem.module.css';


function TypeKitchenItem(props){

    const {img, type, description} = props;

    const [modalActive, setModalActive] = useState(false);

    const emergingModal = () => {
        console.log('emergingModal')
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
        <div className={s.kitchen_item_wrapper} >
            <div className={s.img_type}>
                <img src={img} alt='type kitchen' />
            </div>

            <div className={s.info_type}>
                <p className={s.type}> {type}</p>
                <p className={s.description}>{description}</p>
                <Button onClick={emergingModal} title={'Получить каталог'} style_btn={'get_catalog_red'}/>
                {modalActive && <Modal active={modalActive} setActive={setModalActive} children={children}/>}                
            </div>

        </div>
    )
}

export default TypeKitchenItem