class DiscordController {
  static async createInvite(req, res) {
    try {
      const discordApiUrl = `${process.env.DISCORD_BASE_URL}/channels/${process.env.DISCORD_GENERAL_CHANNEL_ID}/invites`;

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
      const {
        code,
        guild: { name, icon },
        created_at,
        expires_at,
        max_age,
        max_uses,
      } = await response.json();

      return res.status(200).json({
        inviteUrl: `https://discord.gg/${code}`,
        validity: `${max_age / 60} minutes`,
        max_uses,
        created_at,
        expires_at,
        serverName: name,
        serverIcon: `${process.env.DISCORD_ICON_URL}${process.env.DISCORD_SERVER_ID}/${icon}`,
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate invite' });
    }
  }
}

export default DiscordController;
