
import fetch from 'node-fetch' 
let handler = async (m, { conn }) => {
let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let gata = [imagen1]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' š', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'š» š¦šš½š²šæ šš®šš®šš¼š-š š - šŖšµš®šššš½š½ ', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]
await conn.fetchBlocklist().then(async data => {
let txt = `š ššš¦š§š šš ššš¢š¤šØšššš¢š¦ : ššš¢šššš\n\n*Total :* ${data.length}\n\nā­āāā[ *${vs} š * ]āāāā¬£\n`
for (let i of data) {
txt += `āš« @${i.split("@")[0]}\n`
}
txt += "ā°āāāāāāāā¬£"
return conn.sendButton(m.chat, txt, `*Por favor no llame para evitar ser Bloqueado, Gracias.*\n\n*Please do not call to avoid being Blocked, Thank you.*\n\n` + wm, null, [ 
['š  š š” šØ āļø', '/menu']], m, { mentions: await conn.parseMention(txt) })
}).catch(err => {
console.log(err);
return conn.sendButton(m.chat, `${rg}šš¼šæšš šš¼ šššæš š½šššššš¼šæš\n\nšš ššš šš¼š š½ššš š½ššš¾šššæ`, wm, gata, [
['š  š š” šØ āļø', '/menu']], m, dos.getRandom())
})} 
handler.command = ['bloqueados', 'bloqueadoslista', 'listablock', 'blocklist', 'listblock', 'listabloqueados'] 

export default handler
