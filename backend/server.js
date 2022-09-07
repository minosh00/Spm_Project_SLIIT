const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


//import Routes 
const user = require("./Routes/userRoutes");


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

app.use("/user",user);



app.use("/foods", require("./routes/Menu.Routes"));

app.use('/api', require('./routes/RoomsReservationRoutes'));

// comments API
app.use('/api', require('./routes/Comment.Routes'));

//app.use("/fooo", require("./Routes/Food.Route"));

mongoose.connect(
  process.env.DB_URL, {
    //type warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("Mongo DB connected successfully");
  })

  .catch((err) => console.log("DB connection failed", err));

app.listen(PORT, () => {
  console.log(`Backend App is running on ${PORT}`);
});




//const server = http.createServer(app);



