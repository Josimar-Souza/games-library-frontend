import axios from 'axios';
import ErrorCreator from '../helpers/ErrorCreator';

class GamesAPI {
  constructor(baseURL, timeout) {
    this.api = axios.create({
      baseURL,
      timeout,
    });
  }

  async getAllCategories(token) {
    try {
      const { data: { categories } } = await this.api.get('/category', {
        headers: {
          authorization: token,
        },
      });

      return categories;
    } catch (error) {
      return new ErrorCreator('Não foi possível listar todas as categorias, por favor, tente mais tarde!');
    }
  }

  async addNewCategory(newCategory, token) {
    try {
      const { data: { category } } = await this.api.post('/category', newCategory, { headers: { authorization: token } });

      return { category };
    } catch (error) {
      return new ErrorCreator('Não foi possível adicionar a categoria, por favor, tente mais tarde!');
    }
  }

  async addNewGame(game, token) {
    try {
      const { data: { newGame } } = await this.api.post('/games', game, { headers: { authorization: token } });

      return newGame;
    } catch (error) {
      console.log(error);
      return new ErrorCreator('Não foi possível adicionar o game!');
    }
  }

  async getAllGames(token) {
    try {
      const { data: { games } } = this.api.get('/games', { headers: { authorization: token } });

      return games;
    } catch (error) {
      return new ErrorCreator('Não foi possível listar todos os jogos, por favor, tente mais tarde!');
    }
  }
}

export default GamesAPI;
