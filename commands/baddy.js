const { SlashCommandBuilder } = require("@discordjs/builders")
const { Client, Intents, MessageEmbed } = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("baddy")
    .setDescription("setup days when badminton is booked")
    .addStringOption((option) =>
      option
        .setName("monday")
        .setDescription("is this day booked?")
        .setRequired(true)
        .addChoice("yes", "yes")
        .addChoice("no", "no")
    )
    .addStringOption((option) =>
      option
        .setName("tuesday")
        .setDescription("is this day booked?")
        .setRequired(true)
        .addChoice("yes", "yes")
        .addChoice("no", "no")
    )
    .addStringOption((option) =>
      option
        .setName("wednesday")
        .setDescription("is this day booked?")
        .setRequired(true)
        .addChoice("yes", "yes")
        .addChoice("no", "no")
    )
    .addStringOption((option) =>
      option
        .setName("thursday")
        .setDescription("is this day booked?")
        .setRequired(true)
        .addChoice("yes", "yes")
        .addChoice("no", "no")
    )
    .addStringOption((option) =>
      option
        .setName("friday")
        .setDescription("is this day booked?")
        .setRequired(true)
        .addChoice("yes", "yes")
        .addChoice("no", "no")
    ),
  async execute(interaction) {
    const exampleEmbed = new MessageEmbed()
      .setTitle("Badminton!!!")
      .setThumbnail(
        "https://revoltiplay.cl/wp-content/uploads/2021/08/2c2b95db-66b2-4829-a49e-6f93737b5f54.jpg"
      )
      .setDescription(
        "Let's get some exercise in and SMASH! Shoes recommended, but not necessary!"
      )
      .setFooter(
        "Powered by Janet",
        "https://pbs.twimg.com/profile_images/1091599174217347077/TnoGbH9h_400x400.jpg"
      )

    let schedule = [
      interaction.options.getString("monday"),
      interaction.options.getString("tuesday"),
      interaction.options.getString("wednesday"),
      interaction.options.getString("thursday"),
      interaction.options.getString("friday"),
    ]

    let emojis = [
      ":red_circle:",
      ":orange_circle:",
      ":yellow_circle:",
      ":green_circle:",
      ":blue_circle:",
    ]

    console.log(schedule)

    const message = await interaction.reply({
      embeds: [exampleEmbed],
      fetchReply: true,
    })

    for (let i = 0; i < schedule.length; i++) {
      if (schedule[i] == "yes") {
        try {
          await message.react(emojis[i])
        } catch (error) {
          console.error("oopsies:", error)
        }
      }
    }
  },
}
