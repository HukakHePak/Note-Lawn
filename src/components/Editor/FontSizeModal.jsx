import React from "react";
import "../../../src/styles/noteText/fontSizeModal.css";

const fontSizeNumbers = [8, 9, 10, 11, 12, 14, 16, 18];

export function FontSizeModal() {
  return (
    <div className="font-size-modal">
      {fontSizeNumbers.map((number, index) => (
        <button className="font-size-modal__item" key={index}>
          {number}
        </button>
      ))}
    </div>
  );
}
