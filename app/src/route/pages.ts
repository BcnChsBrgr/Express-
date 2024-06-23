import express, { Router, Request, Response, NextFunction } from "express";

const pageRouter: Router = express.Router();

pageRouter.use((req: Request, res: Response, next: NextFunction) => {
    next();
});

pageRouter.get("/", function (req: Request, res: Response) {
    res.send("Express + Typescript Server.");
});

export = pageRouter;
