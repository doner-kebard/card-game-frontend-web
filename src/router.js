// import Board from './components/board';
// import Card from './components/card';
// import LobbyPanel from './components/lobbyPanel';
// import Row from './components/row';
// import Game from './pages/game';
// import Lobby from './pages/lobby';
// import ErrorPage from './pages/ErrorPage';

const app = document.getElementById('App');

const home = () => location.pathname = '/lobby';

const lobby = async () => {
  await Promise.all([
    import('./components/lobbyPanel/index.js'),
    import('./pages/lobby/index.js'),
  ]);
  app.innerHTML = `<lobby-page></lobby-page>`;
};

const game = async searchParams => {
  await Promise.all([
    import('./components/board/index.js'),
    import('./components/card/index.js'),
    import('./components/row/index.js'),
    import('./pages/game/index.js'),
  ]);
  app.innerHTML = `<game-page></game-page>`;
};

const error404 = async () => {
  await import('./pages/ErrorPage/index.js');
  app.innerHTML = `<error-page></error-page>`;
};

// match routes with paths
// grab recipe by id param for edit route
const routes = {
  '/': home,
  '/lobby': lobby,
  '/game': game,
  '/error': error404,
};

// on pop state get params from url and pass to route
// if no such route, error
window.onpopstate = async () => {
  const url = new URL(
    window.location.pathname + window.location.search,
    window.location.origin
  );
  if (routes[window.location.pathname]) {
    await routes[window.location.pathname](url.searchParams);
  } else routes['/error']();
};

// on pop state get params from url and pass to route
// if no such route, error
// add route to browser history
let onNavItemClick = async pathName => {
  const url = new URL(pathName, window.location.origin);
  const params = url.searchParams;
  if (routes[url.pathname]) {
    window.history.pushState({}, pathName, window.location.origin + pathName);
    await routes[url.pathname](params);
  } else {
    window.history.pushState({}, '404', window.location.origin + '/404');
    routes['/error']();
  }
};

// on page load/reload, set appropriate route
(async () => {
  const url = new URL(
    window.location.pathname + window.location.search,
    window.location.origin
  );
  if (routes[window.location.pathname]) {
    await routes[window.location.pathname](url.searchParams);
  } else routes['/error']();
})();

// export routes and nav click method
const router = {
  onNavItemClick,
  routes
};
export { router };

