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

      if (message === 'User not found') {
        return { message: erros.userNotFound, error: true };
      }

      return { message: erros.InvalidLoginValues, error: true };
    }
  }

  async register(registerValues) {
    try {
      const { data } = await this.api.post('/user/register', registerValues);

      return { message: 'Usuário registrado com sucesso!', data };
    } catch ({ response: { data } }) {
      if (data.message === 'User already registered') {
        return { message: erros.RegisterUserAlreadyExists, error: true };
      }
      return { message: erros.RegisterInvalidValues, error: true };
    }
  }
}

export default UsersAPI;
