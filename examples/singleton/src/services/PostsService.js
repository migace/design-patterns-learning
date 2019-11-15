import { CONFIG } from 'constants.js';

export class PostsService {
  static instance;

  constructor() {
    if (PostsService.instance) {
      return PostsService.instance;
    }

    this.instance = this;
  }

  getAll() {
    return fetch(`${CONFIG.API_BASE_URL}${CONFIG.API_POSTS}`)
      .then(data => data.json());
  }

  getById(id) {
    return fetch(`${CONFIG.API_BASE_URL}${CONFIG.API_POSTS_BY_ID(id)}`)
      .then(data => data.json());
  }
}
