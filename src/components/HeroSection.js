import React from 'react'
import dots from '../images/dots.png'
import cube from '../images/cube.png'
import circle from '../images/circle.png'
import zigzag from '../images/zigzags.png'
import plus from '../images/plus.png'
import userImage from '../images/user.jpg'
export const HeroSection = () => {
   
  return (
    <div className='hero-section '>
    <div className="faded-text">Ritesh Wadhwani</div>
    <div className='hero-section-left'>
        <div className='hero-section-heading'>Hi! Ritesh Wadhwani</div>
        <div className='hero-section-heading hero-section-sub-heading'>
            I am a<span > Software Developer</span>
        </div>
        <div className=' mt-4 width-[1/3] font-medium'>
        I’m a <span className='role'></span>
        </div>
        <button className='btn-pink' id='btn'>Hire Me</button>
    </div>
  <div className='hero-section-right w-[30%] h-fit'>
  
    <div className='absolute icons icon-dots'>
    <img src={dots} alt='dot'></img>
    </div>
    <div className='absolute icons icon-cube'>
    <img src={cube} alt='dot'></img>
    </div> 
    <div className='absolute icons icon-circle '>
    <img src={circle} alt='dot'></img>
    </div>
    <div className='absolute icons icon-zigzag '>
    <img src={zigzag} alt='dot'></img>
    </div>
    <div className='absolute icons icon-plus  '>
    <img src={plus} alt='dot'></img>  
    </div>
    <div className='user-image '>
    <img src={userImage} alt='dot'></img> 
    </div>
        

   </div>
</div>
  )
}
