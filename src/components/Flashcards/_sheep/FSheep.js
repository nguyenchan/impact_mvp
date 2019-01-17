import React from "react";
import Speaker from "../_icons/Icon_speaker.png";
import Mic from "../_icons/Icon_microphone.png";
import "./FSheep.css";

export default function FSheep() {
  return (
    <div className="FSheep_wrapper">
      <div className="FSheep_eng">Sheep</div>
      <div className="FSheep_vie">Con cừu</div>
      <div className="FSheep_speak">
        <img src={Speaker} alt="speaker" />
      </div>
      <div className="FSheep_record">
        <img src={Mic} alt="microphone" />
      </div>
    </div>
  );
}
