import s from './RemainQuestions.module.css';
import photo from './remain_questions_img/photo.png';
import location_icon from './remain_questions_img/location_icon.svg';
import watch_icon from './remain_questions_img/watch_icon.svg';
import phone_icon from './remain_questions_img/phone_icon.svg';

function RemainQuestions(){
    return(
        <div className={`${'main_container'} ${s.remain_questions_wrapper}`}>                 
            <div className={s.title}>
                <p>Остались вопросы? —  </p>
                <p style={{color: 'var(--brand-color2'}}>С радостью ответим на них!</p>
                <div className={s.line}></div>
            </div>

            <div className={s.remain_questions_content}>
                <div className={s.time_location}>                    
                    <div className={s.time_wrapper}>                        
                        <img className={s.icon} src={watch_icon} alt='watch icon' />
                        <div className={s.time_work}>
                            <p>Отвечаем на </p>
                            <p>звонки с 9:00 до </p>
                            <p>21:00 без выходных!</p>
                        </div>                        
                    </div>

                    <div className={s.location_wrapper}>                        
                        <img className={s.icon} src={location_icon} alt='location icon' />
                        <div className={s.location}>
                            <p>г. Харьков</p>
                            <p>ул. Академика</p>
                            <p>Павлова, 134/16</p>
                        </div>                        
                    </div>                 
                </div>

                <div className={s.photo_designer}>
                    <img src={photo} alt='photo designer' />
                    <p><span style={{color: 'var(--brand-color2'}}>Юлия, </span> Дизайнер</p>
                </div>

                <div className={s.phone_wrapper}>                
                    <img className={s.icon} src={phone_icon} alt='location icon' />
                    <div className={s.phone}>+38 (096) 111-11-11                                
                    </div>                    
                </div>               

            </div>
        </div>
    )
}

export default RemainQuestions