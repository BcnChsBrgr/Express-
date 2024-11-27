import express, { Express } from "express";
import apis from "../route/apis";
import pages from "../route/pages";
import security from "../config/security";

const app: Express = express();
app.use(security);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", pages);
app.use("/api", apis);

export = app;
