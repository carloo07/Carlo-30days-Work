const { Command } = require(`reconlx`);
const ee = require(`../../settings/embed.json`);
const config = require(`../../settings/config.json`);
const { MessageEmbed, version } = require(`discord.js`);
const emoji = require(`../../settings/emoji.json`);
const { duration } = require(`../../handlers/functions`);

module.exports = new Command({
  name: `botinfo`,
  description: `get info of bot`,
  userPermissions: [`SEND_MESSAGES`],
  botPermissions: [`SEND_MESSAGES`],
  category: `Information`,
  cooldown: 10,
  run: async ({ client, interaction, args, prefix }) => {
    interaction.followUp({
      embeds: [
        new MessageEmbed()
          .setColor(ee.color)
          .setAuthor({
            name: client.user.username,
            iconURL: client.user.displayAvatarURL({ dynamic: true }),
          })
          .setDescription(
            `** Name: <@637299944939585576> | [Youtube Channel](https://youtube.com/channel/UCYy6kxOtcw4CT0JhMRd_z3A) | [Github](https://github.com/carloo07) ** \n\n`
          )
          .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
          .addFields([
            {
              name: `๐ค Name`,
              value: `>>> \`${client.user.username}\``,
              inline: true,
            },
            {
              name: `๐ Ping`,
              value: `>>> \`${client.ws.ping}ms\``,
              inline: true,
            },
            {
              name: `๐๏ธ Servers`,
              value: `>>> \`${client.guilds.cache.size} Servers\``,
              inline: true,
            },
            {
              name: `๐จโ๐งโ๐ง Users`,
              value: `>>> \`${client.users.cache.size} Users\``,
              inline: true,
            },
            {
              name: `๐ Channels`,
              value: `>>> \`${client.channels.cache.size} Channels\``,
              inline: true,
            },
            {
              name: `๐ Node.js Version`,
              value: `>>> \`${process.version}\``,
              inline: true,
            },
            {
              name: `๐ Discord.js Version`,
              value: `>>> \`${version}\``,
              inline: true,
            },
            {
              name: `${emoji.setup} Bot Commands`,
              value: `>>> \`\`\` Commands ${client.commands.size} , SubCommands ${client.subcmd.size}\`\`\``,
            },
            {
              name: `${emoji.time} Bot Uptime`,
              value: `>>> \`\`\`${duration(client.uptime)
                .map((i) => `${i}`)
                .join(` , `)}\`\`\``,
            },
          ])
      ],
    });
  },
});
