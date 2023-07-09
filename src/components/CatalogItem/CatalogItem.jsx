import { useState } from 'react';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';
import s from './CatalogItem.module.css';


function CatalogItem(props){

    const {img, front, furniture, worktop, price, discounted_price} = props;

    const [modalActive, setModalActive] = useState(false);

    const children ={
        form_wrapper: 'modal_wrapper', 
        form: 'modal', 
        style_warning: 'warning_modal', 
        placeholder: 'Ваш телефон', 
        title: 'Получить Каталог', 
        style_btn: 'input_get_catalog'
    }

    const emergingModal = () => {
        console.log('emergingModal')
        setModalActive(true)
    }

    return(
        <div>
            <div className={s.catalog_item}>
                <div className={s.img_kitchen}>
                    <img src={img} alt='image kitchen'/>
                </div>

                <div className={s.kitchen_info}>
                    <div className={s.material_info}>
                        <div className={s.material}>
                            <div className={s.material_item}>
                                <p>материал фасадов:</p>
                                <p className={s.p_value}>{front}</p>
                            </div>
                            
                            <div className={s.material_item}>
                                <p>фурнитура:</p>
                                <p className={s.p_value}>{furniture}</p>
                            </div>

                            <div className={s.material_item}>
                                <p>столешница:</p>
                                <p className={s.p_value}>{worktop}</p>
                            </div>                            
                        </div>
                        
                        <div className={s.price}>
                            <p>Цена:</p>
                            <p className={s.p_value}> от <span style={{textDecoration: 'line-through'}}>{price}</span></p>
                            <p className={s.p_discount}>{discounted_price} грн. п./м.</p>                            
                        </div>    
                    </div> 

                    <Button onClick={emergingModal} title={'Получить каталог'}   style_btn={'get_catalog'}/>
                    {modalActive && <Modal active={modalActive} setActive={setModalActive} children={children}/>}

                    <Button title={'Рассчитать стоимость'} style_btn={'calculate_cost'}/>

                </div>                           
            </div>
        </div>
    )
}

export default CatalogItem