import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.get('*', (req, res) => res.status(404).json({ message: 'PAGE NOT FOUND' }));

app.listen(3333, () => {
    console.log('Server started listening on port 3333');
});
