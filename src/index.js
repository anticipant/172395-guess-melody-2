import ReactDOM from 'react-dom';
import React from 'react';
import App from "./components/app/App";
import {gameSettings, questions} from "./mocks/questions";

const init = (gameQuestions) => {
  const rootElement = document.querySelector(`#root`);

  ReactDOM.render(
      <App
        gameTime={gameSettings.gameTime}
        errorCount={gameSettings.errorCount}
        questions={gameQuestions}
      />,
      rootElement
  );
};

init(questions);
