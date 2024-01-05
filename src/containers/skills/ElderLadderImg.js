import React, { Component } from "react";
import "./Skills.css";
const images = [
  "https://portdolo.s3.ap-northeast-1.amazonaws.com/elderladder1.png",
  "https://portdolo.s3.ap-northeast-1.amazonaws.com/elderladder2.png",
  "https://portdolo.s3.ap-northeast-1.amazonaws.com/elderladder3.mp4",
];
const captions = [
  "主頁 - 告知使用者如何使用網站",
  "學習分享 - 陳列組員與長者互動的方法",
  "抽卡 - 根據用戶情況，抽出客製化任務卡，簡單開始與長輩的互動",
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
    const { currentImageIndex } = this.state;
    return (
      <div className="slider-container">
        <button onClick={this.prevImage} className="slider-arrow left-arrow">
          ＜
        </button>
        <div className="image-container">
          {" "}
          {/* 新增的容器 */}
          <img src={images[currentImageIndex]} className="imgsize" />
          <div className="image-caption">{captions[currentImageIndex]}</div>
        </div>
        <button onClick={this.nextImage} className="slider-arrow right-arrow">
          ＞
        </button>
      </div>
    );
  }
}

export default ElderLadderImg;
