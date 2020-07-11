import React from "react";
import Headshot from "../JW headshot.png";
 
function Home() {
    return (
      <div className="homepage">
        <h1>Hi!</h1>
        
        <div className="Headshot"style={{display: "flex", justifyContent: "center"}}>
        <img className="rounded-circle"style={{width: "35%"}} src={Headshot} alt="Jill Westerfelhaus" />
        </div>
        
        <h5 className="text-center">I am a student at Northwestern University's Coding Bootcamp.</h5>  
    <h5 className="text-center">I'm learning Full Stack Web Development.</h5>
    <h5 className="text-center">Please take a look around and see what I'm learning!</h5>
      
      </div>
      
    );
  }
  
  export default Home;