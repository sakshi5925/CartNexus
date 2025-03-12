import React from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
    <div>
      <div>
        <h2>Explore</h2>
        <ul>
            <li>Search</li>
            <li>About Us</li>
        </ul>
      </div>
      <div>
        <h2>About</h2>
        <ul>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Terms</li>
            <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <h2>Connect</h2>
        <ul>
            <li><RiFacebookFill /></li>
            <li><FaTwitter /></li>
            <li><FaLinkedinIn /></li>
            <li><FaYoutube /></li>
        </ul>
      </div>
    </div>
    <div>
        <div></div>
        <div></div>
    </div>
    </div>
  )
}

export default Footer