import React from 'react';
import { Redirect } from 'react-router-dom';
import Find from '../views/Find/';
import Home from '../views/Home/';
import Recommend from '../views/Recommend/';

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
    ]
  }
];
