import React from 'react';
import PropTypes from 'prop-types';

class GameGenre extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      userAnswers: [],
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onAnswerClick = this.onAnswerClick.bind(this);
  }

  onSubmitHandler(evt) {
    evt.preventDefault();
    this.props.onAnswer(this.state.userAnswers);
  }

  onAnswerClick(evt) {
    const answer = [evt.target.value];
    this.setState({
      userAnswers: answer
    });
  }

  render() {
    const {genre, answers} = this.props.question;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
          </a>

          <div className="timer__value">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>

          <div className="game__mistakes">
            <div className="wrong"/>
            <div className="wrong"/>
            <div className="wrong"/>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form
            className="game__tracks"
            onSubmit={this.onSubmitHandler}
          >
            {answers.map((it, i) => {
              return (
                <div key={`${this.props.screenIndex}-answer-${i}`} className="track">
                  <button className="track__button track__button--play" type="button"/>
                  <div className="track__status">
                    <audio/>
                  </div>
                  <div className="game__answer">
                    <input
                      onClick={this.onAnswerClick}
                      className="game__input visually-hidden"
                      type="checkbox"
                      name="answer"
                      value={`answer-${i}`}
                      id={`answer-${i}`}
                    />
                    <label
                      className="game__check"
                      htmlFor={`answer-${i}`}
                    >Отметить</label>
                  </div>
                </div>
              );
            })}
            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

GameGenre.propTypes = {
  question: PropTypes.object.isRequired,
  screenIndex: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired
};

export default GameGenre;
