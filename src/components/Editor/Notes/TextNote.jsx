import "../../../styles/textNote.css";
import closeNote from "../../../img/note-icon/closeNote.svg";
import addFavNote from "../../../img/note-icon/addFavNote.svg";

export function TextNote() {
  return (
    <div className="note__text text">
      <button className="text__close">
        <img src={closeNote} alt="Х"></img>
      </button>
      <div className="text__wrap">
        <div className="text__title">Title</div>
        <div className="text__line"></div>
        <div className="text__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ullam
          voluptas? Neque, numquam hic sed dicta, temporibus excepturi maxime
          necessitatibus laudantium eligendi aliquid facilis veritatis corporis
          debitis deleniti ut odio.{" "}
        </div>
        <button className="text__favourite">
          <img src={addFavNote} alt="!"></img>
        </button>
      </div>
    </div>
  );
}
