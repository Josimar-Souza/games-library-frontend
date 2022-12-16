/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import pages from '../../pages';
import renderWithRouter from '../helpers/renderWithRouter';
import mockGames from '../mocks/mockGames';
import mockCategories from '../mocks/mockCategories';

describe('Testes da página de atualização', () => {
  const { games } = mockGames;
  describe('Verifica a existência dos elementos', () => {
    beforeEach(() => {
      renderWithRouter(<pages.UpdatePage />);
    });

    it('Uma título escrito "Atualize o jogo"', async () => {
      const pageTitle = await screen.findByRole('heading', { name: 'Atualize o jogo' });

      expect(pageTitle).toBeInTheDocument();
    });

    it('Um input para o título do game', async () => {
      const titleInput = await screen.findByDisplayValue(games[5].title);

      expect(titleInput).toBeInTheDocument();
    });

    it('Uma label escrito "Nome"', async () => {
      const titleLabel = await screen.findByLabelText('Nome');

      expect(titleLabel).toBeInTheDocument();
    });

    it('Um input para a data de lançamento do game', async () => {
      const releaseDateInput = await screen.findByDisplayValue(games[5].releaseYear);

      expect(releaseDateInput).toBeInTheDocument();
    });

    it('Uma label escrito "Data de lançamento"', async () => {
      const releaseDateLabel = await screen.findByLabelText('Data de lançamento');

      expect(releaseDateLabel).toBeInTheDocument();
    });

    it('Um text area para a sinopse do game', async () => {
      const sinopseTextArea = await screen.findByDisplayValue(games[5].sinopse);

      expect(sinopseTextArea).toBeInTheDocument();
    });

    it('Uma label escrito "Sinopse"', async () => {
      const sinopseLabel = await screen.findByLabelText('Sinopse');

      expect(sinopseLabel).toBeInTheDocument();
    });

    it('Um input para a desenvolvedora do game', async () => {
      const developerInput = await screen.findByDisplayValue(games[5].developer);

      expect(developerInput).toBeInTheDocument();
    });

    it('Uma label escrito ""Desenvolvedora', async () => {
      const developerLabel = await screen.findByLabelText('Desenvolvedora');

      expect(developerLabel).toBeInTheDocument();
    });

    it('Um input para a publicadora do game', async () => {
      const publisherInput = await screen.findByDisplayValue(games[5].publisher);

      expect(publisherInput).toBeInTheDocument();
    });

    it('Uma label escrito "Publicadora"', async () => {
      const publisherLabel = await screen.findByLabelText('Publicadora');

      expect(publisherLabel).toBeInTheDocument();
    });

    it('Todos os inputs para as plataformas devem existir na página', async () => {
      const gamePlatformsPromises = [];

      games[5].platforms.forEach((platform) => {
        const platformInput = screen.findByDisplayValue(platform);

        gamePlatformsPromises.push(platformInput);
      });

      const gamePlatforms = await Promise.all(gamePlatformsPromises);

      expect(gamePlatforms.length).toBe(games[5].platforms.length);
    });

    it('Todas as labels com escrita nesse exemplo "Plataforma 1" devem existir na página', async () => {
      const platformsLabelsPromises = [];

      for (let index = 0; index < 5; index += 1) {
        const platformLabel = screen.findByLabelText(`Plataforma ${index + 1}`);

        platformsLabelsPromises.push(platformLabel);
      }

      const platformsLabels = await Promise.all(platformsLabelsPromises);

      expect(platformsLabels.length).toBe(5);
    });

    it('Um input para a url do trailer do game', async () => {
      const urlInput = await screen.findByDisplayValue(games[5].trailerURL);

      expect(urlInput).toBeInTheDocument();
    });

    it('Uma label escrito "Trailer URL"', async () => {
      const trailerURLLabel = await screen.findByLabelText('Trailer URL');

      expect(trailerURLLabel).toBeInTheDocument();
    });

    it('Um select para as categorias', async () => {
      const categorySelect = await screen.findByRole('combobox');

      expect(categorySelect).toBeInTheDocument();
    });

    it('Uma label escrito "Categoria"', async () => {
      const categoryLabel = await screen.findByLabelText('Categoria');

      expect(categoryLabel).toBeInTheDocument();
    });

    it('Todas as categorias devem aparecer como opções do dropdown', async () => {
      const categoriesOptionsPromises = [];
      mockCategories.forEach((category, index) => {
        const categoryOption = screen.findByTestId(`category-option-${index}`);

        categoriesOptionsPromises.push(categoryOption);
      });

      const categoriesOptions = await Promise.all(categoriesOptionsPromises);

      categoriesOptions.forEach((category, index) => {
        expect(category.textContent).toBe(mockCategories[index].category);
      });
    });

    it('Um input para a nota "metascore" do site Metacriic', async () => {
      const metascoreInput = await screen.findByDisplayValue(games[5].metacritic.metascore);

      expect(metascoreInput).toBeInTheDocument();
    });

    it('Uma label escrito "Metascore"', async () => {
      const metascoreLabel = await screen.findByLabelText('Metascore');

      expect(metascoreLabel).toBeInTheDocument();
    });

    it('Um input para a nota "userscore" do site Metacriic', async () => {
      const userscoreInput = await screen.findByDisplayValue(games[5].metacritic.userscore);

      expect(userscoreInput).toBeInTheDocument();
    });

    it('Uma label escrito "Userscore"', async () => {
      const userscoreLabel = await screen.findByLabelText('Userscore');

      expect(userscoreLabel).toBeInTheDocument();
    });

    it('Um input para a imagem do game', async () => {
      const imageInput = await screen.findByDisplayValue(games[5].image);

      expect(imageInput).toBeInTheDocument();
    });

    it('Uma label escrito "Imagem"', async () => {
      const imageLabel = await screen.findByLabelText('Imagem');

      expect(imageLabel).toBeInTheDocument();
    });

    it('Um input para a imagem de backdrop do game', async () => {
      const backdropImageInput = await screen.findByDisplayValue(games[5].backdrop);

      expect(backdropImageInput).toBeInTheDocument();
    });

    it('Uma label escrito "Imagem de backdrop"', async () => {
      const backdropImageLabel = await screen.findByLabelText('Imagem de backdrop');

      expect(backdropImageLabel).toBeInTheDocument();
    });

    it('Um botão para atualizar o jogo', async () => {
      const addGameButton = await screen.findByRole('button', { name: 'Atualizar jogo' });

      expect(addGameButton).toBeInTheDocument();
    });
  });

  describe('Verifica o comportamento da página', () => {
    const invalidStyle = `
      border: 1px solid red;
      box-shadow: 0 0 8px 4px red;
    `;

    const validStyle = `
      border: 1px solid green;
      box-shadow: 0 0 8px 4px green;
    `;

    beforeEach(() => {
      renderWithRouter(<pages.UpdatePage />);
    });

    it('Ao digitar um nome inválido, o input deverá ficar com características vermelhas', async () => {
      const titleInput = await screen.findByPlaceholderText(games[5].title);

      userEvent.type(titleInput, 'Lk');

      expect(titleInput).toHaveStyle(invalidStyle);
    });

    it('Ao digitar um nome válido, o input deverá ficar com características verdes', async () => {
      const titleInput = await screen.findByPlaceholderText(games[5].title);

      userEvent.type(titleInput, 'Meu jogo 2');

      expect(titleInput).toHaveStyle(validStyle);
    });

    it('Ao digitar uma data inválida, o input deverá ficar com características vermelhas', async () => {
      const releaseYearInput = await screen.findByPlaceholderText(games[5].releaseYear);

      userEvent.type(releaseYearInput, '10-09-2022');

      expect(releaseYearInput).toHaveStyle(invalidStyle);
    });

    it('Ao digitar uma data válida, o input deverá ficar com características verdes', async () => {
      const releaseYearInput = await screen.findByPlaceholderText(games[5].releaseYear);

      userEvent.type(releaseYearInput, '10/09/2022');

      expect(releaseYearInput).toHaveStyle(validStyle);
    });
  });
});
