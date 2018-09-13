import React from 'react';
import { render } from 'react-dom'
import App from './App';
import {createStore} from "redux";
import rootReducer from "./bundles/rootReducer";
import Session from './bundles/user/Session/Session';

const store = createStore(rootReducer);

Session.connectStore(store);
Session.fetchUserDataIfTokenExists(store);

render(
  <App store={store}/>,
  document.getElementById('root')
);