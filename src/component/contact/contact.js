import React from 'react'
import './contact.css';
import { SiMinutemailer } from "react-icons/si";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoArrowUpCircleOutline } from "react-icons/io5";
const Contact = () => {
  return (
    <section id='contact-page'>
      <span className='contact-header'>Contact Me</span>
      <form className='contact-form'>
        <input type='text' className='blank-space' placeholder='Enter Your Name' required/>
        <input type='email' className='blank-space' placeholder='Enter Your Email Address' required/>
        <input type='number' className='blank-space' placeholder='Enter Your Phone Number' required/>
<textarea name='text' id='message' cols={20} rows={6} placeholder='Write Your Message Here' required></textarea>
<button type='submit' className='submit-btn' value='send'>Submit</button>
      </form>
      <div className='address'>
      <div className='address1'>
      <SiMinutemailer className='icon' />
    <a href='mailto:wnigest@gmail.com'>wnigest@gmail.com</a>
    </div>
    <div className='address1'>
    <FaPhoneVolume className='icon'/>
    <span>+251932783354</span>
    </div>
<div className='links'>
  <a href='https://www.facebook.com/profile.php?id=100078806857256'> <CiFacebook className='icon'/></a>
  <a href='https://www.instagram.com/nigestwolde/'><FaInstagram className='icon'/></a>
  <a href='https://www.linkedin.com/in/nigest-woldemicael-224525290/'><CiLinkedin className='icon'/></a>
</div>
<div className='top'>
  <a href='landing' ><IoArrowUpCircleOutline className='icon'/></a>
</div>
</div>
    </section>

  )
}

export default Contact