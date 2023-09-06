import express from "express";
const discordRouter = express.Router();

// Controller Import
import DiscordController from "../controllers/DiscordController.js";

// Create Discord Invite
discordRouter.get("/generate-invite", DiscordController.createInvite);

export default discordRouter;
