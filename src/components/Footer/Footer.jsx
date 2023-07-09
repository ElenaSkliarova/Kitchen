import { forwardRef } from 'react';
import FooterTop from '../FooterTop/FooterTop';
import s from './Footer.module.css';
import {BiCopyright} from 'react-icons/bi';

const Footer = forwardRef((props, ref) => {
    return(
        <div ref={ref} className={s.footer_wrapper}>
            <FooterTop />

            <div className={s.footer_bottom_wrapper}>
                <div className={`${'main_container'} ${s.footer_bottom}`}>
                    <div className={s.footer_bottom1}>
                        <div className={s.footer_bottom11}>
                            <BiCopyright className={s.copyright} />
                            <p>“Немецкий Стандарт” Информация на сайте не является публичной офертой.</p>
                        </div>                        
                        <p>Настоящий сайт не является интернет-магазином.</p>
                    </div>

                    <div className={s.footer_bottom2}>
                        <BiCopyright className={s.copyright}/>
                        <p>Все права защищены</p>
                    </div>

                    <div className={s.footer_bottom3}>
                        Политика конфиденциальности
                    </div>

                </div>
                
            </div>                   
        </div>
    )
})

export default Footer