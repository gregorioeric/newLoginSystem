const app = require("./app");
const connection = require("./src/models/connect");

app.listen(3000, async () => {
  const [result] = await connection.execute("SELECT 1");
  if (result) {
    console.log("conexão feita com sucesso.");
  }
});
