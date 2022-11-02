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
}

export default GamesAPI;
