import compression from "compression";
import express, { Express } from "express";
import session from "express-session";
import helmet from "helmet";

const security: Express = express();

security.set("trust proxy", 1);
security.disable("x-powered-by");
security
    .use(compression())
    .use(
        session({
            resave: true,
            saveUninitialized: true,
            secret: "s3Cur3",
            name: "sessionId",
        })
    )
    .use(helmet());

export = security;
