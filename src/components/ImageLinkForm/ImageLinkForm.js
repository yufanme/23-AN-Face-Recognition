import "./ImageLinkForm.css";
import React from "react";

const ImageLinkForm = ({onInput, onButtonSubmit}) => {

  return (
    <div>
      <p className="f3">{"魔法大脑可以检测出图片中的人脸。快来试试！"}</p>
      <div className="center">
        <div className="center pa4 br3 shadow-5 form">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            placeholder="在此处粘贴图片链接..."
            onChange={onInput}
          />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onButtonSubmit}>
            识别
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
