import Button from '../../UI/Button/Button';
import Form from '../../UI/Form/Form';
import s from './AskQuestion.module.css';

function AskQuestion(){
    return(
        <div className={s.ask_question_wrapper}>
            <div className={`${'main_container'} ${s.ask_question_content}`}>
                <p className={s.title}>Оставьте свой номер телефона наш дизайнер свяжется с Вами в ближайшее время!</p>

                <div>
                    <Form 
                        form_wrapper={'ask_question_wrapper'}
                        form={'ask_question'}
                        title={'Задать вопрос'} 
                        style_btn={'input_ask_question'} 
                        placeholder={'Введите номер телефона'}
                        style_warning={'warning_ask_question'}
                    />
                </div>

            </div>
        </div>
    )
}

export default AskQuestion