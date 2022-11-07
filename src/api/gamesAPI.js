import axios from 'axios';

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
      console.log(error);
    }
  }

  async addNewCategory(newCategory, token) {
    try {
      const { data: { category } } = await this.api.post('/category', newCategory, { headers: { authorization: token } });

      return category;
    } catch (error) {
      console.log(error);
    }
  }
}

export default GamesAPI;
