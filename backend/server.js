const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dotenv = require("dotenv");
dotenv.config();

//import Routes 
app.use("/user", user);
const user = require("./Routes/userRoutes");

app.use("/foods", require("./routes/Menu.Routes"));
app.use("/room", require("./routes/Room.Routes"));
app.use("/employee", require("./routes/Employee.Routes"));
app.use('/api', require('./routes/Comment.Routes'));

mongoose.connect(
  process.env.DB_URL, {
  //type warnings
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

  .then(() => {
    console.log("Mongo DB Connected Successfully");
  })

  .catch((err) => console.log("DB Connection Failed", err));

app.listen(PORT, () => {
  console.log(`Backend App is running on ${PORT}`);
});