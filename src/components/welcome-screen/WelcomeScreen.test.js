import React from 'react';
import WelcomeScreen from "./WelcomeScreen";
import renderer from 'react-test-renderer';

it(`WelcomeScreen correctly renders after relaunch`, () => {
  const tree = renderer.create(<WelcomeScreen time={22} error={22}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
