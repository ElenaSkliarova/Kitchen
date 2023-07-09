import { useContext, useState } from 'react';
import s from './ModalPrice.module.css';
import { Context } from '../../context/Context';
import KitchenStyleItem from '../KitchenStyleItem/KitchenStyleItem';
import FormKitchenItem from '../FormKitchenItem/FormKitchenItem';
import Form from '../../UI/Form/Form';

function ModalPrice({active, setActive}){

    const {type_kitchen, form_kitchens} = useContext(Context);
    
    const square = ['До 5 м²', 'До 8 м²','До 15 м²','Другое'];

    let startOrder = {
        style:'',
        form:'',
        square:'',
    }

    const [order, setOrder] = useState(startOrder);
    console.log("order==", order);

    const chooseStyleKitchen = (e) => {        
        setOrder({...order, style: e.target.innerHTML})
    }

    const chooseFormKitchen = (e) => {
        setOrder({...order, form: e.target.getAttribute("title")})
    }

    const chooseSquare = (e) => {
        setOrder({...order,square: e.target.innerHTML})
    }

    return(
        <div className={active ? `${s.modal} ${s.active}` : s.modal} onClick={() => setActive(false)}>
            <div className={active ? `${s.modal_content} ${s.active}` : s.modal_content} onClick={(e) => e.stopPropagation()}>
                <h2>Узнайте цену <span style={{color: 'var(--brand-color2'}}>вашей кухни</span></h2>
                <div className={s.style_wrapper}>
                    <p className={s.subtitle} >Стиль:</p>
                    <div className={s.type_kitchen_container}>
                        {type_kitchen.map(el => 
                            <KitchenStyleItem {...el} 
                                selectedStyle={order.style}
                                onClick={chooseStyleKitchen}
                                />)}
                    </div>
                </div>

                <div className={s.form_kitchen_wrapper}>
                    <p className={s.subtitle} >Форма:</p>
                    <div className={s.form_kitchen_container}>
                        {form_kitchens.map(el => 
                            <FormKitchenItem {...el} 
                                selectedForm={order.form} 
                                onClick={chooseFormKitchen}
                                />)}
                    </div>
                </div>

                <div className={s.square_wrapper}>
                    <p className={s.subtitle} >Площадь кухни:</p>
                    <div className={s.square_container}>
                        {square.map(el => 
                            <button 
                                className={(el === order.square) 
                                    ? `${s.square_btn} ${s.active_btn}` 
                                    : s.square_btn} onClick={chooseSquare}
                                >
                                {el}
                            </button>)}

                    </div>
                </div>

                <div className={s.submit_section}>
                    <div>
                        Оставьте свой номер телефона сейчас и наш дизайнер свяжется с Вами в ближайшее время!
                    </div>
                    <Form 
                        form_wrapper={'modal_price_wrapper'}
                        form={'modal_price'}
                        title={'Рассчитать стоимость'} 
                        style_btn={'input_calculate_cost'} 
                        placeholder={'Номер телефона'}
                        style_warning={'warning_modal_price'}
                        order={order}
                    />
                </div>
            </div>            
        </div>
    )
}

export default ModalPrice