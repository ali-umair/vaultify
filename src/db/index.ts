import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from "pg";

declare global {
    var db: ReturnType<typeof drizzle> | undefined;
    var pool: Pool | undefined;
}

// ✅ Reuse pool in development
const pool = global.pool ?? new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 5,
});

if (process.env.NODE_ENV !== 'production') global.pool = pool;

export const db = global.db ?? drizzle(pool);

if (process.env.NODE_ENV !== 'production') global.db = db;
