const TelegramApi = require('node-telegram-bot-api')
const {toolsOptions} = require('./options')

const token= '5967388146:AAFZNnyJQcrUKalil0p5yoyGKNNIOUzCH1M'
const bot = new TelegramApi(token, {polling:true})

bot.setMyCommands([{command:'/start',description:'Начальное приветствие'},{command:'/info', description:'Информация'}])
bot.on('message',msg=>{
    const text = msg.text
    const chatId= msg.chat.id
    if(text.startsWith('/start')){
        bot.sendMessage(chatId, 'Добро пожаловать в телеграм бот Test')
        let reffer = Number(msg.text.split('/start')[1]);
        console.log(reffer);
    }
    if(text ==='/info'){
        bot.sendMessage(chatId, "тебя зовут "+ msg.from.first_name +" "+ msg.from.last_name, toolsOptions)
    }
    if(text ==='откуда знаешь'){
        bot.sendMessage(chatId, "Бот знает Все")
    }
})
bot.on('callback_query', msg =>{
    const data = msg.data
    const chatId= msg.message.chat.id
    bot.sendMessage(chatId, "Выбранное значение " + data)

})