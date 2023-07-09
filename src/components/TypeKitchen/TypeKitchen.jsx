import s from './TypeKitchen.module.css';
import { useContext } from "react";
import { Context } from "../../context/Context";
import TypeKitchenItem from "../TypeKitchenItem/TypeKitchenItem";


function TypeKitchen(){
    const {type_kitchen} = useContext(Context);

    const renderTypeKitchen = type_kitchen.slice(0,3);
    
    return(
        <div className={`${'main_container'} ${s.type_kitchen}`}>
            <div className={s.title}>
                <p>Не нашли нужную модель?</p>
                <p style={{color: 'var(--brand-color2)'}}>Она у нас точно есть!</p>                
                <div className={s.line}></div>
                <div className={s.subtitle}>
                    <p>Мы установили более  
                        <span style={{fontWeight: '700', color: 'var(--brand-color2'}}> 3000 </span> 
                        кухонь на заказ!
                    </p>
                    <p>Получите подробный каталог</p>
                </div>                
            </div>

            <div className={s.catalog_wrapper}>
                {renderTypeKitchen.map(el => <TypeKitchenItem key={el.id} {...el}/>)}
            </div>
        </div>
    )
}

export default TypeKitchen