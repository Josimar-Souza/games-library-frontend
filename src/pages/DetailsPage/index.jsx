import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useParams, useNavigate } from 'react-router-dom';
import GamesAPI from '../../api/gamesAPI';
import { getItem } from '../../helpers/localStorageManager';
import component from '../../components';
import Background from '../../images/Background.jpg';
import {
  DetailsPageSection,
  InfoPainel,
  LeftRightPainel,
  GameImage,
  HorizontalSection,
  TrailerIframe,
} from './detailsPageStyles';
import ErrorCreator from '../../helpers/ErrorCreator';

const baseUrl = process.env.REACT_APP_API_URL;
export const gamesAPI = new GamesAPI(baseUrl, 15000);

function DetailsPage() {
  const [gameDetails, setGameDetails] = useState(undefined);
  const [feedback, setFeedback] = useState({ show: false, message: '', color: 'green' });
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    Title,
    Paragraph,
    Loading,
    Button,
  } = component;

  useEffect(() => {
    const getGameDetails = async () => {
      const details = await gamesAPI.getGameById(id, getItem('token'));

      setGameDetails(details);
    };

    getGameDetails();
  }, []);

  const getBackground = () => {
    if (!isMobile) {
      return gameDetails.backdrop;
    }

    return Background;
  };

  const getTitle = (showTitle = false) => {
    if (showTitle) {
      return (
        <Title
          textAlign="center"
          width="100%"
          margin="0.5rem 0"
          mobileFontSize="8vw"
          mobileMargin="0.5rem 0"
        >
          {gameDetails.title}
        </Title>
      );
    }

    return null;
  };

  const onUpdateButtonClick = () => {
    const { _id } = gameDetails;
    navigate(`/update/${_id}`);
  };

  const onDeleteButtonClick = async () => {
    const { _id } = gameDetails;
    const deleteResult = await gamesAPI.deleteGameById(_id, getItem('token'));

    if (deleteResult instanceof ErrorCreator) {
      setFeedback({ show: true, message: deleteResult.message, color: 'red' });
    } else {
      setFeedback({ ...feedback, show: true, message: 'Jogo deletado com sucesso!' });

      setTimeout(() => {
        setFeedback({ show: false, message: '', color: 'green' });
        navigate('/games');
      }, 3000);
    }
  };

  const getFeedbackMessage = () => {
    if (feedback.show) {
      return (
        <Paragraph
          textAlign="center"
          fontSize="1vw"
          mobileFontSize="4.2vw"
          mobileMargin="0.5rem 0"
          fontColor={feedback.color}
        >
          {feedback.message}
        </Paragraph>
      );
    }

    return null;
  };

  if (!gameDetails) {
    return (
      <Loading />
    );
  }

  return (
    <DetailsPageSection
      backgroundImage={getBackground()}
      data-testid="game-details-backdrop"
    >
      <InfoPainel>
        <LeftRightPainel>
          <GameImage src={gameDetails.image} alt={`Imagem de capa do jogo ${gameDetails.title}`} />
          { getTitle(isMobile) }
          <HorizontalSection>
            <Button
              width="20%"
              fontSize="1.2vw"
              borderRadius="15px"
              backgroundColor="red"
              border="none"
              fontColor="white"
              hoverBackgroundColor="red"
              hoverCursor="pointer"
              hoverTransform="scale(1.1, 1.1)"
              transition="0.5s"
              onClick={onDeleteButtonClick}
            >
              Deletar
            </Button>
            <Button
              width="20%"
              fontSize="1.2vw"
              borderRadius="15px"
              backgroundColor="blue"
              border="none"
              fontColor="white"
              hoverBackgroundColor="blue"
              hoverCursor="pointer"
              hoverTransform="scale(1.1, 1.1)"
              transition="0.5s"
              onClick={onUpdateButtonClick}
            >
              Atualizar
            </Button>
          </HorizontalSection>
          { getFeedbackMessage() }
          <HorizontalSection>
            <HorizontalSection>
              <Paragraph
                textAlign="center"
                fontSize="1vw"
                mobileFontSize="4.2vw"
                mobileMargin="0.5rem 0"
              >
                {`metascore: ${gameDetails.metacritic.metascore}`}
              </Paragraph>
              <Paragraph
                textAlign="center"
                fontSize="1vw"
                mobileFontSize="4.2vw"
                mobileMargin="0.5rem 0"
              >
                {`userscore: ${gameDetails.metacritic.userscore}`}
              </Paragraph>
            </HorizontalSection>
            <Paragraph
              textAlign="center"
              width="100%"
              margin="0.5rem 0"
              fontSize="1vw"
              mobileFontSize="4.2vw"
              mobileMargin="0.5rem 0"
            >
              {`Data de lançamento: ${gameDetails.releaseYear}`}
            </Paragraph>
          </HorizontalSection>
          <Paragraph
            textAlign="center"
            width="100%"
            margin="0.5rem 0"
            fontSize="1vw"
            mobileFontSize="4.2vw"
            mobileMargin="0.5rem 0"
          >
            {`Desenvolvedora: ${gameDetails.developer}`}
          </Paragraph>
          <Paragraph
            textAlign="center"
            width="100%"
            margin="0.5rem 0"
            fontSize="1vw"
            mobileFontSize="4.2vw"
            mobileMargin="0.5rem 0"
          >
            {`Publicadora: ${gameDetails.publisher}`}
          </Paragraph>
          <Paragraph
            textAlign="center"
            width="100%"
            margin="0.5rem 0"
            fontSize="1vw"
            mobileFontSize="4.2vw"
            mobileMargin="0.5rem 0"
          >
            {`Categoria: ${gameDetails.category}`}
          </Paragraph>
          <Title
            textAlign="center"
            fontSize="1.5vw"
            margin="0.5rem 0"
            mobileFontSize="8vw"
            mobileMargin="0.5rem 0"
          >
            Plataformas:
          </Title>
          <HorizontalSection>
            {
              gameDetails.platforms.map((platform) => (
                <Paragraph
                  key={platform}
                  textAlign="center"
                  width="20%"
                  margin="0.5rem 0"
                  fontSize="1vw"
                  mobileFontSize="4.2vw"
                  mobileMargin="0.5rem 0"
                >
                  {platform}
                </Paragraph>
              ))
            }
          </HorizontalSection>
        </LeftRightPainel>
        <LeftRightPainel>
          { getTitle(!isMobile) }
          <Title
            textAlign="center"
            fontSize="2vw"
            margin="0.5rem 0"
            mobileFontSize="6vw"
            mobileMargin="0.5rem 0"
          >
            Sinopse:
          </Title>
          <Paragraph
            width="100%"
            textAlign="center"
            margin="0.5rem 0"
            mobileFontSize="4.2vw"
            mobileMargin="0.5rem 0"
            mobileWidth="100%"
          >
            {gameDetails.sinopse}
          </Paragraph>
          <Title
            textAlign="center"
            fontSize="2vw"
            margin="0.5rem 0"
            mobileFontSize="8vw"
            mobileMargin="0.5rem 0"
          >
            Trailer:
          </Title>
          <TrailerIframe
            src={gameDetails.trailerURL}
            allowFullScreen
            data-testid="game-details-trailer"
          />
        </LeftRightPainel>
      </InfoPainel>
    </DetailsPageSection>
  );
}

export default DetailsPage;
