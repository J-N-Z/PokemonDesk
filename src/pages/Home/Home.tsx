import React from 'react';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';
import s from './Home.module.scss';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Parallax } from '../../components/Parallax';
import { Layout } from '../../components/Layout';
import { Heading } from '../../components/Heading';

export const HomePage = () => {
  return (
    <div className={s.root}>
      <Layout>
        <div>
          <Heading level={1}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See pokemons</Button>
        </div>

        <div>
          <Parallax />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};
