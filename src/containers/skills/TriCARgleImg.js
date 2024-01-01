import React, { Component } from "react";
import "./Skills.css";
const images = [
  "https://portdolo.s3.ap-northeast-1.amazonaws.com/Slide+16_9+-+11.png",
  "https://portdolo.s3.ap-northeast-1.amazonaws.com/Slide+16_9+-+12.png",
  "https://portdolo.s3.ap-northeast-1.amazonaws.com/Slide+16_9+-+13.png",
  "https://portdolo.s3.ap-northeast-1.amazonaws.com/Slide+16_9+-+14.png",
  "https://portdolo.s3.ap-northeast-1.amazonaws.com/Slide+16_9+-+15.png",
  "https://portdolo.s3.ap-northeast-1.amazonaws.com/Slide+16_9+-+16.png",
];

class TriCARgleImg extends Component {
  constructor(props) {
    super(props);
    this.state = { currentImageIndex: 0 };
    this.nextImage = this.nextImage.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.nextImage(),
      5000 // 每 5 秒切換到下一張圖片
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
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

export default TriCARgleImg;
