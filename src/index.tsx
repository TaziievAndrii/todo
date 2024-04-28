import {createRoot} from "react-dom/client";
import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import App from "./components/App/App";

import store from "./store/index";

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement)

    root.render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    )
} else {
    console.error("Корневой элемент не найден.");
}
