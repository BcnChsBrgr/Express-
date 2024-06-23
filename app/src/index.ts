import dotenv from "dotenv";
import app from "./bootstrap/app";

dotenv.config();

const port: number = Number(process.env?.PORT || 3000);

app.listen(port, function () {
    console.log(`[server] Server is running at http://localhost:${port}/`);
});
