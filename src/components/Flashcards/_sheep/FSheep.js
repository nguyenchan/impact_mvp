import React from "react";
import Speaker from "../_icons/Icon_speaker.png";
import Mic from "../_icons/Icon_microphone.png";
import SheepPic from "../_icons/sheep_.png";
import "./FSheep.css";
import { Icon, Button } from "antd";
import SheepSound from "../_sounds/sheep.mp3";

class Speak extends React.Component {
  constructor(props) {
    super(props);
    this.state = { play: false };
    this.audio = new Audio(SheepSound);
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
        <Button shape="circle" onClick={this.togglePlay} className="btn_sheep">
          <img src={Speaker} alt="speaker" className="FSheep_speak" />
        </Button>
      </div>
    );
  }
}

export default function FSheep() {
  return (
    <div>
      <div className="FSheep_wrapper">
        <img src={SheepPic} alt="sheep" />
        <div className="FSheep_eng">Sheep</div>
        <div className="blank_space" />
        <div className="FSheep_vie">Con cừu</div>
        <div className="blank_space" />
        <div className="blank_space" />
        <div className="blank_space" />
        <div className="FSheep_btn">
          <img src={Mic} alt="microphone" className="FSheep_record" />
          <div className="blank_space_v" />
          <Speak />
        </div>
        <div className="blank_space" />
        <div className="blank_space" />
        <div className="blank_space" />
        <div className="blank_space" />
      </div>
      <a href="/ship" className="next_btn">
        <Icon type="right-circle" />
      </a>
      <a href="/" className="home_btn">
        <Icon type="home" />
      </a>
    </div>
  );
}
