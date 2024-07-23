const TelegramBot = require('node-telegram-bot-api')
const dotenv = require('dotenv')
dotenv.config()

const bot = new TelegramBot(process.env.TOKEN, { polling: true })
module.exports = bot
