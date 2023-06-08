import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from 'react-router-dom'
import "./HeroImgsStyles.css"
const HeroImg = () => {
  return (
    <div className='hero'>
        <div className="mask">
            <img src={IntroImg} alt="bg-img" className="into-img" />
        </div>
        <div className="content">
          <p>HI, I'M A FREELANCER.</p>
          <h1>React Developer.</h1>
          <div className='buttons' style={{margin:"1rem" , padding:"1rem"}}>
            <Link to="/project" className='btn'>Projects</Link>
            <Link to="/about" className='btn'>About Me.</Link>
          </div>
        </div>
    </div>
  )
}

export default HeroImg
