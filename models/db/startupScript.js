import "dotenv/config.js";
import { Client } from "pg";

const client = new Client({
    host: process.env.HOSTNAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DATABASE,
    connectionString: process.env.DB_CONNECTION_STRING,
});

console.log("Connecting to DB...");
const SQL = `CREATE TABLE IF NOT EXISTS messages(
    usernameId INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255),
    text TEXT,
    added TIMESTAMPTZ
    );`;
await client.connect();
await client.query(SQL);
await client.end();
console.log("Connection end!");
