import React from "react";
import ReactDOM from "react-dom"
var Sentencer = require("sentencer")
import GeneratedName from "./GeneratedName";
import TemplateBox from "./TemplateBox";


ReactDOM.render(
  <GeneratedName sentenceType="cah"/>,
  document.getElementsByClassName("Generator")[0]
);

ReactDOM.render(
  <TemplateBox sentenceType="cah"/>,
  document.getElementsByClassName("SentenceBox")[0]
);
