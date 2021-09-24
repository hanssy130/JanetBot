const { SlashCommandBuilder } = require("@discordjs/builders")
const { Client, Intents, MessageEmbed } = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("baddy")
    .setDescription("setup days when badminton is booked")
    .addStringOption((option) =>
      option
        .setName("sunday")
        .setDescription("is this day booked?")
        .addChoice("yes", "yes")
    )
    .addStringOption((option) =>
      option
        .setName("monday")
        .setDescription("is this day booked?")
        .addChoice("yes", "yes")
    )
    .addStringOption((option) =>
      option
        .setName("tuesday")
        .setDescription("is this day booked?")
        .addChoice("yes", "yes")
    )
    .addStringOption((option) =>
      option
        .setName("wednesday")
        .setDescription("is this day booked?")
        .addChoice("yes", "yes")
    )
    .addStringOption((option) =>
      option
        .setName("thursday")
        .setDescription("is this day booked?")
        .addChoice("yes", "yes")
    )
    .addStringOption((option) =>
      option
        .setName("friday")
        .setDescription("is this day booked?")
        .addChoice("yes", "yes")
    )
    .addStringOption((option) =>
      option
        .setName("saturday")
        .setDescription("is this day booked?")
        .addChoice("yes", "saturday")
    ),
  async execute(interaction) {
    let emojis = [
      ":red_circle:",
      ":orange_circle:",
      ":yellow_circle:",
      ":green_circle:",
      ":blue_circle:",
    ]
    const exampleEmbed = new MessageEmbed()
      .setTitle("Badminton!!!")
      .setThumbnail(
        "https://revoltiplay.cl/wp-content/uploads/2021/08/2c2b95db-66b2-4829-a49e-6f93737b5f54.jpg"
      )
      .setDescription(
        "Let's get some exercise in and SMASH! \nShoes recommended, but not necessary!"
      )
      .setFooter(
        "Powered by Janet",
        "https://pbs.twimg.com/profile_images/1091599174217347077/TnoGbH9h_400x400.jpg"
      )
      .addFields(
        { name: "Sunday", value: ":white_circle:", inline: true },
        { name: "Monday", value: ":red_circle:", inline: true },
        { name: "Tuesday", value: ":orange_circle:", inline: true },
        { name: "Wednesday", value: ":yellow_circle:", inline: true },
        { name: "Thursday", value: ":green_circle:", inline: true },
        { name: "Friday", value: ":blue_circle:", inline: true },
        { name: "Saturday", value: ":purple_circle:", inline: true }
      )

    let schedule = [
      interaction.options.getString("sunday"),
      interaction.options.getString("monday"),
      interaction.options.getString("tuesday"),
      interaction.options.getString("wednesday"),
      interaction.options.getString("thursday"),
      interaction.options.getString("friday"),
      interaction.options.getString("saturday"),
    ]

    console.log(schedule)

    const message = await interaction.reply({
      embeds: [exampleEmbed],
      fetchReply: true,
    })

    emojis = ["⚪", "🔴", "🟠", "🟡", "🟢", "🔵", "🟣", "⚫️"]

    for (let i = 0; i < schedule.length; i++) {
      if (schedule[i] != null) {
        try {
          await message.react(emojis[i])
        } catch (error) {
          console.error("oopsies:", error)
        }
      }
    }
  },
}
