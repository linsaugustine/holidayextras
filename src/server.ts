import express, { Request, Response, NextFunction } from "express"

export const runServer = async (port: number) => {
  if (!port) {
    process.exit(1);
  }

  const apiPath = "/api/v1";
  const app = express();

  const server = app.listen(port, () => {
    console.info(`server started at http://localhost:${port}`);
  });

 // app.use(apiPath, authorsRouter);

  app.get('/', (req: Request, res: Response) => {
    res.send("Linson Augustine");
  });

  app.use((error, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500);
    
    res.json({
      status: error.status,
      message: error.message,
      ...(process.env.NODE_ENV === "dev" && { stack: error.stack }),
    });
  });

  return server;
};
