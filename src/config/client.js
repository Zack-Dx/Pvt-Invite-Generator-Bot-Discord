import { Client } from 'discord.js';
import roleHandler from '../handler/roleHandler.js';

const discordClient = new Client({
  intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'GuildInvites'],
});
discordClient.on('guildMemberAdd', roleHandler);
export default discordClient;
