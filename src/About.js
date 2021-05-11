import React, {Fragment} from "react"
import Sheree from "../src/assets/Sheree.png"
import Hero from './components/Hero';
 
function About(props) {
  return (
    
    <Fragment>
   
  
    <img src={Sheree} alt="Me" className="sheree float-center"/>
   
             <p className="card-text">A Technology Leader with a proven track record of driving results in a complex
            cross-functional environment. Recognized for innovative/analytical thinking with the ability to create new
            platforms, define clear processes and develop architecture frameworks. Demonstrated success managing multiple
            types of software delivery, business and architecture strategies.
            I am passionate about recruitment and colleague experience. I create an environment for open discussion and
            inclusion using learnings in inclusive leadership strategies and belonging to shape my team, changing
            mindsets. I have the greatest sense of purpose when I am involved in work where I can be creative, grow and
            obtain new learning or acquire a new technical or leadership skill.
            In my spare time I enjoy baking, reading, bowling and roller skating. My family and I enjoy traveling and
            look forward to getting back to checking off new vacation spots.
          </p>
      
          </Fragment>
  )
}
 
export default About;