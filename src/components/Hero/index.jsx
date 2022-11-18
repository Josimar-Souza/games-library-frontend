import React from 'react';
import PropTypes from 'prop-types';
import HeroContainer from './heroStyles';

function Hero({ game }) {
  return (
    <HeroContainer
      backgroundImage={game.backdrop}
    />
  );
}

Hero.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string.isRequired,
    backdrop: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hero;
