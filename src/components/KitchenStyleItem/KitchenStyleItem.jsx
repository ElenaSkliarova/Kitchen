import s from './KitchenStyleItem.module.css';

function KitchenStyleItem(props){

    const {img, title, onClick, selectedStyle} = props;

    const isSelected = selectedStyle === title;


    return(
        <div className={s.style_container}>
            <img className={s.kitchen_img} src={img} alt='style kitchen' />
            <button 
                className={isSelected ? `${s.style_btn} ${s.active}` : s.style_btn} 
                onClick={onClick}
            >{title}</button>  
        </div>
    )
}

export default KitchenStyleItem