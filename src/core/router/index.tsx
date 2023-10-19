import { createBrowserRouter, type RouteObject } from 'react-router-dom';
// import { lazy, Suspense } from 'react';

import Admin from '@/core/layouts/Admin';
import Home from '@/home';

import Periocities from '@/admins/periocities/views/searchs'

// Auth
import Auth from '@/core/layouts/Auth';
import Login from '@/auth/login/views';

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
      },
      {
        path: '/login',
        element: <Auth />,
        children: [
          {
            index: true,
            element: <Login />,
          },
        ],
      },

    ]
  }
]
export default createBrowserRouter(routes);