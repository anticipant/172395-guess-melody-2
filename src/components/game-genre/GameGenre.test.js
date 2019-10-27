import React from 'react';
import GameGenre from "./GameGenre";
import renderer from 'react-test-renderer';

it(`GameGenre correctly renders after relaunch`, () => {
  const questions = {
    type: `artist`,
    song: {
      artist: `Jim Beam44`,
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `John Snow44`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jack Daniels44`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jim Beam44`,
      },
    ],
  };
  const tree = renderer.create(
      <GameGenre
        question={questions}
        screenIndex={44}
        onAnswer={() => {}}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
