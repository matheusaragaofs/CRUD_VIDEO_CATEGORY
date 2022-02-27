import "reflect-metadata";
import "./database";
import express, { json } from "express";
import { routes } from "./routes";

const app = express();
const APP_PORT = 3000;

app.use(json());
app.use(routes);

app.listen(APP_PORT, () => console.log(`Server is running at ${APP_PORT}`));
