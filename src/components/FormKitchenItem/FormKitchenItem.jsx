import s from './FormKitchenItem.module.css';

function FormKitchenItem({id, img1, img2, title, onClick, selectedForm}){

    const isSelected = selectedForm === title;
    
    return(
        <div className={s.form_item_wrapper}>
            <button 
                className={isSelected ? `${s.circle_btn} ${s.active}` : s.circle_btn} 
                onClick={onClick} 
                title={title}
                >
                <img 
                    className={isSelected ? `${s.circle_img} ${s.img_white}`: s.circle_img} 
                    src={isSelected ? img2 : img1} alt='sign form kitchen' />
            </button>
            <p className={s.title}>{title}</p>
        </div>
    )
}
export default FormKitchenItem