import React from 'react'
import './about_me.css'
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.4,
     duration:0.3
    }}
    viewport={{
      once:true
     }}
      className='about_me'  id="aboutMey">
      <h2 className='heading'>About Me</h2>
       <div className="about_me_info">
        <p className='about_me_left'>Hello! I'm Bhumika Aggarwal, a budding Full Stack Developer and DSA enthusiast. I am diving into front-end and back-end technologies, as well as exploring BlockChain Technology. Excited to connect and collaborate on innovative projects!</p>
        <div className="about_me_right"></div>
    </div>

    </motion.div>
    
  )
}

export default AboutMe
