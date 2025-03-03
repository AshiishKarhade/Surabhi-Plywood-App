import express from "express";
import mongoose from "mongoose";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import dotenv from "dotenv";
import orderRouter from "./routers/orderRouter.js";
//const path = require("path");
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(
  process.env.MONGODB_URL || "mongodb://mongodb:27017/surabhiplywood",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
  }
);

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
//app.use(express.static(path.join(__dirname, "/frontend/build")));
//app.get("*", (req, res) =>
//  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
//);
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
