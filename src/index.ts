import { runServer } from "./server";
const { PORT = 9000 } = process.env;
runServer(PORT as number).catch(e => console.error(e))