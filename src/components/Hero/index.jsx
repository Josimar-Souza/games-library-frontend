import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import Paragraph from '../Paragraph';
import Button from '../Button';
import {
  HeroContainer,
  HeroLeftFade,
  HeroBottonFade,
  HeroInfoContainer,
  MetacriticDateContainer,
  MetacriticContainer,
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
          fontSize="2.5vw"
          width="90%"
          testId="game-hero-title"
        >
          {game.title}
        </Title>
        <MetacriticDateContainer>
          <MetacriticContainer>
            <Paragraph
              fontSize="1.5vw"
              testId="game-hero-metascore"
            >
              {`Metascore: ${game.metacritic.metascore}`}
            </Paragraph>
            <Paragraph
              testId="game-hero-userscore"
              fontSize="1.5vw"
            >
              {`Userscore: ${game.metacritic.userscore}`}
            </Paragraph>
          </MetacriticContainer>
          <Paragraph
            fontSize="1.5vw"
            width="50%"
            textAlign="right"
            testId="game-hero-date"
          >
            {`Lançamento: ${game.releaseYear}`}
          </Paragraph>
        </MetacriticDateContainer>
        <Button
          backgroundColor="red"
          border="none"
          borderRadius="15px"
          fontColor="white"
          hoverCursor="pointer"
          hoverTransform="scale(1.05, 1.05)"
          transition="0.4s"
          hoverBackgroundColor="#bc0000"
          textShadow="2px 2px 4px black"
        >
          Ver detalhes
        </Button>
      </HeroInfoContainer>
    </HeroContainer>
  );
}

Hero.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string.isRequired,
    backdrop: PropTypes.string.isRequired,
    sinopse: PropTypes.string.isRequired,
    metacritic: PropTypes.shape({
      metascore: PropTypes.number.isRequired,
      userscore: PropTypes.number.isRequired,
    }).isRequired,
    releaseYear: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hero;
