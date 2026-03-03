const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const ENV = process.env.APP_ENV || "DEV";

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "QryptShield Demo App Running super!!🚀",
    environment: ENV,
    timestamp: new Date(),
  });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${ENV}`);
});