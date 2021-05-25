import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import rootReducer from './reducers';

const createStore = () => reduxCreateStore(rootReducer);
const store = createStore()
export default ({ element }) => (
  <Provider store={store}>{element}</Provider>
);
