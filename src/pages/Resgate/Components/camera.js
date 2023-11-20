import React, { Component } from 'react';
import Webcam from 'react-webcam';

class camera extends Component {
  constructor(props) {
     super(props);
     this.state = {
       image: null,
     };
     this.capture = this.capture.bind(this);
  }
 
  capture() {
     const imageSrc = this.webcam.getScreenshot();
     this.setState({ image: imageSrc });
  }
 
  render() {
     return (
       <div>
         <Webcam
           ref={(node) => (this.webcam = node)}
           width="320px"
           height="240px"
         />
         <button onClick={this.capture}>Capture</button>
         {this.state.image && (
           <img src={this.state.image} alt="Captured" />
         )}
       </div>
     );
  }
 }


export default camera;

