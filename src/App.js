import React from 'react';
import { store } from './configureStore';
import './App.scss';
import { Provider } from 'react-redux';
import { RootContainer } from './containers/RootContainer';

function App() {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
}

export default App;
