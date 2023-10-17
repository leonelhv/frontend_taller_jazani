import { createBrowserRouter, type RouteObject } from 'react-router-dom';
// import { lazy, Suspense } from 'react';

import { Admin } from '../core/components/layouts/Admin';
import Home from '../home'
import Periocities from '../admins/periocities/views/searchs'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Admin />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/periocities',
        element: <Periocities />
      }

    ]
  }
]
export default createBrowserRouter(routes);