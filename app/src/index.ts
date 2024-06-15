import express, { Express } from "express";
import dotenv from "dotenv";
import apis from "./route/apis";
import pages from "./route/pages";

dotenv.config();

const app: Express = express();
const port: number = Number(process.env?.PORT || 3000);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apis);
app.use("/", pages);

app.listen(port, function () {
    console.log(`[server] Server is running at http://localhost:${port}`);
});
