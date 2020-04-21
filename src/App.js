import React from 'react';
import {Provider} from 'react-redux';
import store from './store/';
import Reset from './assets/styles/cssReset'

function App () {
  return (
    <Provider store={store}>
      <Reset/>
      <div className="App">
        <header className="App-header">
          <div>123</div>
        </header>
      </div>
    </Provider>
  );
}

export default App

