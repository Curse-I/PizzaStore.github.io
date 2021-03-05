import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './scss/app.scss';
import {BrowserRouter} from "react-router-dom";
import store from './redux/store'
import {Provider} from "react-redux";

// store.dispatch({
//     type: 'SET_SORT_BY',
//     payload: 'price',
// })

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
