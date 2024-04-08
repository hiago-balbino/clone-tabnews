import database from "../../../../infra/database.js";

async function status(request, response) {
  await database.query("SELECT 1 + 1 AS sum;");

  response.status(200).json({
    status: "OK",
  });
};

export default status;