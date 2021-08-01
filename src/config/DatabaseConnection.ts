import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongoUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.3yyvf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

export default function () {
  mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  const connection = mongoose.connection;
  connection.on("error", console.error.bind(console, "Connection error:"));
  connection.once("open", () => console.log("Database connection established"));
}
