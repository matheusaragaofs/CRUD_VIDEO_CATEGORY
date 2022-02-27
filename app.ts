import express, { json } from "express";

const app = express();
const APP_PORT = 3000;
app.use(json());

app.listen(APP_PORT, () => console.log(`Server is running at ${APP_PORT}`));
