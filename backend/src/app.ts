import 'express-async-errors';
import 'reflect-metadata';

import './database/connection';

import express, { Request, Response, NextFunction } from 'express';

import routes from './routes';
import AppError from './errors/appError';

const app = express();

app.disable('x-powered-by');

app.use(express.json());
app.use(routes);

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
);

export default app;
