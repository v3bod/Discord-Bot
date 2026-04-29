require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
  {
    name: "add",
    description: "command w khlas",
    options: [
      {
        name: "first_name",
        description: "nik brk",
        type: ApplicationCommandOptionType.Number,
        choices: [
          {
               name: "one",
               value: 1,
          },
          {
               name: "tow",
               value: 2,
          }
        ],
        required: true,
      },
      {
        name: "second_name",
        description: "nik brk",
        type: ApplicationCommandOptionType.Number,
        required: true,
      }
    ]
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