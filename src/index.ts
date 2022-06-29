import express from "express";
import expressFileUpload from "express-fileupload";
import { init } from "./configs";
import { categories, products, users, file } from "./routers";

// Initialize the required configs
init();

const PORT = process.env.PORT || 3023;

const app = express();

// For parsing application/json type body add following middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  expressFileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB,
  })
);

app.get("/", (_, res) => res.send("Node JS Express Typescript Server Running"));

/**
 * API Routes
 * */

app.use("/users/", users);
app.use("/products/", products);
app.use("/categories/", categories);
app.use("/file/", file);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
