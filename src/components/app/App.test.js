import React from 'react';
import App from "./App";
import renderer from 'react-test-renderer';

it(`App correctly renders after relaunch`, () => {
  const questions = [
    {
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
    },
    {
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
    }
  ];
  const tree = renderer.create(
      <App
        gameTime={0}
        errorCount={0}
        questions={questions}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
