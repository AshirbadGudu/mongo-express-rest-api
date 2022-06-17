import express from "express";
import { init } from "./configs";
import { products, users } from "./routers";

// Initialize the required configs
init();

const PORT = process.env.PORT || 3023;

const app = express();

// For parsing application/json type body add following middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_, res) => res.send("Node JS Express Typescript Server Running"));

/**
 * API Routes
 * */

app.use("/users/", users);
app.use("/products/", products);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
