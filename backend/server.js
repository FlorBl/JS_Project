// We're going to create our API
// Express is our Backend Framework
// dotenv: So we can have an environment variable
// port: the port we want our server to run on
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();
// We need to initialize express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Now If we hit --> /api/goals to look in our routes/goalRoutes file, and inside the other file all we need is the --> / because the rest of the url was specified here
app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);

// With app object, we can call listen, which takes a port number, so our port variable, and we can have a second argument with a function
app.listen(port, () => console.log(`Server started on port ${port}`));
