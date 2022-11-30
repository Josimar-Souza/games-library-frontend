import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Title from '../Title';
import Button from '../Button';
import {
  GameCardContainer,
  GameImageContainer,
  GameImage,
} from './gameCardStyles';

function GameCard({ game, index }) {
  const navigate = useNavigate();

  const onDetailsButtonClick = () => {
    const { _id } = game;
    navigate(`/details/${_id}`);
  };

  return (
    <GameCardContainer>
      <GameImageContainer>
        <GameImage
          src={game.image}
          alt={`Capa do jogo ${game.title}`}
          data-testid={`game-card-image-${index}`}
        />
      </GameImageContainer>
      <Title
        textAlign="center"
        fontSize="1.2vw"
        mobileFontSize="5vw"
        width="100%"
        margin="0.8rem 0"
        mobileMargin="1rem 0"
        testId={`game-card-title-${index}`}
      >
        {game.title}
      </Title>
      <Button
        width="80%"
        mobileWidth="80%"
        border="none"
        backgroundColor="black"
        fontColor="white"
        borderRadius="15px"
        hoverBackgroundColor="black"
        fontSize="1.5vw"
        mobileFontSize="5vw"
        hoverCursor="pointer"
        hoverTransform="scale(1.08, 1.08)"
        transition="0.5s"
        testId={`game-card-details-button-${index}`}
        onClick={onDetailsButtonClick}
        mobileMargin="1rem 0"
      >
        Ver detalhes
      </Button>
    </GameCardContainer>
  );
}

GameCard.propTypes = {
  game: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default GameCard;
