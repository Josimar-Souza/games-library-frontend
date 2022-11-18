import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import {
  HeroContainer,
  HeroLeftFade,
  HeroBottonFade,
  HeroInfoContainer,
} from './heroStyles';

function Hero({ game }) {
  return (
    <HeroContainer
      backgroundImage={game.backdrop}
      data-testid="game-hero-container"
    >
      <HeroLeftFade />
      <HeroBottonFade />
      <HeroInfoContainer>
        <Title
          textAlign="center"
          fontSize="1.8vw"
          width="90%"
          testId="game-hero-title"
        >
          {game.title}
        </Title>
      </HeroInfoContainer>
    </HeroContainer>
  );
}

Hero.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string.isRequired,
    backdrop: PropTypes.string.isRequired,
    sinopse: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hero;
