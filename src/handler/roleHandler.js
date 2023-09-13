import inviteLinks from '../invites/inviteDetails.js';

const roleHandler = async member => {
  // Fetch the invites for the server when the member joins
  const invites = await member.guild.invites.fetch();

  // Compare the invites to find the used invite link
  const usedInvite = invites.find(invite => inviteLinks.includes(invite.url));

  if (usedInvite) {
    console.log(`Member joined using invite link: ${usedInvite.url}`);

    const role = member.guild.roles.cache.find(
      role => role.name === 'MERN PIZZA'
    );

    if (role) {
      try {
        // Assign the role to the member
        member.roles.add(role);
        usedInvite.delete();
        console.log(`Assigned role ${role.name} to the member.`);
      } catch (error) {
        console.log(error);
      }
    }
  }
};

export default roleHandler;
