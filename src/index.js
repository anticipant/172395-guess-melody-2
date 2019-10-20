import ReactDOM from 'react-dom';
import React from 'react';
import App from "./components/app/App";

const settings = {
  gameTime: 5,
  errorCount: 3,
};

const init = () => {
  const rootElement = document.querySelector(`#root`);

  ReactDOM.render(
      <App
        settings = { settings }
      />,
      rootElement
  );
};

init();
