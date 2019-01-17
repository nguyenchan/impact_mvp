import React from "react";
import "./Frontpage.css";
import logo from "../logo.svg";

export default function Frontpage() {
  return (
    <div className="frontpage_wrapper">
      <span className="_title">Herb</span>
      <img src={logo} className="_logo" alt="logo" />
    </div>
  );
}
