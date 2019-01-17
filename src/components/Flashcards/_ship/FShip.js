import React from "react";
import Speaker from "../_icons/Icon_speaker.png";
import Mic from "../_icons/Icon_microphone.png";
import ShipPic from "../_icons/ship_.png";
import "./FShip.css";
import { Icon } from "antd";

export default function FShip() {
  return (
    <div>
      <div className="FShip_wrapper">
        <img src={ShipPic} alt="ship" />
        <div className="FShip_eng">Ship</div>
        <div className="blank_space" />
        <div className="FShip_vie">Con tàu</div>
        <div className="blank_space" />
        <div className="blank_space" />
        <div className="blank_space" />
        <div className="FShip_btn">
          <img src={Mic} alt="microphone" className="FShip_record" />
          <div className="blank_space_v" />
          <img src={Speaker} alt="speaker" className="FShip_speak" />
        </div>
        <div className="blank_space" />
        <div className="blank_space" />
        <div className="blank_space" />
        <div className="blank_space" />
      </div>
      <a href="/sheep" className="next_btn">
        <Icon type="right-circle" />
      </a>
      <a href="/" className="home_btn">
        <Icon type="home" />
      </a>
    </div>
  );
}
