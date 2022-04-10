import React, { useState } from "react";

export function LoadingLinkModal(props) {
  const { src, onSubmit } = props;
  const [value, setValue] = useState(src);

  return (
    <div className="loading-link-modal--background">
      <div className="loading-link-modal">
        <form className="loading-link-modal__form" onSubmit={onSubmit}>
          <input
            className="loading-link-modal__input"
            placeholder="link..."
            onChange={(event) => setValue(event.target.value)}
            value={value}
          />
        </form>
      </div>
    </div>
  );
}
