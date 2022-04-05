import React from "react";

export function LoadingLinkModal() {
  return (
    <div className="loading-link-modal--background">
      <div className="loading-link-modal">
        <form className="loading-link-modal__form">
          <input className="loading-link-modal__input" placeholder="link..." />
        </form>
      </div>
    </div>
  );
}
