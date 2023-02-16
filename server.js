const express = require("express");

// Constants
const PORT = process.env.PORT || 80;

// App
const app = express();
app.get("/", function (req, res) {
  res.send("Bye\n");
});

app.listen(PORT);
console.log();
console.log("Running on http://localhost:" + PORT);
