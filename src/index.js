require("dotenv").config();
const { Client, IntentsBitField, EmbedBuilder, Embed } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
});

client.on("clientReady", (c) => {
  console.log(`✅ ${c.user.username} Is Truly Ready`);
});

client.on("interactionCreate", async (interaction) => {

  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "test") {
     const embed = new EmbedBuilder().setTitle("l7wak").setDescription("nik brk").setColor('Random').setFields(
      {
      name: "idk",
      value: "nik brk",
      inline: true,
    },
    {
      name: "ezz",
      value: "nik brk",
      inline: true,
    },
    )

     interaction.reply({embeds: [embed]})
   
  }
});

client.login(process.env.TOKEN);