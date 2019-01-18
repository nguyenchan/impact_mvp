import React from "react";
import "./Frontpage.css";
import logo from "./logo_.png";
import { Icon } from "antd";

export default function Frontpage() {
  return (
    <div className="frontpage_wrapper">
      <img src={logo} className="_logo" alt="logo" />
      <div className="blank" />
      <span className="_title">Herb.</span>
      <a href="/sheep" className="btn_play">
        <Icon type="play-circle" />
      </a>
    </div>
  );
}
