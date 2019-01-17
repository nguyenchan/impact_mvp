import React from "react";
import Speaker from "../_icons/Icon_speaker.png";
import Mic from "../_icons/Icon_microphone.png";
import ShipPic from "../_icons/ship_.png";
import "./FShip.css";
import { Icon, Button } from "antd";
import ShipSound from "../_sounds/ship.mp3";

class Speak extends React.Component {
  constructor(props) {
    super(props);
    this.state = { play: false };
    this.audio = new Audio(ShipSound);
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay() {
    this.setState({ play: !this.state.play });
    console.log(this.audio);
    this.state.play ? this.audio.play() : this.audio.pause();
  }

  render() {
    return (
      <div>
        <Button onClick={this.togglePlay} className="btn_ship">
          <img src={Speaker} alt="speaker" className="FShip_speak" />
        </Button>
      </div>
    );
  }
}

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
          <Speak />
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
