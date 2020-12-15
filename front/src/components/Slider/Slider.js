import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import './Slider.css'
 
const slideImages = [
  '/photos/1.jpg',
  '/photos/2.jpg',
	'/photos/3.jpg',
	'/photos/4.jpg',
	'/photos/5.jpg',
	'/photos/6.jpg',
	'/photos/7.jpg'
]

const proprietes = {
	duration: 6000,
	transitionDuration: 700,
	infinite: true,
	prevArrow: <div className='arrow_style'><i class="fas fa-angle-left" size='4x'></i></div>,
  nextArrow: <div className='arrow_style'><i class="fas fa-angle-right"></i></div>
}

const Slideshow = () => {
    return (
      <div className="slider-container">
        <Slide {...proprietes}>
          <div className="each-slide">
            <img className='carousel_blob' src={slideImages[0]} alt='blob live' loading="lazy" />
          </div>
          <div className="each-slide">
            <img className='carousel_blob' src={slideImages[1]} alt='blob live' loading="lazy" />
          </div>
					<div className="each-slide">
            <img className='carousel_blob' src={slideImages[2]} alt='blob live' loading="lazy" />
          </div>
					<div className="each-slide">
            <img className='carousel_blob' src={slideImages[3]} alt='blob live' loading="lazy" />
          </div>
					<div className="each-slide">
            <img className='carousel_blob' src={slideImages[4]} alt='blob live' loading="lazy" />
          </div>
					<div className="each-slide">
            <img className='carousel_blob' src={slideImages[5]} alt='blob live' loading="lazy" />
          </div>
					<div className="each-slide">
            <img className='carousel_blob' src={slideImages[6]} alt='blob live' loading="lazy" />
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow
