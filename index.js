const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const prefix = config.prefix;
 
client.on('ready', () => {
  console.log('Sombra hack initiated!');
});

// if a user says 'ping', Sombra will display a message 
client.on('message', message => {

  // if the message doesn't start with the prefix then do nothing like Jon Snow
  if (!message.content.startsWith(prefix)) return;

  // splits message into an array
  var args = message.content.substring(prefix.length).split(" ");

  // switch method to take multiple commands easily
  switch (args[0].toLowerCase()) {
    case "ping":
      message.reply('Hack the Planet!');
      break;
    case "boop":
      message.reply('Boop!');
      break;
    case "userinfo":
      var embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription('¿Qué onda?, this is your user info.')
        .addField("User:", message.author.username)
        .addField("ID:", message.author.id)
        .addField("Created on:", message.author.createdAt)
        .setColor(0xFF6663)
        .setThumbnail(message.author.avatarURL);

      message.channel.sendEmbed(embed);
      break;
    default:
      message.reply("¡Apagando las luces! Sorry, I don't recognize this command.");
  }
});

// when a new member of the server joins, Sombra will welcome them
client.on('guildMemberAdd', member => {
  // Sends the message to the guilds default #general channel mentioning the member
  member.guild.defaultChannel.send(`Welcome to the 512 Goons server, glad to have you ${member}!`);
});
 
client.login(config.token);