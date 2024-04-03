import React from 'react'
import './project.css';
import firstpro from '../../asset/pro pic1.PNG';
import secondpro from '../../asset/pro pic3.png';
import thirdpro from '../../asset/pro pic2.png';

const Project = () => {
  return (
    <section id='projectpage'>
  <span className='project-heading'>Projects</span>
<div className='pro-container'>
    <div className='both'>
<img src={firstpro} alt='' className='prophoto'/>
<p className='text'>yenga tuor is a booking website for<br/> 
tuor and tarvel companys.It is done <br/>using html,css and javascript languages.
<br/>And also use full for travelers to book<br/> place and hotels </p>
    </div>
    <div className='both'>
<img src={secondpro} alt='' className='prophoto'/>
<p className='text'> This  management system is done<br/> using C++ programming languge.
we <br/> can add employee, modify employee <br/>information and search employee by<br/> using different information.</p>
    </div>
    <div className='both'>
<img src={thirdpro} alt='' className='prophoto'/>
<p className='text'>The project is desketop drawing app <br/>and used to draw and to store file and <br/>also it has login page </p>
    </div>
</div>
    </section>
  )
}

export default Project