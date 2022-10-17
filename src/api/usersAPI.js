import axios from 'axios';
import erros from '../helpers/erros';

class UsersAPI {
  constructor(baseURL, timeout) {
    this.api = axios.create({
      baseURL,
      timeout,
    });
  }

  async login(loginValues) {
    try {
      const { data: { token } } = await this.api.post('/user/login', loginValues);

      return { token };
    } catch ({ response }) {
      const { data: { message } } = response;
      console.log(message);
      if (message === 'User not found') {
        return { message: erros.userNotFound, error: true };
      }

      return { message: erros.InvalidLoginValues, error: true };
    }
  }
}

export default UsersAPI;
