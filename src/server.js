import dotenv from 'dotenv';
import express from 'express';
import discordClient from './config/client.js';
import inviteRouter from './routes/invite.js';
import rateLimiterMiddleware from './middleware/limiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;
app.set('trust proxy', 1);

// Middlewares
app.use(rateLimiterMiddleware);

// Routers
app.use('/discord', inviteRouter);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

// Listening to Bot Being Ready
discordClient.on('ready', client => {
  console.log('Bot is Online');
});

discordClient.login(process.env.DISCORD_BOT_TOKEN);
