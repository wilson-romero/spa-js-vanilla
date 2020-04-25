import Header from '../templates/header';
import Home from '../pages/home';
import Character from '../pages/character';
import Error404 from '../pages/error-404';
import { getHash, resolveRoutes } from '../utils';

const routes = {
  '/': Home,
  '/:id': Character,
  '/about': Error404,
};

export default async function router() {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();

  const hash = getHash();
  const route = await resolveRoutes(hash);
  const render = routes[route] || Error404;

  content.innerHTML = await render();
}
