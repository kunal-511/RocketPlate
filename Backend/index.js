import express from "express";
import mongoose from "mongoose";
import routes from "./Routes/CreateUser.js";
import cors from "cors";
import routes1 from "./Routes/DisplayData.js";

const app = express();
const port = 3000;
const mongoURL = "mongodb://localhost:27017/FoodFleet";

// Use cors middleware for handling CORS headers
app.use(cors());

// Handle CORS headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

// Define routes
app.use("/api", routes);
app.use("/api", routes1);

// Default route
app.get("/", (req, res) => {
  res.send("Hello World");
});

let food_items;
let food_category;

async function mongoDB() {
  try {
    await mongoose.connect(mongoURL);
    console.log("MongoDB Connected");

    const fetch_data = await mongoose.connection.db.collection("food_items");
    food_items = await fetch_data.find({}).toArray();

    const fetch_data1 = await mongoose.connection.db.collection(
      "food_category"
    );
    food_category = await fetch_data1.find({}).toArray();
    //console.log(food_category);
    //   console.log(food_items);

    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

mongoDB();
export { food_items, food_category };
