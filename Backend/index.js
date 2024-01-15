import express from "express";
import mongoose from "mongoose";
import routes from "./Routes/CreateUser.js";
import cors from "cors";

const app = express();
const port = 3000;
const mongoURL = "mongodb://localhost:27017/FoodFleet";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("MongoDB Connected");

    const fetch_data = mongoose.connection.db.collection("food_items");
    fetch_data.find({}).toArray(function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

mongoDB();
// Use cors middleware for handling CORS headers
app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.header(
//     "Acess-Control-Allow-Headers",
//     "Origin, X-Requested-With, Contetnt-Type,Accept"
//   );
//   next();
// });
app.use(express.json());

app.use("/api", routes);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
