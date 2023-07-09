import s from './Designer.module.css';


function Designer(props){
    
    const {img, name, year} = props;

    return(
        <div className={s.designer_wrapper}>
            <div className={s.designer_img}>
                <img src={img} alt='designer' />
            </div>
            <div className={s.designer_info}>
                <span className={s.designer_main}>{`${name},`} </span> 
                Дизайнер кухонь, работает с 
                <span className={s.designer_main}> {year} </span>
                года
            </div>
        </div>
    )
}

export default Designer