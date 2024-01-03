import React, { Component } from "react";
import "./Skills.css";
const images = [
  "https://portdolo.s3.ap-northeast-1.amazonaws.com/elderladder1.png",
  "https://portdolo.s3.ap-northeast-1.amazonaws.com/elderladder2.png",
  "https://portdolo.s3.ap-northeast-1.amazonaws.com/elderladder3.mp4",
];

class ElderLadderImg extends Component {
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

  renderMedia = (src) => {
    const isVideo = src.endsWith(".mp4");
    return isVideo ? (
      <video className="imgsize" controls>
        <source src={src} type="video/mp4" />
      </video>
    ) : (
      <img src={src} className="imgsize" />
    );
  };

  render() {
    return (
      <div className="slider-container">
        <button onClick={this.prevImage} className="slider-arrow left-arrow">
          ＜
        </button>
        {this.renderMedia(images[this.state.currentImageIndex])}
        <button onClick={this.nextImage} className="slider-arrow right-arrow">
          ＞
        </button>
      </div>
    );
  }
}

export default ElderLadderImg;
