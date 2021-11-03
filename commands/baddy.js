const { SlashCommandBuilder } = require("@discordjs/builders")
const { Client, Intents, MessageEmbed } = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("baddy")
    .setDescription("setup days when badminton is booked")
    .addStringOption((option) =>
      option
        .setName("when")
        .setDescription("What time is the court booked?")
        .setRequired(true)
        .addChoice("4pm", "4pm")
        .addChoice("5pm", "5pm")
        .addChoice("6pm", "6pm")
        .addChoice("7pm", "7pm")
        .addChoice("8pm", "8pm")
    ),
  async execute(interaction) {
    const exampleEmbed = new MessageEmbed()
      .setTitle(
        "Badminton Today @ " + interaction.options.getString("when") + "!"
      )
      .setThumbnail(
        "https://revoltiplay.cl/wp-content/uploads/2021/08/2c2b95db-66b2-4829-a49e-6f93737b5f54.jpg"
      )
      .setDescription("Vote to come play! (max 4)\n")
      .setFooter(
        "Powered by Janet",
        "https://pbs.twimg.com/profile_images/1091599174217347077/TnoGbH9h_400x400.jpg"
      )

    const message = await interaction.reply({
      embeds: [exampleEmbed],
      fetchReply: true,
    })
    try {
      await message.react("✅")
      await message.react("❌")
    } catch (error) {
      console.error("oopsies:", error)
    }
  },
}
