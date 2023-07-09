import { useState } from 'react';
import Button from '../../UI/Button/Button';
import s from './Header.module.css';
import germ_standart_logo from './img_header/germ_standart_logo.svg';
import location_icon from './img_header/location_icon.svg';
import Modal from '../../UI/Modal/Modal';
import ModalPrice from '../ModalPrice/ModalPrice';


function Header(props){

    const {
        scrollToCatalog, scrollToGreetingBlock, 
        scrollToWhy, scrollToFiveSteps, scrollToChooseBlock,
        scrollToReviewsSlider, scrollToFooter
    } = props;

    const menu = ['цены', 'акции', 'материалы', 'как заказать', 'наши дизайнеры', 'отзывы', 'контакты'];

    const [modalActive, setModalActive] = useState(false);
    const [modalPriceActive, setModalPriceActive] = useState(false);

    const emergingModal = () => {
        setModalActive(true)
    }

    const emergingModalPrice = () => {
        setModalPriceActive(true)
    }

    const children ={
        form_wrapper: 'modal_wrapper', 
        form: 'modal', 
        style_warning: 'warning_modal', 
        placeholder: 'Ваш телефон', 
        title: 'Жду звонка', 
        style_btn: 'input_get_catalog'
    }

    return(
        <>
            <div className={s.header}>
                <div className={`${'main_container'} ${s.header_container}`}>
                    <div className={s.header_info}>
                        <div className={s.logo_wrapper}>
                            <div className={s.logo}>
                                <img src={germ_standart_logo} alt='logo' />
                                <p>КУХНИ НА ЗАКАЗ В ХАРЬКОВЕ</p>
                            </div>                    
                        </div>

                        <div className={s.time_wrapper}>
                            <div className={s.time_work}>
                                <p>Отвечаем на звонки</p>
                                <p>с 9:00 до 21:00</p>
                                <p>без выходных</p>
                            </div>
                        </div>
                    
                        <div className={s.location_wrapper}>
                            <div className={s.location}>
                                <img src={location_icon} alt='location icon' />
                                <div>
                                    <p>г. Харьков</p>
                                    <p>ул. Академика</p>
                                    <p>Павлова, 134/16</p>
                                </div>
                            </div>
                        </div>
                    
                        <div className={s.btn_wrapper}>
                            <div className={s.button}>
                                <Button onClick={emergingModalPrice} title={'Рассчитать стоимость'} style_btn={'calculate_cost'}/>
                            </div>
                        </div>
                    
                        <div className={s.call_wrapper}>
                            <div className={s.call}>
                                <p>+38 (096) 111-11-11</p>
                                <p>+38 (099) 111-11-11</p>
                                <a onClick={emergingModal} href='#'>Вам перезвонить?</a>
                            </div>
                        </div>               

                    </div>
                    <ul className={s.header_menu}>                
                        {/* {menu.map(el => {
                            return <li key={el}>{el}</li>
                        })}                 */}
                        <li onClick={scrollToCatalog}>{menu[0]}</li>
                        <li onClick={scrollToGreetingBlock}>{menu[1]}</li>
                        <li onClick={scrollToWhy}>{menu[2]}</li>
                        <li onClick={scrollToFiveSteps}>{menu[3]}</li>
                        <li onClick={scrollToChooseBlock}>{menu[4]}</li>
                        <li onClick={scrollToReviewsSlider}>{menu[5]}</li>
                        <li onClick={scrollToFooter}>{menu[6]}</li>
                    </ul>
                </div>
            </div> 
            {modalActive && <Modal active={modalActive} setActive={setModalActive} children={children} />} 
            {modalPriceActive && <ModalPrice active={modalPriceActive} setActive={setModalPriceActive} />}  
        </>  
    )
}

export default Header