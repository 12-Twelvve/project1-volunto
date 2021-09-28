const express = require("express");
const app = express();




require("dotenv/config");
const PORT = 5000 || process.env.PORT;

// mofule to mongoDB
const mongoose = require("mongoose");


// cors
var cors = require('cors');
app.use(cors());

// schema models
require("./models/user");
require("./models/Post");

// import routes
const postsRoute = require("./routes/posts");
// const userRouste = require("./routes/user")
const authRoute = require("./routes/auth");
// middlewares

app.use(express.json());
// routes '
app.use("/", authRoute);

app.use("/events", postsRoute);

// app.use(require('./routes/auth'))
// app.get("/", (req, res) => {
//   res.send("  we are on home ");
// });
MONGOURI =
  "mongodb+srv://oneaboveall:awesome12@cluster0.ee20i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// connect to DB
const uri = process.env.DB_CONNECTION;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
// const conection = mongoose.connection;
// connection.once("open", () => {
//   console.log("mongodb connected")
// })
mongoose.connection.on("connected", () => {
  //connected is keyword.
  console.log("MONGODB connected !!");
});
mongoose.connection.on("error", (error) => console.log("err ", error));
// how to we listening to the server

app.listen(PORT, () => {
  console.log("server is running", {PORT});
});
