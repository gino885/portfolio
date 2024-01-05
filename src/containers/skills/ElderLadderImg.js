import React, { Component } from "react";
import "./Skills.css";
const images = [
  "https://portdolo.s3.ap-northeast-1.amazonaws.com/elderladder1.png",
  "https://portdolo.s3.ap-northeast-1.amazonaws.com/elderladder2.png",
  "https://portdolo.s3.ap-northeast-1.amazonaws.com/elderladder3.mp4",
];
const caption = [
  "主頁 - 告訴用戶該如何使用此網站以達到專案目的",
  "學員分享 - 以實際行動分享與長者相處的方法",
  "抽卡 - 以不同用戶的偏好生成客製化任務卡，簡單開始與長輩的交流",
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
        <div className="image-container">
          {this.renderMedia(images[this.state.currentImageIndex])}
          <div className="media-caption">
            {caption[this.state.currentImageIndex]}
          </div>
        </div>
        <button onClick={this.nextImage} className="slider-arrow right-arrow">
          ＞
        </button>
      </div>
    );
  }
}

export default ElderLadderImg;
