import express, { Request, Response, NextFunction } from "express"
import { HttpException } from "./exceptions/HttpException"
import usersRouter from "./routes/userRoutes"

export const runServer = async (port: number) => {
  if (!port) {
    process.exit(1);
  }

  const apiPath = "/api/v1";
  const app = express();
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(apiPath, usersRouter);

  app.get('/', (req: Request, res: Response) => {
    res.send("Linson Augustine");
  });

  app.use((error: HttpException, req: Request, res: Response, next: NextFunction) => {
    const statusCode = error.status || 500
    res.status(statusCode).json({ status: statusCode, message: error.message })
  })

  const server = app.listen(port, () => {
    console.info(`server started at http://localhost:${port}`);
  });

  return server;
};
