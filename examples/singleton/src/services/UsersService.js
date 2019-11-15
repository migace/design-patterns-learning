import { CONFIG } from 'constants.js';

export class UsersService {
  static instance;

  constructor() {
    if (UsersService.instance) {
      return UsersService.instance;
    }

    this.instance = this;
  }

  getAll() {
    return fetch(`${CONFIG.API_BASE_URL}${CONFIG.API_USERS}`)
      .then(data => data.json());
  }
}
