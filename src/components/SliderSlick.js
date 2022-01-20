import React, { useState } from 'react'
import Slider from 'react-slick'
export const SliderSlick = () => {
  var settings = {
    backgroundColor: '#f8f8f8',
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  }

  return (
    <div>
      <Slider {...settings}>
        <div className='slide'>
          <div className='phopto'></div>
          <div className='name'>Alexey</div>
          <div className='text'>
            This is an open source project which can be downloaded for free from
            github (requires developer experience to set up and configure). This
            website provides extra functionality over the free script for
            companies to manage their own users accounts and allow users to
            easily register and manage their own data sets. It helps fund the
            open source project, so thanks for signing up!
          </div>
        </div>
        <div className='slide'>
          <div className='phopto'></div>
          <div className='name'>Alexey</div>
          <div className='text'>
            This is an open source project which can be downloaded for free from
            github (requires developer experience to set up and configure). This
            website provides extra functionality over the free script for
            companies to manage their own users accounts and allow users to
            easily register and manage their own data sets. It helps fund the
            open source project, so thanks for signing up!
          </div>
        </div>
        <div className='slide'>
          <div className='phopto'></div>
          <div className='name'>Alexey</div>
          <div className='text'>
            This is an open source project which can be downloaded for free from
            github (requires developer experience to set up and configure). This
            website provides extra functionality over the free script for
            companies to manage their own users accounts and allow users to
            easily register and manage their own data sets. It helps fund the
            open source project, so thanks for signing up!
          </div>
        </div>
      </Slider>
    </div>
  )
}
