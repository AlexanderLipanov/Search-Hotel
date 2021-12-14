import React from "react";
import './Swiper.css';
import "use-swiper/lib/swiper.min.css";
import useSwiper from "use-swiper";


// use-swiper 1.2.1 



const MySwiper = (props) => {

    const { ref } = useSwiper({ slidesPerView: 3.4, loop: true});

    let Slides = props.SwiperSlides.map( (item) => <div key={item.id} className="slideBlock" >
        <img src={item.image} alt="" className="swiperImage" /></div> )

    return(
        <div className="swipar">
            <div ref={ref}>
                {Slides}
            </div>
        </div>
    );
}

export default MySwiper;
