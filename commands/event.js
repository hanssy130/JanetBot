const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("event")
    .setDescription("Add an event to #gathering-details!")
    .addStringOption((option) =>
      option
        .setName("title")
        .setDescription("Enter event title")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("details")
        .setDescription("Enter description/details")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("date")
        .setDescription("Enter event title")
        .setRequired(true)
    ),
  async execute(interaction) {
    console.log(interaction)
    console.log(interaction.options.getString("details"))
    console.log(interaction.options.getString("date"))

    await interaction.reply({
      content:
        interaction.options.getString("title") +
        interaction.options.getString("details"),
      ephemeral: false,
    })
  },
}
