import express, { Express } from "express";
import helmet from "helmet";
import apis from "../route/apis";
import pages from "../route/pages";
import database from "../config/database";
const app: Express = express();

app.set("config.database", database);
app.disable("x-powered-by");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet());
app.use("/", pages);
app.use("/api", apis);

export = app;
