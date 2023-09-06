import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import discordClient from './config/discord.js';
import discordRouter from './routes/discord.js';
import rateLimiterMiddleware from './middleware/limiter.js';
const app = express();
const PORT = process.env.PORT;
app.set('trust proxy', 1);

// Middlewares
app.use(rateLimiterMiddleware);

// Routers
app.use('/discord', discordRouter);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

discordClient.login(process.env.DISCORD_BOT_TOKEN);
