import React from 'react'
import './landing.css'; 
import photo from '../../asset/nigest pic2.png';
const Landing = () => {
  return (
   <section id='landing'>
      <div className='landingtext'>
<span className='first'>Hi, 
<span className='second'>  I'm Nigest W/micael </span>
</span>
<span className='third'>Welcome To My Portfolio</span>
<span className='forth'> Frontend Web Developer | Graphics Designer</span>

<p className='last1'>I am a 4th year student of computer science and Business Management.I have various<br/>
 skills in my field of study and  can understand and learn things quickly. I also enjoy<br/>
doing finance and management related work.</p>
<button className='btn' onClick={()=>{document.getElementById('aboutpage').scrollIntoView({behavior:'smooth'})}}>More About Me</button>
      </div>
      <img src={photo} alt='nigestphoto' className='photo1'/>
   </section>
  )
}

export default Landing