import express, { Router, Request, Response } from "express";

const pageRouter: Router = express.Router();

pageRouter.get("/", function (req: Request, res: Response) {
    res.send("Express + Typescript Server");
});

export = pageRouter;
