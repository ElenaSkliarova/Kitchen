import s from './GreetingBlock.module.css';
import price_icon from './greeting_img/price_icon.svg';
import date_icon from './greeting_img/date_icon.svg';
import guaranty_icon from './greeting_img/guaranty_icon.svg';
import Form from '../../UI/Form/Form';
import { forwardRef } from 'react';



const GreetingBlock = forwardRef((props, ref) => {
    return(
        <div className={s.greeting_block} > 
            <div className='main_container'>
                <div className={s.greeting_info}> 

                    <div ref={ref} className={s.title}>
                        <p >Кухни на заказ</p>
                        <p style={{color: 'var(--brand-color2)'}}>в Харькове</p>
                    </div>

                    <div className={s.info}>
                        <img src={price_icon} alt='price icon' />
                        <p>Цена от <span style={{color: 'var(--brand-color2)'}}>19990 грн. м./п.</span></p>
                    </div>

                    <div className={s.info}>
                        <img src={date_icon} alt='date icon' />
                        <p>Изготовим от <span style={{color: 'var(--brand-color2)'}}>7 дней</span></p>
                    </div>

                    <div className={s.info}>
                        <img src={guaranty_icon} alt='guaranty icon' />
                        <p>Гарантия <span style={{color: 'var(--brand-color2)'}}>2 года</span></p>
                    </div>
                </div>

                <div className={s.sale}>
                    <div className={s.sale_info}>
                        <p className={s.sale_title}>Акция</p>
                        <p className={s.sale_text}>Скидка <span style={{fontWeight: '700', color: 'var(--brand-color2)'}}>35%</span> на Вашу кухню</p>
                        <p className={s.sale_date}>до 01.01.2024</p>
                    </div>

                    <Form 
                        form_wrapper={'discount_wrapper'}
                        form={'discount'}
                        title={'Получить скидку'} 
                        style_btn={'input_get_discount'} 
                        placeholder={'Введите номер телефона'}
                        style_warning={'warning_discount'}
                    />
                </div>
            </div>   
        </div>
    )
})

export default GreetingBlock