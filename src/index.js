import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as appActions from "./actions";

const initialState = {
  todoLoaded : false,
  text: "",
  todos: [],
  description: ''
}
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case appActions.FETCH_TODO: {
      return {
        ...state,
        todos: action.payload,
        todoLoaded : true
      };
    }
    case appActions.CHANGE_DESCRIPTION_TEXT: {
      return {
        ...state,
        description: action.payload.description
      };
    }
    case appActions.SAVE_TODO_SUCCESS:{
      return {
        ...state,
        description: ''
      }
    }
  }
  return state;
}
const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();  