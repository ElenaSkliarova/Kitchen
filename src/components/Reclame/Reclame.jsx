import s from './Reclame.module.css';
import installment_icon_1 from './reclame_img/installment_icon_1.svg';
import mounting_icon_2 from './reclame_img/mounting_icon_2.svg';
import gearwheel_icon_3 from './reclame_img/gearwheel_icon_3.svg';
import sand_glass_icon_4 from './reclame_img/sand_glass_icon_4.svg';

function Reclame(){
    return(
        <div className={`${'main_container'} ${s.reclame}`}>        
            <div className={s.div_reclame}>
                <div className={s.reclame_img}>
                    <img src={installment_icon_1} alt='installment icon'/>
                </div>                
                <p>Рассрочка 0% </p>
                <p>до 12 месяцев</p>
            </div>

            <div className={s.div_reclame}>
                <div className={s.reclame_img}>
                    <img src={mounting_icon_2} alt='installment icon'/>
                </div>                
                <p>Устанавливаем кухни</p>
                <p>с 2013 года</p>
            </div>

            <div className={s.div_reclame}>
                <div className={s.reclame_img}>
                    <img src={gearwheel_icon_3} alt='installment icon'/>
                </div>                
                <p>Бесплатная</p>
                <p>установка</p>
            </div>

            <div className={s.div_reclame}>
                <div className={s.reclame_img}>
                    <img src={sand_glass_icon_4} alt='installment icon'/>
                </div>                
                <p>Срок службы</p>
                <p>20 лет</p>
            </div>
    </div>
    )    
}

export default Reclame

