const OpenAI = require("openai");
const Chat = require("../models/chatModel");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const chatWithAI = async (req, res) => {
  try {
    const { userQuery } = req.body;
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: userQuery }],
    });

    const botResponse = response.choices[0].message.content;

    const chatData = await Chat.create({ userQuery, botResponse });

    res.json(chatData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "AI Response Failed" });
  }
};

module.exports = { chatWithAI };
