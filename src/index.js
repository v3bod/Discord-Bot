require("dotenv").config();
const { Client, IntentsBitField } = require('discord.js');

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

  if (interaction.commandName === "add") {

    const num1 = interaction.options.getNumber("first_name").value;
    const num2 = interaction.options.getNumber("second_name").value;

    // const result = num1 + num2;

    await interaction.reply(`result = ${num1 + num2}`);
  }
});

client.login(process.env.TOKEN);