/* eslint-disable no-undef */
import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  describe('Verifica a existência dos elementos', () => {
    it('O título do game deve está presente', async () => {
      const gameTitle = await screen.findByRole('heading', { name: games[2].title });

      expect(gameTitle).toBeInTheDocument();
    });

    it('O título "Sinopse:" deve está presente', async () => {
      const sinopseTitle = await screen.findByRole('heading', { name: 'Sinopse:' });

      expect(sinopseTitle).toBeInTheDocument();
    });

    it('A sinopse do game deve está presente', async () => {
      const gameSinopse = await screen.findByText(games[2].sinopse);

      expect(gameSinopse).toBeInTheDocument();
    });

    it('A nota "metascore" do game deve está presente', async () => {
      const metascore = await screen.findByText(`metascore: ${games[2].metacritic.metascore}`);

      expect(metascore).toBeInTheDocument();
    });

    it('A nota "userscore" do game deve está presente', async () => {
      const userscore = await screen.findByText(`userscore: ${games[2].metacritic.userscore}`);

      expect(userscore).toBeInTheDocument();
    });

    it('A data de lançamento do game', async () => {
      const releaseYear = await screen.findByText(`Data de lançamento: ${games[2].releaseYear}`);

      expect(releaseYear).toBeInTheDocument();
    });

    it('A desenvolvedora do game deve está presente', async () => {
      const gameDeveloper = await screen.findByText(`Desenvolvedora: ${games[2].developer}`);

      expect(gameDeveloper);
    });

    it('A publicadora do game deve está presente', async () => {
      const gamePublisher = await screen.findByText(`Publicadora: ${games[2].publisher}`);

      expect(gamePublisher).toBeInTheDocument();
    });

    it('O título "Plataformas:" deve está presente', async () => {
      const platformTitle = await screen.findByRole('heading', { name: 'Plataformas:' });

      expect(platformTitle).toBeInTheDocument();
    });

    it('Todas as platformas do game devem estão presentes', async () => {
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

    it('A imagem de capa deve está presente', async () => {
      const gameImage = await screen.findByAltText(`Imagem de capa do jogo ${games[2].title}`);

      expect(gameImage).toBeInTheDocument();
      expect(gameImage).toHaveAttribute('src', games[2].image);
    });

    it('A imagem de backdrop deve está presente', async () => {
      const backdropImage = await screen.findByTestId('game-details-backdrop');

      expect(backdropImage).toBeInTheDocument();
      expect(backdropImage).toHaveStyle(`
        background-image: url(${games[2].backdrop});
      `);
    });

    it('A categoria deve está presente', async () => {
      const gameCategory = await screen.findByText(`Categoria: ${games[2].category}`);

      expect(gameCategory).toBeInTheDocument();
    });

    it('O título "Trailer:" deve está presente', async () => {
      const trailerTitle = await screen.findByRole('heading', { name: 'Trailer:' });

      expect(trailerTitle).toBeInTheDocument();
    });

    it('O trailer deve está presente', async () => {
      const gameTrailer = await screen.findByTestId('game-details-trailer');

      expect(gameTrailer).toBeInTheDocument();
      expect(gameTrailer).toHaveAttribute('src', games[2].trailerURL);
    });

    it('Um botão escrito "Deletar"', async () => {
      const deleteButton = await screen.findByRole('button', { name: 'Deletar' });

      expect(deleteButton).toBeInTheDocument();
    });

    it('Um botão escrito "Atualizar"', async () => {
      const updateButton = await screen.findByRole('button', { name: 'Atualizar' });

      expect(updateButton).toBeInTheDocument();
    });
  });

  describe('Verifica o comportamento da página', () => {
    it('Ao clicar no botão "Atualizar", a página é redirecionada', async () => {
      const updateButton = await screen.findByRole('button', { name: 'Atualizar' });

      userEvent.click(updateButton);

      const { pathname } = window.location;
      const { _id } = games[2];

      expect(pathname).toBe(`/update/${_id}`);
    });

    it('Ao clicar no botão "Deletar", o método deleteGameById é chamado', async () => {
      gamesAPI.deleteGameById = jest.fn();

      const deleteButton = await screen.findByRole('button', { name: 'Deletar' });

      userEvent.click(deleteButton);

      expect(gamesAPI.deleteGameById).toHaveBeenCalled();
    });
  });
});
