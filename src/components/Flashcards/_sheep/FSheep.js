import React from "react";
import Speaker from "../_icons/Icon_speaker.png";
import Mic from "../_icons/Icon_microphone.png";
import SheepPic from "../_icons/sheep_.png";
import "./FSheep.css";

export default function FSheep() {
  return (
    <div className="FSheep_wrapper">
      <img src={SheepPic} alt="sheep" />
      <div className="FSheep_eng">Sheep</div>
      <div className="blank_space" />
      <div className="FSheep_vie">Con cừu</div>
      <div className="blank_space" />
      <div className="FSheep_btn">
        <img src={Mic} alt="microphone" className="FSheep_record" />
        <div className="blank_space_v" />
        <img src={Speaker} alt="speaker" className="FSheep_speak" />
      </div>
    </div>
  );
}
