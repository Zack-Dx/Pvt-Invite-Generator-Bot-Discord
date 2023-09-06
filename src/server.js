import dotenv from "dotenv";
dotenv.config();
import express from "express";
import discordClient from "./config/discord.js";
import discordRouter from "./routes/discord.js";
const app = express();
const PORT = process.env.PORT;

// Routers
app.use("/discord", discordRouter);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

discordClient.login(process.env.DISCORD_BOT_TOKEN);
