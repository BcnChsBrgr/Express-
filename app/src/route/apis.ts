import express, { Router, Request, Response } from "express";

const apiRouter: Router = express.Router();

apiRouter.get("/", function (req: Request, res: Response) {
    res.json({ ping: "pong" });
});

export = apiRouter;
