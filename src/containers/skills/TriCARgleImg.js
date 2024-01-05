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
const captions = [
  "loading - 讓用戶得知網站情況",
  "主頁 - google 地圖，顯示附近停車位",
  "預定 - 預定車位並保留十分鐘",
  "停車 - 成功停車後點擊【Park】結束預定開始計費",
  "提醒 - 提醒停車成功",
  "扣款 - 行駛出停車位並扣款",
];

class TriCARgleImg extends Component {
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

export default TriCARgleImg;
