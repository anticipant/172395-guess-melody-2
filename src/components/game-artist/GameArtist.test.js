import React from 'react';
import GameArtist from "./GameArtist";
import renderer from 'react-test-renderer';

it(`GameArtist correctly renders after relaunch`, () => {
  const questions = {
    type: `artist`,
    song: {
      artist: `Jim Beam2`,
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
    },
    answers: [
      {
        picture: `http://placehold.it/134x134`,
        artist: `John Snow2`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jack Daniels2`,
      },
      {
        picture: `http://placehold.it/134x134`,
        artist: `Jim Beam2`,
      },
    ],
  };
  const tree = renderer.create(
      <GameArtist
        question={questions}
        screenIndex={33}
        onAnswer={() => {}}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
