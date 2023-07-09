import { forwardRef } from 'react';
import Form from '../../UI/Form/Form';
import DesignersSlider from '../DesignersSlider/DesignersSlider';
import s from './ChooseBlock.module.css';
import {AiOutlineCheckCircle} from 'react-icons/ai';
import Button from '../../UI/Button/Button';

const ChooseBlock = forwardRef((props, ref) => {

    const uploadFilesInput = () => {
        document.getElementById('file_input').click()
    }

    const handleFilesInput = (e) => {
        const files = e.target.files;
        console.log('files===', files);
    }

    return(
        <div className= {`${'main_container'} ${s.choose_block_wrapper}`} >
            <div ref={ref} className={s.main_title}>
                <p>Не знаете какой выбрать </p>
                <p style={{color: 'var(--brand-color2)'}}>дизайн кухни?</p>
                <div className={s.line}></div>
            </div>

            <div className={s.content_wrapper}>
                <DesignersSlider />

                <div className={s.content}>
                    <div className={s.content_title}>
                        <p>Обратитесь к нашим  </p>
                        <p style={{color: 'var(--brand-color2)'}}>дизайнерам!</p>                        
                    </div>

                    <div className={s.content_subtile}>
                        <p>Более 3000 клиентов благодарны</p>
                        <p>нашим дизайнерам за:</p>
                    </div>

                    <div className={s.content_item}>
                        <div className={s.content_item_icon}>
                            <AiOutlineCheckCircle className={s.checkCircle_icon}/>
                        </div>
                        <div className={s.content_item_text}>
                            <p>Скрупулезную и терпеливую работу </p>
                            <p>по созданию проекта идеальной кухни.</p>
                        </div>                   
                    </div>

                    <div className={s.content_item}>
                        <div className={s.content_item_icon}>
                            <AiOutlineCheckCircle className={s.checkCircle_icon}/>
                        </div>
                        <div className={s.content_item_text}>
                            <p>Подбор материалов с экономией</p>
                            <p>до 60% без потери качества.</p>
                        </div>                   
                    </div>

                    <div className={s.content_item}>
                        <div className={s.content_item_icon}>
                            <AiOutlineCheckCircle className={s.checkCircle_icon}/>
                        </div>
                        <div className={s.content_item_text}>
                            <p>100% соответствие дизайн-проекта</p>
                            <p>с реальностью.</p>
                        </div>                   
                    </div>

                    <div className={s.form_section}>
                        <div className={s.content_subtile}>
                            <p>Оставьте свой номер телефона</p>
                            <p>и наш дизайнер свяжется</p>
                            <p>с Вами в ближайшее время</p>
                        </div>

                        <div  className={s.input_section}>
                            <Form 
                                form_wrapper={'consultation_wrapper'}
                                form={'consultation'}
                                placeholder={'Введите номер'}
                                style_warning={'warning_consultation'}
                                title={'Получить консультацию'}
                                style_btn={'input_get_consultation'}                                
                            />
                            
                            <div>
                                <input  onChange={handleFilesInput} type='file' id='file_input' style={{display: 'none'}} multiple/>
                                <Button onClick={uploadFilesInput} title={'Прикрепить свой проект'} style_btn={'add_project'}/>
                            </div>
                        </div>           
                    </div>

                </div>

            </div> 
        </div>
    )
})

export default ChooseBlock
