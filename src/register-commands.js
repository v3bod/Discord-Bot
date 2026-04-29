require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
  {
    name: "test",
    description: "lol",
  }
];

const rest = new REST({version : "10"}).setToken(process.env.TOKEN);

(async () => {
    console.log("Registering slash Command....")

     try {    
        await rest.put(
            Routes.applicationGuildCommands(process.env.Client_ID, process.env.Guild_ID),
            { body : commands}
        );
        console.log("Registering Successfully")
    } catch (error) {
        console.log(`we have error ${error}`)
    }
})();