const express = require("express");
const { chatWithAI } = require("../controllers/chatController");
const router = express.Router();

router.post("/chat", chatWithAI);

module.exports = router;
