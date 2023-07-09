import s from './Catalog.module.css';
// import {kitchens} from '../../data/data';
import CatalogItem from '../CatalogItem/CatalogItem';
import {Context} from '../../context/Context';
import {forwardRef, useContext} from 'react';

const Catalog = forwardRef((props, ref) => {

    const {kitchens} = useContext(Context);
    
    return(
        <div className={s.catalog_wrapper}>
            <div ref={ref} className='main_container'>
                <div className={s.title}>
                    <p>Какие кухни </p>
                    <p style={{color: 'var(--brand-color2'}}>мы производим?</p>
                    <p className={s.line}></p>
                </div>

                <div className={s.catalog}>
                    {kitchens.map(el => <CatalogItem key={el.id} {...el} />)}
                </div>
            </div>
            
        </div>
    )
})

export default Catalog