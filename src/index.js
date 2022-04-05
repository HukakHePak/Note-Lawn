import React from "react";
import App from "./components/App";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    {/* <DndProvider backend={HTML5Backend}> */}
      <App />
    {/* </DndProvider> */}
  </Provider>
);
