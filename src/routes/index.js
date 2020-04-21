import React from 'react';
import { Redirect } from 'react-router-dom';
import Find from '../views/Find/';
import Recommend from '../views/Recommend/';

export default [
  {
    path: '/',
    component: Find,
    routes: [
      {
        path: '/',
        exact: true,
        // eslint-disable-next-line react/display-name
        render: () => (
          <Redirect to={'/recommend'}/>
        )
      },
      {
        path: '/recommend',
        component: Recommend
      }
    ]
  }
];
