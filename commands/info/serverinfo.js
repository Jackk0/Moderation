const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "serverinfo",
  aliases: ["serverinformation"],
  description: "Show Server Information!",
  usage: "Serverinfo",
  run: async (client, message, args) => {
    //Start
   
    const guild = message.guild;
    const Roles = guild.roles.cache.size || "No Roles!";
    const Members = guild.memberCount;
  

    const embed = new MessageEmbed()
      .setTitle(guild.name + " Info")
      .setColor("")
      .setThumbnail(guild.iconURL())
      .addField(`ID`, `${guild.id}`, true)
      .addField(`Created At`, guild.createdAt.toDateString())
      .addField(`Owner`, `${message.guild.owner}`, true)
      .addField(`Members`, Members, true)
      .addField(`Channels`, `{message.guild.channels.cache.size}`, true)
      .addField(`Roles`, Roles, true)
       .addField(`text`, `{message.guild.channels.text.cache.size}`, true)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
