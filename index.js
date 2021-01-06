const Discord = require('discord.js');
const { prefix, token} = require('./config.json')
const client = new Discord.Client();

const command = require('./command')

client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {
    console.log(message.content);
})

client.login(token);

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('$kick')) {

    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
 
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {

            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
 
            
            console.error(err);
          });
      } else {

        message.reply("That user isn't in this guild!");
      }
  
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});
client.on('message', message => {

  if (!message.guild) return;

  
  if (message.content.startsWith('$ban')) {

    const user = message.mentions.users.first();
 
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      if (member) {

        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {

            message.reply('I was unable to ban the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  }
});
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'misc-info');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});


client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});


client.on('message', message => {
  if (message.content === '$help') {
    message.channel.send('What do you want,chose one of these and dont forget to right $help before one of these two (Utility), (fun) or (info) or even you can check his (github)');
  }
});


client.on('message', message => {
  if (message.content === '$help utility') {
    message.channel.send('$use ($Kick) to kick someone or($ban) to ban someone');
  }
});


client.on('message', message => {
  if (message.content === '$help fun') {
    message.channel.send('for fun you can right (ping) ');
  }
});


client.on('message', message => {
  if (message.content === '$help info') {
    message.channel.send('@NotKazushi made this bot you can send him a message in dm to join his server');
  }
});


client.on('message', message => {
  if (message.content === '$help github') {
    message.channel.send('here is the link https://github.com/ahmedhettak/Not-Kazushi-Bot');
  }
});
