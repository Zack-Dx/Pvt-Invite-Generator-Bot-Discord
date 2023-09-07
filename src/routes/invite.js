import express from 'express';
const inviteRouter = express.Router();

// Controller Import
import InviteController from '../controllers/InviteController.js';

// Get Guild Invites
inviteRouter.get('/get-invites', InviteController.getAllInvites);

// Create Discord Invite
inviteRouter.get('/generate-invite', InviteController.createInvite);

export default inviteRouter;
