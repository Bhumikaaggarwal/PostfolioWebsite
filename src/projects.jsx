import React from 'react'
import Card from './Card';
// import restaurant from"./images/ivan-stern-LOLSb7m6XkU-unsplash.jpg"
import org from"./images/Screenshot (394).png"
import rent from "./images/Screenshot (681).png"
import snake from "./images/Screenshot (818).png"
// import wise_way from"./images/wise_way.jpg"
import { motion } from 'framer-motion';

const Projects = () => {
    const cards = [
        {
          imageUrl: org,
          altText: 'Online Grocery Store',
          title: 'Organic Orchard',
          description: 'Organic Orchard: A user-friendly online grocery store website designed using HTML, CSS, and JavaScript, offering a seamless shopping experience for fresh and organic produce.',
          // explore:"https://github.com/Praneeth2025/zenith-bistro"
        },
        {
          imageUrl:rent,
          altText: 'Rental Hub Website',
          title: 'Habitat Heaven',
          description: '"Habitat Heaven: A modern rental hub website built with ReactJS, providing an intuitive platform to browse and book properties effortlessly."',
          // explore:"https://github.com/Praneeth2025/chess-image-recognizer"

        },
        {
          imageUrl: snake,
          altText: 'Social Media Platform',
          title: 'Twitter Clone',
          description: "Twitter Clone: A social media platform replica built to mimic Twitter's core functionalities, including posting tweets, following users, and engaging with content through likes and comments.",
          explore:"https://github.com/Praneeth2025/Gesture-Snake"
        },
        // {
        //     imageUrl: wise_way,
        //     altText: 'wise_way',
        //     title: 'WiseWay',
        //     description: "a web application that uses advanced algorithms to calculate the most cost-effective route between two points.",
        //     explore:"https://github.com/Praneeth2025/WiseWay-website"
        //   }
      ];

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
     delay:0.2,
     duration:0.5
    }}
    viewport={{
        margin:"-100px",
      once:true
     }} className="up_gap " id="project">
        <h2 className='heading1 down_gap'>Projects</h2>
        <div className="completely">
        
    <div className="grid" >
        
      {cards.map((card, index) => (
        
        <Card
          key={index}
          imageUrl={card.imageUrl}
          altText={card.altText}
          title={card.title}
          description={card.description}
          explore={card.explore}
        />
      ))}
    </div>
    </div>
    </motion.div>
  )
}

export default Projects
