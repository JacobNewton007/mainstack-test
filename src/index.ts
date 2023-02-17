import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { API_VERSION_ONE_URL, APP_USE_LIMIT, CORS_OPTIONS, ROUTES, PORT, NODE_ENV } from './constants/index';

import { connect } from './model/database';
import versionOneRouter from './routers/index';
import { invalidRoute, } from './helpers/index';

connect()
const app = express()
app.use(helmet())
app.use(cors(CORS_OPTIONS))
app.use(APP_USE_LIMIT)
app.use(express.json());
app.use(morgan('dev'));

// handle every valid request i.e request to api/v1
app.use(API_VERSION_ONE_URL, versionOneRouter);

app.all(ROUTES.WILD_CARD, invalidRoute)

if (NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`App is running on Port ${PORT}` )
  })
};

// database connections.

export default app