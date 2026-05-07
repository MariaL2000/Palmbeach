const { Client } = require("pg");
const client = new Client({
  connectionString:
    "postgresql://postgres.ltmopcewiuuvjrkehugm:ShopIt2026Teslo@aws-1-us-west-2.pooler.supabase.com:6543/postgres?sslmode=require",
});
client
  .connect()
  .then(() => {
    console.log("¡CONECTADO EXITOSAMENTE!");
    process.exit();
  })
  .catch((err) => {
    console.error("ERROR DE CONEXIÓN:", err.stack);
    process.exit();
  });
