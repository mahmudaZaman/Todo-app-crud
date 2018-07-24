import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';

const initialState = {
    text:"shuchi",
    todos : []
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_TODO": {
          return {
            ...state,
            todos: action.payload
          };
        }
    }
    return state;
}
const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
  registerServiceWorker();  