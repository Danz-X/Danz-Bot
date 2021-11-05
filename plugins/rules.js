let handler = async m => m.reply(`
*RULES BAGI PENGGUNA BOT*
    
➤ DiLarang Spam Saat Menggunakan Bot, Mentang Mentang Gratis Diborong semua.
➤ Call/VC Bot Auto Block.
➤ Jangan Call/VC Bot Kalau Tidak aktif.
➤ Bot tidak selalu aktif 24 jam, jadi tergantung kalau ownernya lagi ada waktu botnya juga on.

*Konsekuensi Bila Melanggar Rules*
Bot Akan Memblokir Kamu Atau Keluar Dari Grup Yang Kamu Kelola.
━━━━━━━[ *PENTING!* ]━━━━━━━━
*➤ Kami tidak pernah meminta anda untuk* berdonasi! ingin donasi chat owner
*➤ Kami tidak menyimpan gambar, video,  audio, dan dokumen yang anda kirim*
*➤ Kami tidak akan pernah meminta anda untukmemberikan informasi pribadi*
*➤ Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot*
*➤  Jika kamu menelpon bot Dan di block,Owner Tidak Bertanggung Jawab*
*➤ Apapun yang anda perintah pada bot ini , KAMI TIDAK AKAN BERTANGGUNG JAWAB*
━━━━━━━━━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['rules'] 
handler.tags = ['info'] 
handler.command = /^(rules)$/i

module.exports = handler