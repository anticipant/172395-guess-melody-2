import React from 'react';
import PropTypes from 'prop-types';

import WelcomeScreen from "../welcome-screen/WelcomeScreen";

const App = (props) => {
  return (
    <WelcomeScreen
      time = { props.settings.gameTime }
      error = { props.settings.errorCount }
      onClickHandler = { props.settings.onClickHandler }
    />
  );
};

App.propTypes = {
  settings: PropTypes.object.isRequired,
};

export default App;
