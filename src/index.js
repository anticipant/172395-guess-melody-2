import ReactDOM from 'react-dom';
import React from 'react';
import App from "./components/app/App";

const init = () => {
  return (
    <App/>
  );
};

const rootElement = document.querySelector(`#root`);

ReactDOM.render(
    init(),
    rootElement
);
