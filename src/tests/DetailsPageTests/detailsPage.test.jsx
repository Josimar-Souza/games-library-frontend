/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';
import mockGames from '../mocks/mockGames';

describe('Testes da página de detalhes', () => {
  const { games } = mockGames;

  beforeEach(() => {
    renderWithRouter(<pages.DetailsPage />);
  });

  it('Verifica se o o título do game está na página com o valor correto', async () => {
    const gameTitle = await screen.findByRole('heading', { name: games[2].title });

    expect(gameTitle).toBeInTheDocument();
  });

  it('Verifica se a sinopse do game está presente e com o valor correto', async () => {
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
});
