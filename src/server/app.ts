import express from 'express';

export default () => {
    const app = express();

    app.use((req, res) => {
        res.sendStatus(200);
    });

    return app;
};
