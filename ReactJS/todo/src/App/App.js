import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './router';
import {Provider} from 'react-redux';
import configureStore from './store';
import {PersistGate} from 'redux-persist/es/integration/react';
import "../Assets/scss/_main.scss";

const {store, persistor} = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
      >
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
