import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../views/Home/';
import Find from '../views/Find/';
import Video from '../views/Video/';
import Mine from '../views/Mine/';
import Login from '../views/User/login'

export default [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        // eslint-disable-next-line react/display-name
        render: () => (
          <Redirect to={'/find'}/>
        )
      },
      {
        path: '/find',
        component: Find,
      },
      {
        path: '/video',
        component: Video,
      },
      {
        path: '/mine',
        component: Mine,
      },
      {
        path: '/login',
        exact: true,
        component: Login,
      }
    ]
  },
];
