/* eslint-disable no-undef */
import React from 'react';
import { screen, act } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';
import mockGames from '../mocks/mockGames';
import { gamesAPI } from '../../pages/DetailsPage';

describe('Testes da página de detalhes', () => {
  const { games } = mockGames;

  beforeEach(async () => {
    jest.spyOn(gamesAPI, 'getGameById').mockResolvedValue(games[2]);

    await act(async () => {
      renderWithRouter(<pages.DetailsPage />);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Verifica se o o título do game está presente', async () => {
    const gameTitle = await screen.findByRole('heading', { name: games[2].title });

    expect(gameTitle).toBeInTheDocument();
  });

  it('Verifica se o título "Sinopse:" está presente', async () => {
    const sinopseTitle = await screen.findByRole('heading', { name: 'Sinopse:' });

    expect(sinopseTitle).toBeInTheDocument();
  });

  it('Verifica se a sinopse do game está presente', async () => {
    const gameSinopse = await screen.findByText(games[2].sinopse);

    expect(gameSinopse).toBeInTheDocument();
  });

  it('Verifica se a nota "metascore" do game está presente', async () => {
    const metascore = await screen.findByText(`metascore: ${games[2].metacritic.metascore}`);

    expect(metascore).toBeInTheDocument();
  });

  it('Verifica se a nota "userscore" do game está presente', async () => {
    const userscore = await screen.findByText(`userscore: ${games[2].metacritic.userscore}`);

    expect(userscore).toBeInTheDocument();
  });

  it('Verifica se a data de lançamento do game', async () => {
    const releaseYear = await screen.findByText(`Data de lançamento: ${games[2].releaseYear}`);

    expect(releaseYear).toBeInTheDocument();
  });

  it('Verifica se a desenvolvedora do game está presente', async () => {
    const gameDeveloper = await screen.findByText(`Desenvolvedora: ${games[2].developer}`);

    expect(gameDeveloper);
  });

  it('Verifica se a publicadora do game está presente', async () => {
    const gamePublisher = await screen.findByText(`Publicadora: ${games[2].publisher}`);

    expect(gamePublisher).toBeInTheDocument();
  });

  it('Verifica se o título "Plataformas:" está presente', async () => {
    const platformTitle = await screen.findByRole('heading', { name: 'Plataformas:' });

    expect(platformTitle).toBeInTheDocument();
  });

  it('Verifica se todas as platformas do game estão presentes', async () => {
    const gamePlatformsPromises = [];

    games[2].platforms.forEach((platform) => {
      const platofrmElement = screen.findByText(platform);

      gamePlatformsPromises.push(platofrmElement);
    });

    const gamePlatforms = await Promise.all(gamePlatformsPromises);

    gamePlatforms.forEach((platformElement) => {
      expect(platformElement).toBeInTheDocument();
    });
  });

  it('Verifica se a imagem de capa está presente', async () => {
    const gameImage = await screen.findByAltText(`Imagem de capa do jogo ${games[2].title}`);

    expect(gameImage).toBeInTheDocument();
    expect(gameImage).toHaveAttribute('src', games[2].image);
  });

  it('Verifica se a imagem de backdrop está presente', async () => {
    const backdropImage = await screen.findByTestId('game-details-backdrop');

    expect(backdropImage).toBeInTheDocument();
    expect(backdropImage).toHaveStyle(`
      background-image: url(${games[2].backdrop});
    `);
  });

  it('Verifica se a categoria está presente', async () => {
    const gameCategory = await screen.findByText(`Categoria: ${games[2].category}`);

    expect(gameCategory).toBeInTheDocument();
  });

  it('Verifica se o trailer está presente', async () => {
    const gameTrailer = await screen.findByTestId('game-details-trailer');

    expect(gameTrailer).toBeInTheDocument();
    expect(gameTrailer).toHaveAttribute('src', games[2].trailerURL);
  });
});
