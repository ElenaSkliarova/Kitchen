import s from './FooterTop.module.css';

function FooterTop(){
    return(
        <div className={`${'main_container'} ${s.contacts_wrapper}`}>
            <p className={s.title}>Контакты</p>

            <div className={s.map_wrapper}>
                <div className={s.map}>
                    <iframe 
                        title="Kitchens_Kharkiv" 
                        width="100%" 
                        height="350" 
                        frameborder="0" 
                        scrolling="no" 
                        marginheight="0" 
                        marginwidth="0" 
                        src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=134/16%20st.%20Akademika%20Pavlova,%20Kharkiv,%20Ukraine+(Kitchens_Kharkiv)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a>
                    </iframe>
                </div>

                <div className={s.contacts_info}>
                    <div className={s.contact_info_item}>
                        <p className={s.subtitle}>Адрес:</p>
                        <p>г. Харьков, ул. Академика Павлова 134/16</p>
                    </div>
                    <div className={s.contact_info_item}>
                        <p className={s.subtitle}>Телефон:</p>
                        <p>+38 (096) 111-11-11</p>
                        <p>+38 (099) 111-11-11</p>
                    </div>
                </div>
            </div>     
        </div>
    )
}

export default FooterTop