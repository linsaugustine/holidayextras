import app from "./server"

const { PORT = 9000 } = process.env;

app.listen(PORT, () => {
  console.info(`server started at http://localhost:${PORT}`);
});