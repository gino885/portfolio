import React, { Component } from "react";
import "./Skills.css";
const images = [
  "https://portdolo.s3.ap-northeast-1.amazonaws.com/blackGLE1.png",
  "https://portdolo.s3.ap-northeast-1.amazonaws.com/blackGLE2.png",
  "https://portdolo.s3.ap-northeast-1.amazonaws.com/blackGLE3.png",
];

class BlackGLEImg extends Component {
  constructor(props) {
    super(props);
    this.state = { currentImageIndex: 0 };
    this.nextImage = this.nextImage.bind(this);
  }

  prevImage = () => {
    this.setState((prevState) => ({
      currentImageIndex:
        (prevState.currentImageIndex - 1 + images.length) % images.length,
    }));
  };

  nextImage() {
    this.setState((prevState) => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % images.length,
    }));
  }

  render() {
    return (
      <div className="slider-container">
        <button onClick={this.prevImage} className="slider-arrow left-arrow">
          ＜
        </button>
        <img src={images[this.state.currentImageIndex]} className="imgsize" />
        <button onClick={this.nextImage} className="slider-arrow right-arrow">
          ＞
        </button>
      </div>
    );
  }
}

export default BlackGLEImg;
