import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GamesAPI from '../../api/gamesAPI';
import { getItem } from '../../helpers/localStorageManager';
import component from '../../components';
import {
  DetailsPageSection,
  InfoPainel,
  LeftRightPainel,
  GameImage,
  HorizontalSection,
} from './detailsPageStyles';

const baseUrl = process.env.REACT_APP_API_URL;
export const gamesAPI = new GamesAPI(baseUrl, 15000);

function DetailsPage() {
  const [gameDetails, setGameDetails] = useState(undefined);
  const { id } = useParams();

  const {
    Title,
    Paragraph,
  } = component;

  useEffect(() => {
    const getGameDetails = async () => {
      const details = await gamesAPI.getGameById(id, getItem('token'));

      setGameDetails(details);
    };

    getGameDetails();
  }, []);

  if (!gameDetails) {
    return null;
  }

  return (
    <DetailsPageSection
      backgroundImage={gameDetails.backdrop}
      data-testid="game-details-backdrop"
    >
      <InfoPainel>
        <LeftRightPainel>
          <GameImage src={gameDetails.image} alt={`Imagem de capa do jogo ${gameDetails.title}`} />
          <HorizontalSection>
            <HorizontalSection>
              <Paragraph
                textAlign="center"
                fontSize="1vw"
              >
                {`metascore: ${gameDetails.metacritic.metascore}`}
              </Paragraph>
              <Paragraph
                textAlign="center"
                fontSize="1vw"
              >
                {`userscore: ${gameDetails.metacritic.userscore}`}
              </Paragraph>
            </HorizontalSection>
            <Paragraph
              textAlign="center"
              width="100%"
              margin="0.5rem 0"
              fontSize="1vw"
            >
              {`Data de lançamento: ${gameDetails.releaseYear}`}
            </Paragraph>
          </HorizontalSection>
          <Paragraph
            textAlign="center"
            width="100%"
            margin="0.5rem 0"
            fontSize="1vw"
          >
            {`Desenvolvedora: ${gameDetails.developer}`}
          </Paragraph>
          <Paragraph
            textAlign="center"
            width="100%"
            margin="0.5rem 0"
            fontSize="1vw"
          >
            {`Publicadora: ${gameDetails.publisher}`}
          </Paragraph>
          <Paragraph
            textAlign="center"
            width="100%"
            margin="0.5rem 0"
            fontSize="1vw"
          >
            {`Categoria: ${gameDetails.category}`}
          </Paragraph>
          <HorizontalSection>
            {
              gameDetails.platforms.map((platform) => (
                <Paragraph
                  key={platform}
                  textAlign="center"
                  width="20%"
                  margin="0.5rem 0"
                  fontSize="1vw"
                >
                  {platform}
                </Paragraph>
              ))
            }
          </HorizontalSection>
        </LeftRightPainel>
        <LeftRightPainel>
          <Title
            textAlign="center"
            width="100%"
            margin="0.5rem 0"
          >
            {gameDetails.title}
          </Title>
          <Paragraph
            width="100%"
            textAlign="center"
            margin="0.5rem 0"
          >
            {gameDetails.sinopse}
          </Paragraph>
        </LeftRightPainel>
      </InfoPainel>
    </DetailsPageSection>
  );
}

export default DetailsPage;
