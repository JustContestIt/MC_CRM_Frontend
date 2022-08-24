import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';
import Store from "./store/store";

const store = new Store()

export const Context = createContext({
    store
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <BrowserRouter>
        <Context.Provider value={{store}}>
            <App/>
        </Context.Provider>
    </BrowserRouter>
</React.StrictMode>
);
