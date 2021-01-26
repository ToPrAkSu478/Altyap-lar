const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Komutlarım`)
.setDescription(`**\`Genel\`**
» \`${prefix}avatar\`: **Avatarınızı Atar**
» \`${prefix}say\`: **Üye Durum Grafiğini Gösterir**
» \`${prefix}kullanıcı-bilgi\`: **Etiketlediğin & Kendi Profilin Hakkında Bilgi Verir**

**\`Kayıt\`**
» \`${prefix}kayıt-yardım\`: **Belirtilen Kullanıcıyı Kayıt Edersiniz**

**\`Logo\`**
» \`${prefix}roket-logo\`: **Logo Yapar**
» \`${prefix}f-logo\`: **Logo Yapar**

**\`Gif\`**
» \`${prefix}couple\`: **Sevgili Gif i Atar**
» \`${prefix}women\`: **Kadın Gif i Atar**
» \`${prefix}man\`: **Adam Gif i Atar**
» \`${prefix}baby\`: **Bebek Gif i Atar**

**\`Eylence\`**
» \`${prefix}aykut-elmas\`: **Aykut Elmas Sözü Atar**
» \`${prefix}dizi-öner\`: **Güzel Bir Dizi Önerir**
» \`${prefix}deprem-bilgi\`: **Depreme Yakalanan Herkese Allah Sabir Versin Amin**

**\`Sunucu-Patlama-Koruma\`**
» \`${prefix}anti-raid\`: **Sunucuyu Patlamadan Korur**

**\`Yetkili\`**
» \`${prefix}unban <user>\`: **Banı Kaldırır**
» \`${prefix}ban <user>\`: **Banlar**
» \`${prefix}prefix\`: **Sunucudaki Prefixi Değiştirir**
» \`${prefix}mute <user>\`: **Belirtilen Kullanıcıya Mute Atar**
» \`${prefix}temizle/sil <0-100>\`: **Belirtilen Miktarda Mesajı Siler**
» \`${prefix}sohbet-aç/kapat\`: **Sohbet Aç/Kapat**
» \`${prefix}kurallar\`: **Hazır Kurallar Metni Atar**`)

.setThumbnail("https://cdn.discordapp.com/attachments/785821149580754954/786124655085748264/766653460988428308.gif")
.setTimestamp()
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'yardım kodu.',
  usage: 'yardım'
};