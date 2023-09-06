class DiscordController {
  static async createInvite(req, res) {
    try {
      const discordApiUrl = `https://discord.com/api/v10/channels/${process.env.DISCORD_GENERAL_CHANNEL_ID}/invites`;

      const headers = {
        Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        'Content-Type': 'application/json',
      };

      const inviteOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify({
          max_age: 900, // 15 minutes
          max_uses: 1,
          temporary: false,
          unique: true,
        }),
      };
      const response = await fetch(discordApiUrl, inviteOptions);
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(`Discord API Error: ${errorResponse.message}`);
      }
      const { code } = await response.json();
      return res.status(200).json({ inviteUrl: `https://discord.gg/${code}` });
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate invite' });
    }
  }
}

export default DiscordController;
