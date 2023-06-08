import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa"
import "./FooterStyles.css"
import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>Subhash Nagar, Lane no. 14</p>
                        <p>Dhule, 424001</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color: "#fff", marginRight:"2rem"}}/>
                        +91 8626020792
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight:"2rem"}}/>
                        pratikdeore42@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>Tap on the below icons to get connect with me</h4>
                <div className="social">
                    <Link to={"https://github.com/PratikDeore1199"}><FaGithub size={40} style={{color: "#fff", marginRight:"2rem"}} /></Link>
                    <Link to={"https://www.linkedin.com/in/pratik-deore-1aa81a18a/"}><FaLinkedin size={40} style={{color: "#fff", marginRight:"2rem"}}/></Link>
                    <Link to={"https://api.whatsapp.com/send/?phone=8626020792&text&type=phone_number&app_absent=0"}><FaWhatsapp size={40} style={{color: "#fff", marginRight:"2rem"}} /></Link>
                    <Link to={"https://www.instagram.com/deore_pratik9503/"}><FaInstagram size={40} style={{color: "#fff", marginRight:"2rem"}}/></Link>
                    <Link to={"https://www.facebook.com/profile.php?id=100009639763200"}><FaFacebook size={40} style={{color: "#fff", marginRight:"2rem"}}/></Link>
                    <Link to={"https://twitter.com/IamThatPratik"}><FaTwitter size={40} style={{color: "#fff", marginRight:"2rem"}}/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer