import React from 'react';
import PropTypes from 'prop-types';

const WelcomeScreen = (props) => {
  return (
    <section className="welcome">
      <div className="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
      <button
        onClick={props.onClickHandler}
        className="welcome__button"
      >
        <span className="visually-hidden">Начать игру</span>
      </button>
      <h2 className="welcome__rules-title">Правила игры</h2>
      <p className="welcome__text">Правила просты:</p>
      <ul className="welcome__rules-list">
        <li>За {props.time} минут нужно ответить на все вопросы.</li>
        <li>Можно допустить {props.error} ошибки.</li>
      </ul>
      <p className="welcome__text">Удачи!</p>
    </section>
  );
};

WelcomeScreen.propTypes = {
  time: PropTypes.number.isRequired,
  error: PropTypes.number.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default WelcomeScreen;
