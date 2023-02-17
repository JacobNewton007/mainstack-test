import winston from 'winston';
// import chalk from 'chalk';
import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import {config} from 'dotenv'

import { ENVIRONMENT } from '../constants/index';
import debug from 'debug';
import { ResponsePacket } from '../types/index';
import { IProductDocument } from '../model/products/product.types';

config()

const myformat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level} ${info.message} ${info.stack}`
  )
);

/**
 * Winston logger
 */
const devLogger = winston.createLogger({
  level: 'warning',
  transports: [
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'warning',
      maxsize: 500,
      format: myformat,
    }),
    new winston.transports.Console({
      format: myformat,
    }),
  ],
});

const prodLogger = winston.createLogger({
  level: 'warning',
  transports: [
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'info',
      maxsize: 500,
      format: myformat,
    }),
  ],
});
type loggerLevel = 'warning' | 'error' | 'info'

export function logger<T>(level: loggerLevel, logInfo: T) {
  if (ENVIRONMENT === 'local') {
    return devLogger.log(level, logInfo);
  }
  return prodLogger.log(level, logInfo);
}

/**
 * Handle all non defined route visits
 * @param res http response object
 */
export function invalidRoute(_: any, res: Response) {
  return res.status(StatusCodes.NOT_FOUND).json({ message: 'Route not exist' });
}

/**
 * Handle api v1 route testing
 * @param res http response object
 */
export function testRoute(_: any, res: Response) {
  return res
    .status(StatusCodes.OK)
    .json({ message: 'Test API' });
}

/**
 * Logs message to the console in dev mode
 * @param data the data to be logged
 * @param textColor color of console
 */
// export function log(data: any, textColor = chalk.bold.cyanBright) {
//   const print = debug('mainstack-test-api');
//   print(textColor(data));
// }

export function errorResponse ({ res, data, message, statusCode = 500}: ResponsePacket) {
  res.status(statusCode).json({message, ...(data && { data })})
}

export function successResponse ({ res, data, message, statusCode = 500}: ResponsePacket) {
  res.status(statusCode).json({message, ...(data && { data })})
}

export function getPagingData(data_: { count: number, rows: IProductDocument[] }, page: number, limit: number) {
  const { count: totalItems, rows: data } = data_;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, data, totalPages, currentPage };
}

export function getPagination(page: number, size: number) {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

