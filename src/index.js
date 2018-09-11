import React from 'react';
import { render } from 'react-dom'
import App from './App';
import {createStore} from "redux";
import userReducer from "./bundles/user/Login/Login.reducer";

const store = createStore(userReducer);

render(
  <App store={store}/>,
  document.getElementById('root')
);
