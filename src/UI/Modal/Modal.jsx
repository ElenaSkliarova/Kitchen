import s from './Modal.module.css';
import Form from '../Form/Form';

function Modal({active, setActive, children}){

    return(
        <div className={active ? `${s.modal} ${s.active}` : s.modal} onClick={() => setActive(false)}>
            <div className={active ? `${s.modal_content} ${s.active}` : s.modal_content} onClick={e => e.stopPropagation() }>
                <div className={s.info}>
                    Оставьте свой номер телефона сейчас и наш дизайнер свяжется с Вами в ближайшее время!
                </div>
                <Form {...children}/>
            </div>
        </div>
    )
}

export default Modal