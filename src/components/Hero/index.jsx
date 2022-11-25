import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const onDetailsButtonClick = () => {
    const { _id } = game;
    navigate(`/details/${_id}`);
  };

  const getShortSinopse = () => {
    const shortSinopse = game.sinopse.split('.')[0];

    return (
      <Paragraph
        width="100%"
        textAlign="center"
        margin="1rem 0"
      >
        {`${shortSinopse}.`}
      </Paragraph>
    );
  };

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
        { getShortSinopse() }
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
          testId="game-hero-details-button"
          onClick={onDetailsButtonClick}
        >
          Ver detalhes
        </Button>
      </HeroInfoContainer>
    </HeroContainer>
  );
}

Hero.propTypes = {
  game: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    backdrop: PropTypes.string.isRequired,
    sinopse: PropTypes.string.isRequired,
    metacritic: PropTypes.shape({
      metascore: PropTypes.string.isRequired,
      userscore: PropTypes.string.isRequired,
    }).isRequired,
    releaseYear: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hero;
