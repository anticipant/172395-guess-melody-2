import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GameGenre from "./GameGenre";

Enzyme.configure({adapter: new Adapter()});

it(`give answer in right type (GameGenre)`, () => {
  const question = {
    type: `genre`,
    genre: `popsa`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `popsa`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `popsa`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `popsa`,
      },
    ],
  };
  let returnedValue;
  const handler = jest.fn((a) => {
    returnedValue = a;
  });
  const tree = mount(<GameGenre
    onAnswer={handler}
    screenIndex={0}
    question={question}
  />);
  const firstAnswerBtn = tree.find(`.game__input`).at(0);
  firstAnswerBtn.simulate(`click`, {target: {value: `boom`}});
  tree.find(`.game__tracks`).simulate(`submit`, {preventDefault() {}});
  expect(typeof returnedValue[0]).toEqual(`string`);
});
