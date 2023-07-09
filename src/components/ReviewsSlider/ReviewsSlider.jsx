import { forwardRef, useContext, useState } from 'react';
import s from './ReviewsSlider.module.css';
import { Context } from '../../context/Context';
import ReviewItem from '../ReviewItem/ReviewItem';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';
import Modal from '../../UI/Modal/Modal';

const ReviewsSlider = forwardRef((props, ref) => {

    const {reviews} = useContext(Context);

    const [modalActive, setModalActive] = useState(false);

    const children ={
        form_wrapper: 'modal_wrapper', 
        form: 'modal', 
        style_warning: 'warning_modal', 
        placeholder: 'Ваш телефон', 
        title: 'Оставить заявку', 
        style_btn: 'input_get_catalog'
    }

    const emergingModal = () => {
        setModalActive(true)
    }

    const page_width = 1137;

    const [offset, setOffset] = useState(0);

    const handleRightArrowClick = () => {
            setOffset((currentOffset) => {
            const newOffset = currentOffset - page_width;
            console.log("newOffset==", newOffset);
            return currentOffset = (newOffset === -5685) ? 0 : newOffset;
        } )
    }

    const handleLeftArrowClick = () => {
            setOffset((currentOffset) => {
            const newOffset = currentOffset + page_width;
            console.log("newOffset==", newOffset);
            return currentOffset = (newOffset === 1137) ? -4548 : newOffset;
        } )
    }

    return(
        <div className={`${'main_container'} ${s.reviews_wrapper}`}>
            <div ref={ref} className={s.title}>
                <p>Нам благодарны</p>
                <div className={s.line}></div>
            </div>

            <div className={s.slice_container}>

                <div className={`${s.arrow_wrapper} ${s.left}`} onClick={handleLeftArrowClick}>
                    <BsChevronLeft className={s.arrow}/>                
                </div>

                <div className={s.window}>
                    <div className={s.all_pages_container} style={{transform: `translateX(${offset}px)`}}>
                        {reviews.map(el => <ReviewItem key={el.id} {...el}
                            onClick={emergingModal}
                            style={{
                                height: '411px',
                                minWidth: `${page_width}px`,
                                maxWidth: `${page_width}px`
                            }}
                        />)}
                    </div>
                </div>

                <div className={`${s.arrow_wrapper} ${s.right}`} onClick={handleRightArrowClick}>
                    <BsChevronRight className={s.arrow}/>
                </div>  

            </div>

            {modalActive && <Modal active={modalActive} setActive={setModalActive} children={children}/>}
        </div>
    )
})

export default ReviewsSlider