/* eslint-disable no-undef */
import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';
import { gamesAPI } from '../../pages/AddGamePage';
import mockCategories from '../mocks/mockCategories';

describe('Testes da página para adicionar um novo game', () => {
  describe('Verifica a existência dos elementos na página', () => {
    beforeEach(async () => {
      jest.spyOn(gamesAPI, 'getAllCategories').mockResolvedValue(mockCategories);

      await act(async () => {
        renderWithRouter(<pages.AddGamePage />);
      });
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Um título escrito "Adicione um novo jogo"', async () => {
      const pageTitle = await screen.findByRole('heading', { name: 'Adicione um novo jogo' });

      expect(pageTitle).toBeInTheDocument();
    });

    it('Um input para o título do game', async () => {
      const titleInput = await screen.findByPlaceholderText('Digite o nome do jogo');

      expect(titleInput).toBeInTheDocument();
    });

    it('Uma label escrito "Nome"', async () => {
      const titleLabel = await screen.findByLabelText('Nome');

      expect(titleLabel).toBeInTheDocument();
    });

    it('Um input para a data de lançamento do game', async () => {
      const releaseYearInput = await screen.findByPlaceholderText('Digite a data de lançamento do jogo no formato dd/mm/aaaa');

      expect(releaseYearInput).toBeInTheDocument();
    });

    it('Uma label escrito "Data de lançamento"', async () => {
      const releaseDateLabel = await screen.findByLabelText('Data de lançamento');

      expect(releaseDateLabel).toBeInTheDocument();
    });

    it('Um text area para a sinopse do game', async () => {
      const sinopseTextArea = await screen.findByPlaceholderText('Digite a sinopse do jogo');

      expect(sinopseTextArea).toBeInTheDocument();
    });

    it('Uma label escrito "Sinopse"', async () => {
      const sinopseLabel = await screen.findByLabelText('Sinopse');

      expect(sinopseLabel).toBeInTheDocument();
    });

    it('Um input para a desenvolvedora do game', async () => {
      const developerInput = await screen.findByPlaceholderText('Digite a desenvolvedora do jogo');

      expect(developerInput).toBeInTheDocument();
    });

    it('Uma label escrito ""Desenvolvedora', async () => {
      const developerLabel = await screen.findByLabelText('Desenvolvedora');

      expect(developerLabel).toBeInTheDocument();
    });

    it('Um input para a publicadora do game', async () => {
      const publisherInput = await screen.findByPlaceholderText('Digite a publicadora do jogo');

      expect(publisherInput).toBeInTheDocument();
    });

    it('Uma label escrito "Publicadora"', async () => {
      const publisherLabel = await screen.findByLabelText('Publicadora');

      expect(publisherLabel).toBeInTheDocument();
    });

    it('Um input para informar a quantidade de plataformas do game', async () => {
      const platformCountInput = await screen.findByPlaceholderText('Digite a quantidade de plataformas para qual o jogo foi lançado');

      expect(platformCountInput).toBeInTheDocument();
    });

    it('Uma label escrito "Quantidade de plataformas"', async () => {
      const platformCountLabel = await screen.findByLabelText('Quantidade de plataformas');

      expect(platformCountLabel).toBeInTheDocument();
    });

    it('Um botão para adicionar os inputs para as pataformas', async () => {
      const addPlatformsButton = await screen.findByRole('button', { name: 'Adicionar inputs para plataformas' });

      expect(addPlatformsButton).toBeInTheDocument();
    });

    it('Todos os inputs para as plataformas devem existir na página', async () => {
      const platformCountInput = await screen.findByPlaceholderText('Digite a quantidade de plataformas para qual o jogo foi lançado');
      const addPlatformsButton = await screen.findByRole('button', { name: 'Adicionar inputs para plataformas' });

      userEvent.type(platformCountInput, '5');
      userEvent.click(addPlatformsButton);

      const platformsInputs = await screen.findAllByPlaceholderText('Digite a plataforma');

      expect(platformsInputs.length).toBe(5);
    });

    it('Todas as labels com escrita nesse exemplo "Plataforma 1" devem existir na página', async () => {
      const platformCountInput = await screen.findByPlaceholderText('Digite a quantidade de plataformas para qual o jogo foi lançado');
      const addPlatformsButton = await screen.findByRole('button', { name: 'Adicionar inputs para plataformas' });

      userEvent.type(platformCountInput, '5');
      userEvent.click(addPlatformsButton);

      const platformsLabelsPromises = [];

      for (let index = 0; index < 5; index += 1) {
        const platformLabel = screen.findByLabelText(`Plataforma ${index + 1}`);

        platformsLabelsPromises.push(platformLabel);
      }

      const platformsLabels = await Promise.all(platformsLabelsPromises);

      expect(platformsLabels.length).toBe(5);
    });

    it('Um input para a url do trailer do game', async () => {
      const urlInput = await screen.findByPlaceholderText('Digite a url do trailer do jogo no Youtube');

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
      const metascoreInput = await screen.findByPlaceholderText('Digite a nota \'metascore\' do site Metacritic');

      expect(metascoreInput).toBeInTheDocument();
    });

    it('Uma label escrito "Metascore"', async () => {
      const metascoreLabel = await screen.findByLabelText('Metascore');

      expect(metascoreLabel).toBeInTheDocument();
    });

    it('Um input para a nota "userscore" do site Metacriic', async () => {
      const userscoreInput = await screen.findByPlaceholderText('Digite a nota \'userscore\' do site Metacritic');

      expect(userscoreInput).toBeInTheDocument();
    });

    it('Uma label escrito "Userscore"', async () => {
      const userscoreLabel = await screen.findByLabelText('Userscore');

      expect(userscoreLabel).toBeInTheDocument();
    });

    it('Um input para a imagem do game', async () => {
      const imageInput = await screen.findByPlaceholderText('Digite a url da imagem do game');

      expect(imageInput).toBeInTheDocument();
    });

    it('Uma label escrito "Imagem"', async () => {
      const imageLabel = await screen.findByLabelText('Imagem');

      expect(imageLabel).toBeInTheDocument();
    });

    it('Um input para a imagem de backdrop do game', async () => {
      const backdropImageInput = await screen.findByPlaceholderText('Digite a url da imagem de backdrop do game');

      expect(backdropImageInput).toBeInTheDocument();
    });

    it('Uma label escrito "Imagem de backdrop"', async () => {
      const backdropImageLabel = await screen.findByLabelText('Imagem de backdrop');

      expect(backdropImageLabel).toBeInTheDocument();
    });

    it('Um botão para adicionar o jogo', async () => {
      const addGameButton = await screen.findByRole('button', { name: 'Adicionar jogo' });

      expect(addGameButton).toBeInTheDocument();
    });

    it('Uma mensagem escrito "Não achou a categoria que deseja? Adicione-a no formulário abaixo!"', async () => {
      const addCategoryMessage = await screen.findByTestId('add-category-message');

      expect(addCategoryMessage).toBeInTheDocument();
      expect(addCategoryMessage.textContent).toBe('Não achou a categoria que deseja? Adicione-a no formulário abaixo!');
    });

    it('Um input para digitar a nova categoria', async () => {
      const newCategoryInput = await screen.findByPlaceholderText('Digite a nova categoria');

      expect(newCategoryInput).toBeInTheDocument();
    });

    it('Uma label escrito "Nova categoria"', async () => {
      const newCategoryLabel = await screen.findByLabelText('Nova categoria');

      expect(newCategoryLabel).toBeInTheDocument();
    });

    it('Um botão para adicionar a nova categoria', async () => {
      const addCategoryButton = await screen.findByRole('button', { name: 'Adicionar categoria' });

      expect(addCategoryButton).toBeInTheDocument();
    });
  });

  describe('Testes do comportamento da página', () => {
    const invalidStyle = `
      border: 1px solid red;
      box-shadow: 0 0 10px red;
    `;

    const validStyle = `
      border: 1px solid green;
      box-shadow: 0 0 10px green;
    `;

    beforeEach(async () => {
      jest.spyOn(gamesAPI, 'getAllCategories').mockResolvedValue(mockCategories);
      gamesAPI.addNewCategory = jest.fn();

      await act(async () => {
        renderWithRouter(<pages.AddGamePage />);
      });
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('Ao digitar um nome inválido, o input deverá ficar com características vermelhas', async () => {
      const titleInput = await screen.findByPlaceholderText('Digite o nome do jogo');

      userEvent.type(titleInput, 'Lk');

      expect(titleInput).toHaveStyle(invalidStyle);
    });

    it('Ao digitar um nome válido, o input deverá ficar com características verdes', async () => {
      const titleInput = await screen.findByPlaceholderText('Digite o nome do jogo');

      userEvent.type(titleInput, 'Meu jogo 2');

      expect(titleInput).toHaveStyle(validStyle);
    });

    it('Ao digitar uma data inválida, o input deverá ficar com características vermelhas', async () => {
      const releaseYearInput = await screen.findByPlaceholderText('Digite a data de lançamento do jogo no formato dd/mm/aaaa');

      userEvent.type(releaseYearInput, '10-09-2022');

      expect(releaseYearInput).toHaveStyle(invalidStyle);
    });

    it('Ao digitar uma data válida, o input deverá ficar com características verdes', async () => {
      const releaseYearInput = await screen.findByPlaceholderText('Digite a data de lançamento do jogo no formato dd/mm/aaaa');

      userEvent.type(releaseYearInput, '10/09/2022');

      expect(releaseYearInput).toHaveStyle(validStyle);
    });

    it('Ao digitar uma sinopse inválida, o input deverá ficar com características vermelhas', async () => {
      const sinopseInput = await screen.findByPlaceholderText('Digite a sinopse do jogo');

      userEvent.type(sinopseInput, 'sinopse');

      expect(sinopseInput).toHaveStyle(invalidStyle);
    });

    it('Ao digitar uma sinopse válida, o input deverá ficar com características verdes', async () => {
      const sinopseInput = await screen.findByPlaceholderText('Digite a sinopse do jogo');

      userEvent.type(sinopseInput, 'Essa é minha sinpse do jogo!');

      expect(sinopseInput).toHaveStyle(validStyle);
    });

    it('Ao digitar uma desenvolvedora inválida, o input deverá ficar com características vermelhas', async () => {
      const developerInput = await screen.findByPlaceholderText('Digite a desenvolvedora do jogo');

      userEvent.type(developerInput, 'kju8');

      expect(developerInput).toHaveStyle(invalidStyle);
    });

    it('Ao digitar uma desenvolvedora válida, o input deverá ficar com características verdes', async () => {
      const developerInput = await screen.findByPlaceholderText('Digite a desenvolvedora do jogo');

      userEvent.type(developerInput, 'Game Studio');

      expect(developerInput).toHaveStyle(validStyle);
    });

    it('Ao digitar uma publicadora inválida, o input deverá ficar com características vermelhas', async () => {
      const publisherInput = await screen.findByPlaceholderText('Digite a publicadora do jogo');

      userEvent.type(publisherInput, 'Kjvs');

      expect(publisherInput).toHaveStyle(invalidStyle);
    });

    it('Ao digitar uma publicadora válida, o input deverá ficar com características verders', async () => {
      const publisherInput = await screen.findByPlaceholderText('Digite a publicadora do jogo');

      userEvent.type(publisherInput, 'Minha publicadora');

      expect(publisherInput).toHaveStyle(validStyle);
    });

    it('Ao digitar uma quantidade de plataformas menor que 0, o input deverá ficar com características vermelhas', async () => {
      const platformCountInput = await screen.findByPlaceholderText('Digite a quantidade de plataformas para qual o jogo foi lançado');

      userEvent.type(platformCountInput, '-1');

      expect(platformCountInput).toHaveStyle(invalidStyle);
    });

    it('Ao digitar uma quantidade de plataformas maior que 0, o input deverá ficar com características verdes', async () => {
      const platformCountInput = await screen.findByPlaceholderText('Digite a quantidade de plataformas para qual o jogo foi lançado');

      userEvent.type(platformCountInput, '4');

      expect(platformCountInput).toHaveStyle(validStyle);
    });

    it('Ao digitar uma url de trailer inválida, o input deverá ficar com características vermelhas', async () => {
      const trailerUrlInput = await screen.findByPlaceholderText('Digite a url do trailer do jogo no Youtube');

      userEvent.type(trailerUrlInput, 'Kjdfghiasjxnhfgkawq');

      expect(trailerUrlInput).toHaveStyle(invalidStyle);
    });

    it('Ao digitar uma url de trailer válida, o input deverá ficar com características verdes', async () => {
      const trailerUrlInput = await screen.findByPlaceholderText('Digite a url do trailer do jogo no Youtube');

      userEvent.type(trailerUrlInput, 'https://www.youtube.com/watch?v=GFd25aGfsER');

      expect(trailerUrlInput).toHaveStyle(validStyle);
    });

    it('Ao digitar uma nota metascore inválido, o input deverá ficar com características vermelhas', async () => {
      const metascoreInput = await screen.findByPlaceholderText('Digite a nota \'metascore\' do site Metacritic');

      userEvent.type(metascoreInput, '12');

      expect(metascoreInput).toHaveStyle(invalidStyle);
    });

    it('Ao digitar uma nota metascore válido, o input deverá ficar com características verdes', async () => {
      const metascoreInput = await screen.findByPlaceholderText('Digite a nota \'metascore\' do site Metacritic');

      userEvent.type(metascoreInput, '9.8');

      expect(metascoreInput).toHaveStyle(validStyle);
    });

    it('Ao digitar uma nota userscore inválida, o input deverá ficar com características vermelhas', async () => {
      const userScoreInput = await screen.findByPlaceholderText('Digite a nota \'userscore\' do site Metacritic');

      userEvent.type(userScoreInput, '14');

      expect(userScoreInput).toHaveStyle(invalidStyle);
    });

    it('Ao digitar uma nota userscore válida, o input deverá ficar com características verdes', async () => {
      const userScoreInput = await screen.findByPlaceholderText('Digite a nota \'userscore\' do site Metacritic');

      userEvent.type(userScoreInput, '5.6');

      expect(userScoreInput).toHaveStyle(validStyle);
    });

    it('Ao digitar uma url de imagem inválida, o input deverá ficar com características vermelhas', async () => {
      const imageUrlInput = await screen.findByPlaceholderText('Digite a url da imagem do game');

      userEvent.type(imageUrlInput, 'fklakdd5a4w78erkn');

      expect(imageUrlInput).toHaveStyle(invalidStyle);
    });

    it('Ao digitar uma url de imagem válida, o input deverá ficar com características verdes', async () => {
      const imageUrlInput = await screen.findByPlaceholderText('Digite a url da imagem do game');

      userEvent.type(imageUrlInput, 'https://m.media-studio-tz.com/images/I/81nuHUOENtL._AC_SL1500_.jpg');

      expect(imageUrlInput).toHaveStyle(validStyle);
    });

    it('Ao digitar uma url de imagem de backdrop inválida, o input deverá ficar com características vermelhas', async () => {
      const backdropImageInput = await screen.findByPlaceholderText('Digite a url da imagem de backdrop do game');

      userEvent.type(backdropImageInput, 'asdninawd857asd');

      expect(backdropImageInput).toHaveStyle(invalidStyle);
    });

    it('Ao digitar uma url de imagem de backdrop válida, o input deverá ficar com características verdes', async () => {
      const backdropImageInput = await screen.findByPlaceholderText('Digite a url da imagem de backdrop do game');

      userEvent.type(backdropImageInput, 'https://m.media-studio-tz.com/images/I/81nuHUOENtL._AC_LK1786_.jpg');

      expect(backdropImageInput).toHaveStyle(validStyle);
    });

    it('Ao digitar uma categoria inválida, o input deverá ficar com características vermelhas', async () => {
      const categoryInput = await screen.findByPlaceholderText('Digite a nova categoria');

      userEvent.type(categoryInput, 'RT');

      expect(categoryInput).toHaveStyle(invalidStyle);
    });

    it('Ao digitar uma categoria válida, o input deverá ficar com características verdes', async () => {
      const categoryInput = await screen.findByPlaceholderText('Digite a nova categoria');

      userEvent.type(categoryInput, 'RPG');

      expect(categoryInput).toHaveStyle(validStyle);
    });

    it('Ao clicar no botão "Adicionar categoria", o método "addNewCategory em GamesAPI deverá ser chamado uma vez"', async () => {
      const addCategoryButton = await screen.findByRole('button', { name: 'Adicionar categoria' });

      userEvent.click(addCategoryButton);

      expect(gamesAPI.addNewCategory).toHaveBeenCalled();
    });
  });
});
