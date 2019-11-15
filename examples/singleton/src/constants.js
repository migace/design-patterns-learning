export const CONFIG = Object.freeze({
  API_BASE_URL: 'http://localhost:3001',
  API_POSTS: '/posts?_expand=user',
  API_USERS: '/users',
  API_POSTS_BY_ID: (id) => `/posts/${id}?_expand=user`,
});
