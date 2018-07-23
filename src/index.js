import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    text:"shuchi"
}
const rootReducer = (state = initialState, action) => {
    return state;
}
const store = createStore(rootReducer)
ReactDOM.render(<Provider store={store}  ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
