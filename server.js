const express = require("express")

const PORT = process.env.PORT || 3600;

const app = express();

// app.use(express.static("/public"));
app.use("/public", express.static("public"))

// Parse application body as JSON
// middleware - backend
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// const routes = require("./controllers/futbolController");

// app.use(routes);






// temporary routes to see if routes work
app.get("/home", function(req, res) {
    res.render("home");
  });

app.get("/roster", function(req, res) {
    res.render("roster");
  });

app.get("/score", function(req, res) {
    res.render("score");
  });


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});