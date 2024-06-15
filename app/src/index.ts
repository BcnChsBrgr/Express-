import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port: number = Number(process.env?.PORT || 3000);

app.get("/", function (req: Request, res: Response) {
    res.send("Express + Typescript Server");
});

app.listen(port, () => {
    console.log(`[server] Server is running at http://localhost:${port}`);
});
