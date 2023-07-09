import s from './Button.module.css';

function Button({title, style_btn, style, name, onClick = () => {}}){
    return(
        <button onClick={onClick} title={title} className={`${s.btn} ${s[style_btn]}`} name={name} style={style}>{title}</button>
    )
}

export default Button