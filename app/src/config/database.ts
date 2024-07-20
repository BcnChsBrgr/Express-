import * as dotenv from "dotenv";
const config = dotenv.config({ path: ".env" });

const databaseConfig = {
    default: "mysql", // default with mysql first

    mysql: {
        DB_HOST: config.parsed?.DB_HOST ?? "120.0.0.1",
        DB_USER: config.parsed?.DB_USER,
        DB_PASSWORD: config.parsed?.DB_PASSWORD,
        DB_NAME: config.parsed?.DB_NAME,
        DB_PORT: config.parsed?.DB_PORT ?? 3306,
    },
};

export = databaseConfig;
