import express, { Router, Request, Response, NextFunction } from "express";

const apiRouter: Router = express.Router();

apiRouter.use((req: Request, res: Response, next: NextFunction) => {
    next();
});

apiRouter.get("/", function (req: Request, res: Response) {
    res.json({ ping: "pong" });
});

export = apiRouter;
