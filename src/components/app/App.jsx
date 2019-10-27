import React from 'react';
import PropTypes from 'prop-types';

import WelcomeScreen from "../welcome-screen/WelcomeScreen";
import GameGenre from "../game-genre/GameGenre";
import GameArtist from "../game-artist/GameArtist";


class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      question: -1,
    };
    this.onUserAnswer = this.onUserAnswer.bind(this);
    this.onStartButtonClick = this.onStartButtonClick.bind(this);
  }

  static getScreen(question, props, onUserAnswer, onStartButtonClick) {
    if (question === -1) {
      const {
        gameTime,
        errorCount,
      } = props;

      return <WelcomeScreen
        time={gameTime}
        error={errorCount}
        onStartButtonClick={onStartButtonClick}
      />;
    }

    const {questions} = props;
    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`: return <GameGenre
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;

      case `artist`: return <GameArtist
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;
    }
    return null;
  }

  onStartButtonClick() {
    this.setState((prevState) => {
      const nextIndex = prevState.question + 1;

      return {
        ...prevState,
        question: nextIndex,
      };
    });
  }

  onUserAnswer(answer) {
    this.setState((prevState) => {
      const nextIndex = prevState.question + 1;
      const isEnd = nextIndex >= this.props.questions.length;

      return {
        ...prevState,
        answer,
        question: !isEnd ? nextIndex : -1,
      };
    });
  }

  render() {
    const {question} = this.state;

    return App.getScreen(question, this.props, this.onUserAnswer, this.onStartButtonClick);
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
