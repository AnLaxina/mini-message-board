import { Pool } from "pg";
import "dotenv/config.js";

const pool = new Pool({ connectionString: process.env.DB_CONNECTION_STRING });

export default pool;
