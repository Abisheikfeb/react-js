import React from 'react'
import './Hero.css'
import porfile_img from '../../assets/my img.jpg'

const Hero = () => {
  return (
   
    <div className='hero'>
      <img src={porfile_img} alt="" />
      
        <h1><span>I'm Abisheik ,</span> Backend Devoloper based in Java and springboot at API </h1>
        <p>Iam a Backend Devoloper java and jdbc with Oracal </p>
       <div className="hero-action">
       <div className='hero-connect'>Connect with me </div>
       <div className='hero-resume'>My resume </div>
       </div>
    </div>
  )
}

export default Hero