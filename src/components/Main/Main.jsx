import React from "react";
import { Board } from "./Board";
import { ToolPanel } from "./ToolPanel";
import { BoardName } from "./BoardName";
import { LoadingLinkModal } from "./LoadingLinkModal";
import "../../styles/main.css";

import addTextIcon from "../../img/tools-icon/addTextIcon.svg";
import addListIcon from "../../img/tools-icon/addListIcon.svg";
import addImageIcon from "../../img/tools-icon/addImageIcon.svg";
import addMusicIcon from "../../img/tools-icon/addMusicIcon.svg";
import addVideoIcon from "../../img/tools-icon/addVideoIcon.svg";
import addPaintIcon from "../../img/tools-icon/addPaintIcon.svg";

import homeIcon from "../../img/right-tool/homeIcon.svg";
import backIcon from "../../img/right-tool/backIcon.svg";
import forwardIcon from "../../img/right-tool/forwardIcon.svg";
import colorIcon from "../../img/right-tool/colorIcon.svg";

export function Main(props) {
  const text = new CreateTool("Добавить текстовую заметку", addTextIcon);
  const list = new CreateTool("Добавить список", addListIcon);
  const image = new CreateTool("Добавить картинку", addImageIcon);
  const music = new CreateTool("Добавить музыку", addMusicIcon);
  const video = new CreateTool("Добавить видео", addVideoIcon);
  const paint = new CreateTool("Добавить рисунок", addPaintIcon);

  const home = new CreateTool("Домой", homeIcon);
  const back = new CreateTool("На шаг назад", backIcon);
  const forward = new CreateTool("На шаг вперед", forwardIcon);
  const color = new CreateTool("Выбрать цвет фона", colorIcon);

  const leftToolArray = [text, list, image, music, video, paint];
  const rightToolArray = [home, back, forward, color];

  return (
    <div className="main-board">
      <ToolPanel tools={leftToolArray} />
      <ToolPanel right tools={rightToolArray} />
      <Board notes />
      <BoardName />
      {/* <LoadingLinkModal /> */}
    </div>
  );
}

function CreateTool(hoverText, icon) {
  this.hoverText = hoverText;
  this.icon = icon;
}
