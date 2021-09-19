const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("shouldi")
    .setDescription("Ask Janet if you should do it"),
  async execute(interaction) {
    await interaction.reply({
      content: "What's stopping you?",
      ephemeral: false,
    })
  },
}
