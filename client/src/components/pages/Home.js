import React from "react";
import Headshot from "../JW headshot.png";
 
function Home() {
    return (
      <div className="homepage">
        <h1>Hi!</h1>
        
        <div className="Headshot"style={{display: "flex", justifyContent: "center"}}>
        <img className="rounded-circle"style={{width: "35%"}} src={Headshot} alt="Jill Westerfelhaus" />
        </div>
        
        <h5 className="text-center">I am a recent graduate of Northwestern University's Coding Bootcamp, where I studied Full Stack Web Development.</h5>  
    <h5 className="text-center">Please take a look around and see what I learned!</h5>
      
      </div>
      
    );
  }
  
  export default Home;