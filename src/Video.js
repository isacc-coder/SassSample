import React from 'react'
import "./Video.css";
function Video() {
    return (
        <div className="video">

          <video width="350" height="500" className="video__player"
           loop
           src="./img/background.jpg" controls type="video/mp4"> 
        </video> <br/>
       
    <video width="350" height="500" controls >
      <source src="./img/background.jpg"  type="video/mp4"/>
     </video>
       
        </div>
    )
}
 
export default Video;

