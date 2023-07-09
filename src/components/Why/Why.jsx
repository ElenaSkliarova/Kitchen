import s from './Why.module.css';
import why_1 from './why_img/why_1.png';
import why_2 from './why_img/why_2.png';
import why_3 from './why_img/why_3.png';
import why_4 from './why_img/why_4.png';
import why_5 from './why_img/why_5.png';
import why_6 from './why_img/why_6.png';
import Button from '../../UI/Button/Button';
import { forwardRef, useState } from 'react';
import Modal from '../../UI/Modal/Modal';

const Why = forwardRef((props, ref) => {

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
        <div className={`${'main_container'} ${s.why_wrapper}`}>
            <div ref={ref} className={s.title}>
                <p>Почему выбирают <span style={{color: 'var(--brand-color2'}}>наши кухни?</span></p>
                <div className={s.line}></div>
            </div>

            <div className={s.why_content}>
                
                <div className={s.why_item}>
                    <div className={s.why_img}>
                        <img src={why_1} alt='front'/>
                    </div >

                    <div className={s.why_item_title}>Современные фасады</div>

                    <div className={s.why_description}>
                        <p>Наши фасады на <span className={s.span_main}>40%</span> долговечнее обычных, так как они влагоустойчивы и не подвержены повреждениям. В наличии более <span className={s.span_main}>250</span> фактур и <span className={s.span_main}>2000</span> оттенков.
                        </p>
                    </div>
                </div>

                <div className={s.why_item}>
                    <div className={s.why_img}>
                        <img src={why_2} alt='worktop'/>
                    </div >

                    <div className={s.why_item_title}>Прочные столешницы</div>

                    <div className={s.why_description}>
                        <p>Наши столешницы на <span className={s.span_main}>25%</span> прочнее и в <span className={s.span_main}>2</span> раза влагоустойчивее чем обычные. В наличии <span className={s.span_main}>10</span> покрытий и <span className={s.span_main}>170</span> вариантов расцветок и фактур.
                        </p>
                    </div>
                </div>

                <div className={s.why_item}>
                    <div className={s.why_img}>
                        <img src={why_3} alt='furniture'/>
                    </div >

                    <div className={s.why_item_title}>Долговечная и функциональная фурнитура</div>

                    <div className={s.why_description}>
                        <p>Выдерживает более <span className={s.span_main}>20</span> лет службы. Создает максимальный   комфорт и удобство пользования кухней.
                        </p>
                    </div>
                </div>

                <div className={s.why_item}>
                    <div className={s.why_img}>
                        <img src={why_4} alt='all documents'/>
                    </div >

                    <div className={s.why_item_title}>Полный комплект документов</div>

                    <div className={s.why_description}>
                        <p>Вы получите: договор, кассовый чек, гарантийный талон и правила эксплуатации. Это гарантирует защиту Ваших прав.
                        </p>
                    </div>
                </div>    

                <div className={s.why_item}>
                    <div className={s.why_img}>
                        <img src={why_5} alt='polite pickers'/>
                    </div >

                    <div className={s.why_item_title}>Опытные и вежливые сборщики</div>

                    <div className={s.why_description}>
                        <p>Наши сборщики вежливы и аккуратны. Соберут, установят и вынесут строительный мусор. Имеют стаж работы с кухнями  не менее <span className={s.span_main}>6</span> лет.
                        </p>
                    </div>
                </div>    

                <div className={s.why_item}>
                    <div className={s.why_img}>
                        <img src={why_6} alt='free shipping'/>
                    </div >

                    <div className={s.why_item_title}>Бесплатная доставка и сборка кухни</div>

                    <div className={s.why_description}>
                        <p>Мы бесплатно доставим, соберем и установим Вашу кухню в любой точке Краснодара.</p>
                    </div>
                </div>
            </div>

            <div className={s.btn_section}>
                <Button title={'Рассчитать стоимость'} style_btn={'calculate_cost'} style={{width:  '286px'}}/>
                <Button onClick={emergingModal} title={'Получить весь каталог'} style_btn={'get_catalog'} style={{width:  '286px'}}/>
                {modalActive && <Modal active={modalActive} setActive={setModalActive} children={children}/>}
            </div>
        </div>
    )
})

export default Why