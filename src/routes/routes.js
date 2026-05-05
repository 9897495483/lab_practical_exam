const express =require("express");
const route = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
route.get("/public", (req, res) => {
    res.send(" Welcome to the public route ");
});
route.get("/private", authMiddleware, (req, res) => {
    res.send("Welcome to private route");
});
export default routes;