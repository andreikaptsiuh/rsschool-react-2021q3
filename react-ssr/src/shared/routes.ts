import { Home } from '../components/pages/home/home';
import { About } from '../components/pages/about';
import { Details } from '../components/pages/details';
import { NotPage } from '../components/pages/not-page';
import { IRoutes } from './interfaces';

export const ROUTES: IRoutes[] = [
  {
    key: 'home',
    path: '/',
    component: Home,
  },
  {
    key: 'about',
    path: '/about',
    component: About,
  },
  {
    key: 'details',
    path: '/details/:title',
    component: Details,
  },
  {
    key: 'not-page',
    path: '/404',
    component: NotPage,
  },
];
