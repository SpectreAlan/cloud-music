import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../views/Home/';
import Find from '../views/Find/';
import Mv from '../views/Mv/';
import Mine from '../views/Mine/';

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
        path: '/mv',
        component: Mv,
      },
      {
        path: '/mine',
        component: Mine,
      },
    ]
  }
];
