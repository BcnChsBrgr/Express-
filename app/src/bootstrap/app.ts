import express, { Express } from "express";
import helmet from "helmet";
import apis from "../route/apis";
import pages from "../route/pages";

const app: Express = express();

app.disable("x-powered-by");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet());
app.use("/", pages);
app.use("/api", apis);

export = app;
