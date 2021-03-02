const express = require("express");

const PORT = process.env.PORT || 3600;

const app = express();

// middleware - backend
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/public", express.static("public"));

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const router = require("./controllers/futbolController");

app.use(router);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
