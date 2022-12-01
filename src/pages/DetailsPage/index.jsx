import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsPageSection from './detailsPageStyles';
import GamesAPI from '../../api/gamesAPI';
import { getItem } from '../../helpers/localStorageManager';

const baseUrl = process.env.REACT_APP_API_URL;
export const gamesAPI = new GamesAPI(baseUrl, 15000);

function DetailsPage() {
  const [gameDetails, setGameDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getGameDetails = async () => {
      const details = await gamesAPI.getGameById(id, getItem('token'));

      setGameDetails(details);
    };

    getGameDetails();
  }, []);

  return (
    <DetailsPageSection />
  );
}

export default DetailsPage;
