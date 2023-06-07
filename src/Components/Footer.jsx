import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa"
import "./FooterStyles.css"
import React from 'react'

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
                    <FaGithub size={40} style={{color: "#fff", marginRight:"2rem"}}/>
                    <FaLinkedin size={40} style={{color: "#fff", marginRight:"2rem"}}/>
                    <FaWhatsapp size={40} style={{color: "#fff", marginRight:"2rem"}}/>
                    <FaInstagram size={40} style={{color: "#fff", marginRight:"2rem"}}/>
                    <FaFacebook size={40} style={{color: "#fff", marginRight:"2rem"}}/>
                    <FaTwitter size={40} style={{color: "#fff", marginRight:"2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer