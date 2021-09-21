const { SlashCommandBuilder } = require("@discordjs/builders")
const { Client, Intents, MessageEmbed } = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("planevent")
    .setDescription("Add an event to #gathering-details!")
    .addStringOption((option) =>
      option
        .setName("what")
        .setDescription("What we doing, bro?")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("where")
        .setDescription("Where we droppin', bro?")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("when").setDescription("When, bro?").setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("type")
        .setDescription("What kind of event is this?")
        .setRequired(true)
        .addChoice("Food", "food")
        .addChoice("Activity", "activity")
        .addChoice("Other", "other")
    )
    .addStringOption((option) =>
      option
        .setName("extra-details")
        .setDescription("add a link, extra details, or whatever")
    ),
  async execute(interaction) {
    const exampleEmbed = new MessageEmbed()
      .setTitle(interaction.options.getString("what"))
      .setThumbnail("https://i.imgur.com/AfFp7pu.png")
      .setURL(
        "https://www.google.com/calendar/render?action=TEMPLATE&text=" +
          interaction.options.getString("what").split(" ").join("+")
      )
      .addFields(
        {
          name: "Where",
          value: interaction.options.getString("where"),
          inline: true,
        },
        {
          name: "When",
          value: interaction.options.getString("when"),
          inline: true,
        }
      )
      .setFooter(
        "Powered by Janet",
        "https://pbs.twimg.com/profile_images/1091599174217347077/TnoGbH9h_400x400.jpg"
      )

    if (interaction.options.getString("extra-details")) {
      exampleEmbed.setDescription(
        interaction.options.getString("extra-details")
      )
    }

    exampleEmbed.setColor("#FFFFFF")

    if (interaction.options.getString("type") == "food") {
      exampleEmbed.setColor("#FEE75C")
      exampleEmbed.setThumbnail(
        "https://cdn.discordapp.com/attachments/674385755770060830/883434177675018291/PXL_20210903_185639547.jpg"
      )
    } else if (interaction.options.getString("type") == "activity") {
      exampleEmbed.setColor("#57F287")
      exampleEmbed.setThumbnail(
        "https://cdn.discordapp.com/attachments/674385755770060830/884506697303990382/unknown.png"
      )
    } else {
      exampleEmbed.setColor("#0099ff")
      exampleEmbed.setThumbnail("https://i.imgur.com/EyBkosg.jpg")
    }

    const message = await interaction.reply({
      embeds: [exampleEmbed],
      fetchReply: true,
    })
    try {
      await message.react("✅")
      await message.react("❌")
      await message.react("🤔")
    } catch (error) {
      console.error("oopsies:", error)
    }
  },
}
