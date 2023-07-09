import { useContext, useState } from 'react';
import s from './DesignersSlider.module.css';
import { Context } from '../../context/Context';
import {BsChevronLeft,BsChevronRight} from 'react-icons/bs';
import Designer from '../Designer/Designer';

function DesignersSlider(){
    const {designers} = useContext(Context);
    // console.log("designers====", designers);

    const [offset, setOffset] = useState(0);

    const page_width = 569;

    const handleRightArrowClick = () => {
        // console.log("handleRightArrowClick==", handleRightArrowClick)
        setOffset((currentOffset) => {
            const newOffset = currentOffset - page_width;
            return currentOffset = (newOffset === -1707) ? 0 : newOffset;
        } )
    }

    const handleLeftArrowClick = () => {
        // console.log("handleLeftArrowClick==", handleLeftArrowClick)
        setOffset((currentOffset) => {
            const newOffset = currentOffset + page_width;
            return currentOffset = (newOffset === 569) ? -1138 : newOffset;
        } )
    }

    return(
        <div className={s.slider_container}>
            <div className={`${s.arrow_wrapper} ${s.left}`} onClick={handleLeftArrowClick}>
                <BsChevronLeft className={s.arrow}/>                
            </div>
            
            <div className={s.window}>
                <div className={s.all_pages_container} style={{transform: `translateX(${offset}px)`}}>
                    {designers.map(el => <Designer key={el.id} {...el} 
                        style={{
                            height: '762px', 
                            minWidth: `${page_width}px`, 
                            maxWidth: `${page_width}px`}}
                        />)}
                </div>
            </div>
            
            <div className={`${s.arrow_wrapper} ${s.right}`} onClick={handleRightArrowClick}>
                <BsChevronRight className={s.arrow}/>
            </div>            
        </div>
    )
}

export default DesignersSlider
