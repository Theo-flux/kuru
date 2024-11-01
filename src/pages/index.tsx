import { createBrowserRouter } from 'react-router-dom';
import HomePage from './home';
import LinkPage from './link';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/link',
    element: <LinkPage />,
  },
]);
