import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GameArtist from "./GameArtist";

Enzyme.configure({adapter: new Adapter()});

it(`give answer in right type (GameArtist)`, () => {
  const question = {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `John Snow`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jack Daniels`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jim Beam`,
      },
    ],
  };
  let returnedValue;
  const handler = jest.fn((a) => {
    returnedValue = a;
  });
  const tree = mount(<GameArtist
    onAnswer={handler}
    screenIndex={0}
    question={question}
  />);
  const firstAnswerBtn = tree.find(`.artist__name`).at(0);
  firstAnswerBtn.simulate(`change`, {target: {value: `artist`}});
  expect(typeof returnedValue[0]).toEqual(`string`);
});
