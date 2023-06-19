import express from "express";

const router = express.Router();

router.get("/api/combo", (req, res) => {
    res.send("Hello from combo");
})

export {router as comboRouter};