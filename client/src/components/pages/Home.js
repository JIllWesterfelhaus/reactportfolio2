import React from "react";
import Headshot from "../JW headshot.png";

function Home() {
  return (
    <div className="homepage">
      <h1>Hi!</h1>

      <div className="Headshot" style={{ display: "flex", justifyContent: "center" }}>
        <img className="rounded-circle" style={{ width: "35%" }} src={Headshot} alt="Jill Westerfelhaus" />
      </div>

      <h5 className="text-center">I am a recent graduate of Northwestern University's Full Stack Web Development Coding Bootcamp.</h5>

      <h5 className="text-center">I love creating.  I have a Bachelor of Fine Arts degree and I have worked processing photographic film and prints.  Seeing a website come to life is so exciting, similar to watching a photograph develop.  I also love the power of web development.  With a web site, it is possible to reach anyone in the world immediately.  This combination of creativity and impact makes me want to succeed in web development.</h5>

      <h5 className="text-center">Technical Skills: HTML, CSS, Bootstrap, Responsive Design, mySQL, Photoshop.</h5>

      <h5 className="text-center">Email:  jillwesthaus@gmail.com</h5>
      <h5 className="text-center">Phone:  773-592-7923</h5>
      <h5 className="text-center"><a href="https://www.linkedin.com/in/jill-westerfelhaus-a821761a/" target="_blank">LinkedIn</a></h5>
      <h5 className="text-center"><a href="https://github.com/JIllWesterfelhaus" target="_blank">GitHub</a></h5>
      <h5 className="text-center"><a href="https://drive.google.com/file/d/1UE8n5gJycg5leh5uZW_OrEg0xy3xH8sH/view?usp=sharing" target="_blank">Resume</a></h5>

    </div>

  );
}

export default Home;