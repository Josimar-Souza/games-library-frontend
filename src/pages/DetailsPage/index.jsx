import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useParams } from 'react-router-dom';
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

const baseUrl = process.env.REACT_APP_API_URL;
export const gamesAPI = new GamesAPI(baseUrl, 15000);

function DetailsPage() {
  const [gameDetails, setGameDetails] = useState(undefined);
  const { id } = useParams();

  const {
    Title,
    Paragraph,
    Loading,
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
