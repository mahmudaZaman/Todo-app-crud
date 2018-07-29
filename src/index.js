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
  todoLoaded: false,
  text: "",
  todos: [],
  description: '',
  fetchingSingleItem: false,
  currentPageNumber: 0,
  pageSize: 3,
  totalElements: 0,
  totalPages: [],
  sort: 'asc'
}
const convertToArray = (n) => {
  let result = [];
  for (let i = 0; i < n; i++)result.push(i);
  return result;
}
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case appActions.ITEM_FETCHING_IN_PROGRESS_INFO: {
      return {
        ...state,
        fetchingSingleItem: action.payload.value
      };
    }
    case appActions.FETCH_TODO_BY_ID_SUCCESS: {
      return {
        ...state,
        fetchingSingleItem: false,
        description: action.payload.description
      };
    }
    case appActions.FETCH_TODO: {
      return {
        ...state,
        todos: action.payload.todos,
        todoLoaded: true,
        currentPageNumber: action.payload.pageInfo.number,
        totalElements: action.payload.pageInfo.totalElements,
        pageSize: action.payload.pageInfo.size,
        totalPages: convertToArray(action.payload.pageInfo.totalPages),
        sort: action.payload.sort
      };
    }
    case appActions.CHANGE_DESCRIPTION_TEXT: {
      return {
        ...state,
        description: action.payload.description
      };
    }
    case appActions.SAVE_TODO_SUCCESS: {
      return {
        ...state,
        description: ''
      }
    }
    case appActions.DELETE_TODO_SUCCESS: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id)
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