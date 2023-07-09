import s from './StepItem.module.css';

function StepItem(props){

    const {id, img, title, application, call, phone, description} = props;

    return(
        <div className={s.step_wrapper}>
            <div className={s.step_img}>
                <img src={img} alt='steps'/>
            </div>

            <div className={s.step_content}>
                <div className={s.title}>
                    <div className={s.title_number}>{id}</div>
                    <div className={s.title_text}>{title}</div>
                </div>

                <div className={s.step_info}>
                    <div className={s.application}>
                        {(application) && <a href='#'>{application} </a>}
                        {(call) && <p> {call} </p>}                                       
                    </div>
                    <div className={s.description}>
                        <span>{(phone) && <a href='#'>{phone}. </a>}</span>
                        {description}
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default StepItem