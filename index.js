const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("Received a request at /");
  res.send(
    "Server alive & kicking with Docker Containers semantic versioning fixes 🚀 !!!",
  );
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
