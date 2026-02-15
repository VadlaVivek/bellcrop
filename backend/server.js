const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/transactions", require("./routes/transactions"));

// sync database
sequelize.sync().then(() => {
  console.log("Database synced");
});

app.listen(5000, () =>
  console.log("Server running on port 5000")
);
