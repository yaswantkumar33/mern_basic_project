import express from "express";
import dotenv from "dotenv";
import { connect_db } from "./config.js";
import Product from "./Models/product.model.js";
//start the express app......
const app = express();
app.use(express.json());
dotenv.config();
app.get("/", (req, res) => {
  res.send("server is ready 5000");
});

app.post("/api/products", async (req, res) => {
  const product = req.body;
  console.log(product);
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ sucess: false, message: "Please Provide All The Details" });
  }
  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({
      sucess: true,
      message: "Product Has been Created Sucessfully",
      data: newProduct,
    });
  } catch (error) {
    console.log("Error".error.message);
    res.status(500).json({ sucess: false, message: "Server Error" });
  }
});
// start the back server listiner
app.listen(5000, () => {
  connect_db();
  console.log("server started at http://localhost:5000");
});
// 31:25:34:67