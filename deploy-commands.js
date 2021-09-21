const fs = require("fs")
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const { clientId, guildId, token } = require("./config.json")

const commands = []
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"))

console.log(commandFiles)

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  commands.push(command.data.toJSON())
}

const rest = new REST({ version: "9" }).setToken(token)

;(async () => {
  try {
    if (clientId) {
      await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
        body: commands,
      })
    } else {
      await rest.put(
        Routes.applicationGuildCommands(
          process.env.clientId,
          process.env.guildId
        ),
        {
          body: commands,
        }
      )
    }
    console.log("Successfully registered application commands.")
  } catch (error) {
    console.error(error)
  }
})()
