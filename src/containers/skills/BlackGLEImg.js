import React, { Component } from "react";
import "./Skills.css";
const images = [
  "https://portdolo.s3.ap-northeast-1.amazonaws.com/blackGLE1.png",
  "https://portdolo.s3.ap-northeast-1.amazonaws.com/blackGLE2.png",
  "https://portdolo.s3.ap-northeast-1.amazonaws.com/blackGLE3.png",
];
const captions = [
  "搜尋畫面 - 可以輸入想找的政治人物",
  "搜尋結果 - 右邊會有相關搜尋列表",
  "搜尋結果 - 由最相關往下排列",
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
export default BlackGLEImg;
