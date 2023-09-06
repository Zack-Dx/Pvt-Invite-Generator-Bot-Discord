import { Client, GatewayIntentBits } from "discord.js";
// Discord Client
const discordClient = new Client({
  intents: [GatewayIntentBits.Guilds],
});

export default discordClient;
