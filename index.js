import express from 'express';
import expressValidator from 'express-validator';
import { getPublicRoutes } from './controllers';
import config from './config';

const app = express();
const { port } = config;

app.use(expressValidator());

app.use(getPublicRoutes());

app.use((req, res) => res.send('404 Not found'));

app.listen(port, () => console.log(`Server started on ${port}`));