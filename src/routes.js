import Home from './Home';
import Directors from './Directors';
import Actors from './Actors';
import Movie from './Movie';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/directors',
    exact: true,
    component: Directors
  },
  {
    path: '/actors',
    exact: true,
    component: Actors
  },
  {
    path: '/movie/:id',  // :id is the URL parameter
    exact: true,
    component: Movie
  }
];

export default routes;

