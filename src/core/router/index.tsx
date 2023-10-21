import { createBrowserRouter, type RouteObject } from 'react-router-dom';
// import { lazy, Suspense } from 'react';

import { PrivateOutlet, PublicOutlet } from '@/core/router/CheckPageNavigation';

import Admin from '@/core/layouts/Admin';
import Home from '@/home';

import Periocities from '@/admins/periocities/views/searchs'
import Investments from '@/Mc/invesment/views/searchs'

// Auth
import Auth from '@/core/layouts/Auth';
import Login from '@/auth/login/views';

const routes: RouteObject[] = [
  {
    path: '/',
    element: (<PrivateOutlet>
      <Admin />
    </PrivateOutlet>),
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
        path: '/investments',
        element: <Investments />
      }
    ]
  },
  {
    path: '/login',
    element: (<PublicOutlet>
      <Auth />
    </PublicOutlet>),
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  }
]
export default createBrowserRouter(routes);