import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "./App";

Enzyme.configure({adapter: new Adapter()});

it(`simulates click events`, () => {

  const handler = jest.fn();
  const tree = mount(<App settings={{gameTime: 0, errorCount: 0, onClickHandler: handler}}/>);
  const btn = tree.find(`.welcome__button`);
  btn.simulate(`click`);
  expect(handler).toHaveBeenCalledTimes(1);

});
