import React from 'react';
import PropTypes from 'prop-types';
import {
  HeroContainer,
  HeroLeftFade,
  HeroBottonFade,
} from './heroStyles';

function Hero({ game }) {
  return (
    <HeroContainer
      backgroundImage={game.backdrop}
    >
      <HeroLeftFade />
      <HeroBottonFade />
    </HeroContainer>
  );
}

Hero.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string.isRequired,
    backdrop: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hero;
