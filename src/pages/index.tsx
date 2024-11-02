import { createBrowserRouter } from 'react-router-dom';
import HomePage from './home';
import LinkPage from './link';
import ErrorPage from './notfound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/link/:id',
    element: <LinkPage />,
    errorElement: <ErrorPage />,
  },
]);
