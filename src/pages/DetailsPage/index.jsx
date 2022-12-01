import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GamesAPI from '../../api/gamesAPI';
import { getItem } from '../../helpers/localStorageManager';
import component from '../../components';
import {
  DetailsPageSection,
  InfoPainel,
} from './detailsPageStyles';

const baseUrl = process.env.REACT_APP_API_URL;
export const gamesAPI = new GamesAPI(baseUrl, 15000);

function DetailsPage() {
  const [gameDetails, setGameDetails] = useState({});
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

  return (
    <DetailsPageSection
      backgroundImage={gameDetails.backdrop}
      data-testid="game-details-backdrop"
    >
      <InfoPainel>
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
      </InfoPainel>
    </DetailsPageSection>
  );
}

export default DetailsPage;
