import mysql from "serverless-mysql";

export const pool = mysql({
  config: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT as string),
    database: process.env.DB_NAME,
  },
});
