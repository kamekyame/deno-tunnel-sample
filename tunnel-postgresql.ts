import { Pool } from "npm:pg";

const pool = new Pool();

Deno.serve(async () => {
  const result = await pool.query("SELECT * FROM users;");
  return Response.json(JSON.stringify(result.rows));
});
