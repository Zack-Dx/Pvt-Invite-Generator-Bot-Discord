import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import inviteRouter from './routes/invite.js';
import rateLimiterMiddleware from './middleware/limiter.js';
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
