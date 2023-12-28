import React from 'react'
import image1 from '../images/stack/HTML.png'
import image2 from '../images/stack/CSS.png'
import image3 from "../images/stack/Javascript.svg"
import image4 from "../images/stack/Express.png"
import image5 from "../images/stack/NextJsCircle.png"
import image6 from "../images/stack/Tailwind.png"
import image7 from "../images/stack/NodeJs.svg"
import image8 from "../images/stack/MongoDB.svg"
import image9 from "../images/stack/Redux.svg"
import image10 from "../images/stack/Vercel.svg"
export const Skills = () => {
  return (
    <div id="skills" className="container skills-container ">
          <div className="skill-fade-text">Skills</div>

          <div className="skill-container-left">
            <h2 className="skill-heading">
              <span className="caps">M</span>e and
              <br />
              MyTech Stack
            </h2>

            <div className="skill-subHeading">
              <p>
              My name is Ritesh Wadhwani and I am a developer. 
               Worked on JavaScript frameworks like react and Database management with MySql and MongoDB.
                Recently I have completed my journey as a MERN stack developer .

              </p>
              <p>
              As a final-year B.Tech student, I am enhancing my proficiency in both front-end and back-end technologies. 
              My practical application of these skills is evident in the projects Ive created,
               which you can explore through the provided links in Projects Section.
              </p>
            
            </div>
          </div>
          <div className="skill-container-right">
            <img src="./images/userAsset/blob vector.png" className="blob-style" alt="" />

            <img src={image1} alt="" className="skills-logo" />
            <img src={image2} alt="" className="skills-logo" />
            <img src={image3} alt="" className="skills-logo" />
            <img src={image4} alt="" className="skills-logo" />
            <img src={image5} alt="" className="skills-logo" />
            <img src={image6} alt="" className="skills-logo" />
            <img src={image7} alt="" className="skills-logo" />
            <img src={image8} alt="" className="skills-logo" />
            <img src={image9} alt="" className="skills-logo" />
            <img src={image10} alt="" className="skills-logo" />
           
          </div>
        
        
        
        </div>

  )
}
