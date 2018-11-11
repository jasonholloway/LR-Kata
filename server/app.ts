import express from 'express'
import HotelSearch from '../app/HotelSearch'

export default () => {
    const app = express();

    app.use((req, res) => {
        res.sendStatus(200);
    });

    return app;
};
