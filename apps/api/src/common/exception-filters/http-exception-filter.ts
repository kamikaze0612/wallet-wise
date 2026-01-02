import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import type { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionsFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    console.log('HttpExceptionsFilter');
    console.log(exception.name);

    const httpStatusCode = exception.getStatus();

    const errorResponse = {
      timestamp: new Date().toISOString(),
      path: request.url,
      httpStatusCode,
      errorCode: exception.message,
      details: {
        cause: exception.cause,
        description: exception.getResponse()['error'],
      },
    };

    response.status(httpStatusCode).send(errorResponse);
  }
}
