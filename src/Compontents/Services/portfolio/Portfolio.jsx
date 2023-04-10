import React from 'react'
import'./Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Slidebar from "../../../img/sidebar.png"
import ECommerce from "../../../img/ecommerce.png"
import HOC from "../../../img/hoc.png"
import MusicApp from "../../../img/musicapp.png"
import 'swiper/css'
const Portfolio = () => {
  return (
     <div className="portfolio">
        {/* heading */}
        <span>Recent Projects</span>
        <span>Portfolio</span>
        {/* slider */}
        
        <Swiper
        spaceBetween = {30}
        slidesPerView = {3}
        grabCursor = {true} 
        className = 'portfolio-slider'
        >
            <SwiperSlide>
                <img src={Slidebar} alt="" />
            </SwiperSlide> <SwiperSlide>
                <img src={ECommerce} alt="" />
            </SwiperSlide>  <SwiperSlide>
                <img src={MusicApp}   alt="" />
            </SwiperSlide> <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
        </Swiper>

     </div>
  )
}

export default Portfolio