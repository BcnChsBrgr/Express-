import express, { Express } from "express";
import helmet from "helmet";
import apis from "../route/apis";
import pages from "../route/pages";
import compression from "compression";
import session from "express-session";

const app: Express = express();

app.disable("x-powered-by");

app.use(compression());
app.set("trust proxy", 1);
app.use(
    session({
        secret: "s3Cur3",
        name: "sessionId",
    })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet());
app.use("/", pages);
app.use("/api", apis);

export = app;
