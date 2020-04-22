import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'; // renderRoutes 读取路由配置转化为 Route 标签
import store from './store/';
import routes from './routes/';
import Reset from './assets/styles/cssReset'
import IconFont from './assets/IconFont/iconfont'

function App () {
  return (
    <Provider store={store}>
      <HashRouter>
        <Reset/>
        <IconFont/>
        {
          renderRoutes(routes)
        }
      </HashRouter>
    </Provider>
  );
}

export default App

