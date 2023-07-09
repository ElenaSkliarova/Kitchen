import s from './ReviewItem.module.css';
import star from './review_item_img/star.svg';
import Button from '../../UI/Button/Button';
import { useState } from 'react';
import Modal from '../../UI/Modal/Modal';

function ReviewItem(props){

    const {name, date, rating, comments, img_1, img_2, onClick} = props;

    

    function StarRating({rating}) {
        const stars = [];
      
        for (let i = 0; i < rating; i++) {
            stars.push(<img src={star} alt='star' key={i} className={s.star}/>);          
          }
        return <div>{stars}</div>;
    }      
           

    return(        
        <div className={s.review_item_wrapper}>
            <div className={s.review_info}>

                <p className={s.date}>{date}</p>

                <div>
                    <p className={s.name}>{name}</p>
                    <div>
                        {StarRating({rating})}
                    </div>
                </div>
                
                <div className={s.comments}>{comments}</div>
                <Button onClick={onClick} title={'Получить дизайн проект'} style_btn={'get_project_design'}/>
                
            </div>

            <div className={s.review_img_wrapper}>
                <div className={s.review_img}>
                    <img src={img_1} alt='author'/>
                </div>
                <div className={s.review_img}>
                    <img src={img_2} alt='kitchen' />
                </div>
            </div>    
        </div>   
    )
}

export default ReviewItem