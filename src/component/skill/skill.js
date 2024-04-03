import React from 'react';
import './skill.css';
import htmlphoto from '../../asset/htmlpic.png';
import cssphoto from '../../asset/css pic (1).png';
import javaphoto from '../../asset/java pic.png';
import jsphoto from '../../asset/javascript pic.webp';
import reactphoto from '../../asset/react pic.png';
import dataphoto from '../../asset/database pic.png';
const Skill = () => {
  return (
<section id='skillpage'>
    <span className='skill-heading'>My Skills</span>
<div className='container'>
<div className='part-box'>
<div className='part-title'>
<img src={htmlphoto} alt='html' className='img1'/>
   <span className='title'>HTML</span>
   </div>
   </div>
  <div className='part-box'>
<div className='part-title'>
<img src={cssphoto} alt='css' className='img1'/>
      <span className='title'>CSS</span>
      </div>
      </div>
      <div className='part-box'>
<div className='part-title'>
<img src={javaphoto} alt='java' className='img1' />
   <span className='title'>Java</span>
   </div>
   </div>
   <div className='part-box'>
<div className='part-title'>
<img src={jsphoto} alt='javascript' className='img1'/>
   <span className='title'>Java Script</span>
   </div>
   </div>
   <div className='part-box'>
<div className='part-title'>
<img src={reactphoto} alt='react' className='img1'/>
   <span className='title'> React </span>
   </div>
   </div>
   <div className='part-box'>
<div className='part-title'>
<img src={dataphoto} alt='database' className='img1' />
   <span className='title'>Database</span>
   </div>
   </div>
</div>
</section>
)
}
export default Skill;