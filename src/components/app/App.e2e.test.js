import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "./App";

Enzyme.configure({adapter: new Adapter()});

it(`simulates click events`, () => {
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
  ];
  const tree = mount(
      <App
        gameTime={0}
        errorCount={0}
        questions={questions}
      />
  );
  const btn = tree.find(`.welcome__button`);
  btn.simulate(`click`);
  const gameGenreElement = tree.find(`.game--genre`);
  expect(gameGenreElement).toHaveLength(1);

});
