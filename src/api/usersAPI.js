import axios from 'axios';

class UsersAPI {
  constructor(baseURL, timeout) {
    this.api = axios.create({
      baseURL,
      timeout,
    });
  }

  async login(loginValues) {
    const result = await this.api.post('/user/register', loginValues);

    return result;
  }
}

export default UsersAPI;
