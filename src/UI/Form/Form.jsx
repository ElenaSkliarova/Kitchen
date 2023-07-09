import {useForm} from 'react-hook-form';
import s from './Form.module.css';
import Button from '../Button/Button';



function Form({form_wrapper, form, style_warning, placeholder, title, style_btn, order = {}}){

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({mode: 'onSubmit'})

    const phoneInput = register('phoneNumber', {
        required: 'Номер телефона обязателен для заполнения',
        pattern: {
            value: /^\+38\d{10}$/,
            message: 'Номер телефона должен начинаться с +38 и содержать 12 цифр!'
        }
    })    

    const onSubmit = (data) => {
        const result = Object.assign({}, data, order);
        console.log('result===', result); 
        reset();
      };

    return(
        <div >
            <form onSubmit={handleSubmit(onSubmit)} className={s[form_wrapper]}>
                <div className={s[form]}>
                    <input className={s[style_btn]} {...phoneInput} placeholder={placeholder}/>           
                    <Button name='submitButton' title={title} style_btn={style_btn}/>           
                </div>
                
                {errors.phoneNumber && <div className={`${s.warning_phone} ${s[style_warning]}`}>{errors.phoneNumber.message}</div>}
            </form>

        </div>
    )
}

export default Form