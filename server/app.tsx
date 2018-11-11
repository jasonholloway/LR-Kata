import express from 'express'
import { renderToString } from 'react-dom/server'
import State from '../app/State';
import createApp from '../app/createApp'

export default () => {
    const app = express();

    app.use((req, res) => {
        const { element, store } = createApp();

        const html = renderToString(element);
        const initialState = store.getState();

        res.send(renderPage(html, initialState));
    });

    return app;
};

function renderPage(html: string, state: State) {
    return `
        <!doctype html>
        <html>
            <head>
                <title>What an Amazing Selection of Hotels</title>
            </head>
            <div id="root">${html}</div>
            <script>
                window.__PRELOADED_STATE__ = ${encode(state)}
            </script>
            <script src="/public/bundle.js"></script>
        </html>
    `
}

function encode(v) {
    return JSON.stringify(v).replace(/</g, '\\u003c');
}
