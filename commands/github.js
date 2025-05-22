async function githubCommand(sock, chatId) {
    const repoInfo = `*🤖🅗🅤🅢🅢🅐🅘🅝 🅑🅞🅣*

*📂 GitHub Repository:*

None public
*📢 Official group:*
https://chat.whatsapp.com/GeA1sz74hLC1gETLXkg0cI

 ⭐ add personal group if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '',
                    newsletterName: '🅗🅤🅢🅢🅐🅘🅝 🅐🅗🅜🅔🅓',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 
