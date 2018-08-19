import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux"
import './sass/common/index.sass';
import allReducers from "./reducers"
import {Provider} from "react-redux"
import Participants from './components/Participants'

const store = createStore(allReducers)


ReactDOM.render(
        <Provider store={store}>
        <Participants />
            </Provider>
    , document.getElementById('root'));
