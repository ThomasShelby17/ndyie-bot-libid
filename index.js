/* ------------------------------ AVISO  ------------------------------

Reprodução, edição e outros estão autorizados MAS SEM REMOVER MEUS CRÉDITOS.
Caso remova, resulta na quebra da licença do mesmo, o que é um crime federal.
Plagiar meus comandos não te torna coder, vá estudar, não seja um ladrão miserável.
Levei meses nesse projeto e não paro de me empenhar em deixar todos felizes.
Obrigado a todos que me apoiam, que não roubam isso, que pegam e põem os créditos e... 

(Liberdade N° 0)
A liberdade de executar o programa 
para qualquer propósito.

(Liberdade N° 1)
A liberdade de estudar como o 
programa funciona e adaptá-lo
às suas necessidades.

(Liberdade N° 2)
A liberdade de redistribuir cópias 
de modo que voê possa ajudar
ao seu próximo.

(Liberdade N° 3)
A liberdade de aperfeiçoar o
programa é liberar os seus 
aperfeiçoamentos, de modo que
toda a comunidade se benefecie
deles.

//SE REPORTA ESSE VÍDEO E BOT SEM PERMISSÃO
//EU client VOU ATRAS DE VC, E BANIR SEU NÚMERO DO WHATS
//CUIDADO PARCEIRO!

* ------------------------------  Amo Vc  ------------------------------ */

/********** MÓDULOS NPM **********/
const fs = require('fs');
const imageToBase64 = require('image-to-base64');
const moment = require('moment-timezone');
const { exec, spawn } = require('child_process');
const request = require('request')
const fetc = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const lolis = require('lolis.life');
const loli = new lolis();
const speed = require('performance-now');
const cd = 4.32e+7 ;
const qrcode = require("qrcode-terminal");
const crypto = require('crypto');
const axios = require('axios').default;
const http = require('http');
const util = require('util');
const yts = require('yt-search')
const fetch = require('node-fetch')
const encodeUrl = require('encodeurl')
const googleImage = require('g-i-s')
const os = require('os');
const ggs = require('google-it')
const hx = require("hxz-api");

/********** ARQUIVOS **********/
const Exif = require('./base de dados/data/exif');
const exif = new Exif();
const { addMetadata } = require('./base de dados/lib/exif.js')
const { webp2gifFile } = require("./base de dados/lib/gif.js")
const { fetchJson } = require('./base de dados/lib/fetcher');
const { help } = require('./base de dados/database/help/help')
const { linguagem } = require('./base de dados/datauser/mess')
const { lirikLagu } = require('./base de dados/lib/lirik.js')
const {convertSticker} = require("./base de dados/lib/swm.js") 
const { mediafireDl } = require('./base de dados/lib/mediafire.js')
const {dafontDown,dafontSearch } = require('./base de dados/lib/dafont')
const totalhit = JSON.parse(fs.readFileSync('./base de dados/lib/totalcmd.json'))
const mundohentai = require('./base de dados/lib/mundohentai')

/********** ARQUIVOS NA NUVEM **********/
let sotoy = JSON.parse(fs.readFileSync('./base de dados/data/sotoy.json'))
let daily = JSON.parse(fs.readFileSync('./base de dados/data/diario.json'))
let prem = JSON.parse(fs.readFileSync('./base de dados/datauser/premium.json'));
let uang = JSON.parse(fs.readFileSync('./base de dados/datauser/uang.json'));
let ban = JSON.parse(fs.readFileSync('./base de dados/datauser/banned.json'));
let _level = JSON.parse(fs.readFileSync('./base de dados/datauser/level.json'));
let _registered = JSON.parse(fs.readFileSync('./base de dados/datauser/registered.json'));
let welcome = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/welcome.json'));
let antiflod = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/_antiflod.json'));
let mute = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/mute.json'));
let viewchat = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/viewchat.json'));
let _leveling = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/leveling.json'));
let antilink = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/antilink.json'));
let antifaker = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/antifaker.json'));
let palavrão = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/palavrão.json'));
let autconversa = JSON.parse(fs.readFileSync('./base de dados/database/arquivos/autconversa.json'));
let palavra = JSON.parse(fs.readFileSync('./base de dados/lib/palavras.json'))
let _informe = JSON.parse(fs.readFileSync('./base de dados/lib/informe.json'));
let _solicitar = JSON.parse(fs.readFileSync('./base de dados/lib/solicitar.json'));
img2 = fs.readFileSync("./base de dados/lib/bot/fotos/client_libid.jpg");
img3 = fs.readFileSync("./base de dados/lib/bot/fotos/login.mp4");

/********** CONFIGURAÇÕES **********/
const infos = JSON.parse(fs.readFileSync('./configure aqui.js'))
var {p, emoji_bot, SeuNome, OwnerNumber, NomeDoBot} = infos

/********** CONST, (N MEXA AQUI) **********/
const blocked = []; 
cdd = "480000" 
ll = "\`\`\`"
crtt = "Jogo da velha" 
baterai = 'não detectado'
charging = 'não detectado'
emoji_bot = ";-;"
//_NUMERO DO DONO DO BOT

/********** VCARD DO DONO **********/
const vcard = `BEGIN:VCARD\n`
+ `VERSION:3.0\n`
+ `FN:LIBIDGEL\n`
+ `ORG:Libid-BOT;\n` 
+ `TEL;type=CELL;type=VOICE;waid=5527997619163:+55 27 99761-9163\n` 
+ `END:VCARD`

//_TIC-TAC-TOE By: Resen
//const { addLimit, getLimit } = require('./database/lib/limit.js')// LIMITADOR, AGRADECIMENTOS: IRIS(kill), Resen
//const daily = JSON.parse(fs.readFileSync('./database/data/diario.json'))
const { ttthelp } = require('./database/ttt/TTTconfig/ttthelp');
const { tttme } = require('./database/ttt/TTTconfig/tttme');
//const infos = JSON.parse(fs.readFileSync('./database/data/settings.json'))
const tictactoe = JSON.parse(fs.readFileSync('./database/ttt/tictactoe.json'));
var tttset = require('./database/ttt/TTTconfig/tttset.json');
var esp = require('./database/ttt/TTTconfig/tttframe.json');

/********** WHATSAPP CONEXÃO **********/
const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, GroupSettingChange, MessageOptions, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, waChatKey, mentionedJid, processTime, ChatModification } = require('@adiwajshing/baileys');
const simple = require('./base de dados/lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)

/********** CORES **********/
const { color, bgcolor } = require('./base de dados/lib/color');

/********** ANTI FLOD **********/
const { isFiltered, addFilter } = require('./base de dados/lib/antispam')

/********** LIMIT TTT **********/
const { addLimit, getLimit } = require('./base de dados/lib/limit.js')
const { validmove, setGame } = require("tictactoe");
/********** FUCTION PLAY **********/
const { y2mateA, y2mateV } = require('./base de dados/lib/y2mate.js')

/********** CONSTS **********/
const { erroCmd, erroOwner, ts, semPremium} = require('./base de dados/lib/bot/arquivos/respon');

/********** FUNÇÕES **********/
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, banner2, start, info, success, close, log } = require('./base de dados/lib/functions');

/********** FUCTION LEVEL **********/
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab } = require('./base de dados/lib/leveling.js') 

/********** FUCTION TTT **********/
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./base de dados/lib/tictactoe.js')

/********** FUCTION REGISTRO **********/
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./base de dados/lib/register.js')

/********** FUCTION DINHEIRO **********/
const addATM = (sender, pushname) => {
const obj = {id: sender, nome: pushname, uang : 0}
uang.push(obj)
fs.writeFileSync('./base de dados/datauser/uang.json', JSON.stringify(uang))
}

/********** FUCTION DINHEIRO **********/
const getNameDinheiro = (sender) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
return uang[position].nome
}
}

/********** FUCTION DINHEIRO **********/
const addKoinUser = (sender, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
uang[position].uang += amount
fs.writeFileSync('./base de dados/datauser/uang.json', JSON.stringify(uang))
}
}
   
/********** FUCTION DINHEIRO **********/
const checkATMuser = (sender) => {  
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
return uang[position].uang
}
}

/********** FUCTION DINHEIRO **********/
const confirmATM = (sender, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
uang[position].uang -= amount
fs.writeFileSync('./base de dados/datauser/uang.json', JSON.stringify(uang))
}
}

//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
if (
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
) {
return true
} else {
return false
}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
if (
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
) {
return true
} else {
return false
}
}

//TESTE PARA EMPATE
const Tie = () => {
if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
return true
} else {
return false
}
}

const IA = () => {
if (WinnerX() || WinnerO() || Tie()) {
tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
tttset.reActivate1 = "off"
IAmove1()
//JOGADAS PROGRAMADAS ABAIXO
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.a1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.a2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.a3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.b1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "??" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "??" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "??" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.b2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.b3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.c1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "??" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
tttset.reActivate1 = "off"
esp.c2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "??" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "??" && esp.a3 == "??" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.c3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
//PRIORIZAR CANTOS E CENTRO
tttset.reActivate1 = "off"
while (tttset.reActivate3 == "on") {
priorityC()
}
tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
} else if (tttset.tttdifficulty == "HARD" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
//HARD
tttset.reActivate1 = "off"
IAmove1()
} else if (tttset.tttdifficulty == "NORMAL" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="??"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
//NORMAL
tttset.reActivate1 = "off"
let randomNORMAL = Math.floor(Math.random() * 3)
if (randomNORMAL == 0 || randomNORMAL == 1) {
IAmove1()
} else {
while (tttset.reActivate2 == "on") {
IAalter()
}
}
tttset.reActivate2 = "on"
} else {
//EASY / RANDOM
let randomALL = Math.floor(Math.random() * 9)
switch (randomALL) {
case 0:
if (esp.a1 == "🔲") {
tttset.reActivate1 = "off"
esp.a1 = "⭕"
}
break
case 1:
if (esp.a2 == "🔲") {
tttset.reActivate1 = "off"
esp.a2 = "⭕"
}
break
case 2:
if (esp.a3 == "🔲") {
tttset.reActivate1 = "off"
esp.a3 = "⭕"
}
break
case 3:
if (esp.b1 == "🔲") {
tttset.reActivate1 = "off"
esp.b1 = "⭕"
}
break
case 4:
if (esp.b2 == "🔲") {
tttset.reActivate1 = "off"
esp.b2 = "⭕"
}
break
case 5:
if (esp.b3 == "🔲") {
tttset.reActivate1 = "off"
esp.b3 = "⭕"
}
break
case 6:
if (esp.c1 == "🔲") {
tttset.reActivate1 = "off"
esp.c1 = "⭕"
}
break
case 7:
if (esp.c2 == "🔲") {
tttset.reActivate1 = "off"
esp.c2 = "⭕"
}
break
case 8:
if (esp.c3 == "🔲") {
tttset.reActivate1 = "off"
esp.c3 = "⭕"
}
break
}
}
}

const IAmove1 = () => {
//JOGADA PARA VITÓRIA
if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
esp.a3 = "⭕"
} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
esp.a2 = "⭕"
} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
esp.a1 = "⭕"
} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
esp.b3 = "⭕"
} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
esp.b2 = "⭕"
} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
esp.b1 = "⭕"
} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
esp.c2 = "⭕"
} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
esp.c1 = "⭕"
} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
esp.b1 = "⭕"
} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
esp.a1 = "⭕"
} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
esp.c2 = "⭕"
} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
esp.b2 = "⭕"
} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
esp.a2 = "⭕"
} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
esp.b3 = "⭕"
} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
esp.a3 = "⭕"
} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
esp.b2 = "⭕"
} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
esp.a1 = "⭕"
} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
esp.b2 = "⭕"
} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
esp.a3 = "⭕"
//JOGADA PARA BLOQUEIO
} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
esp.a3 = "⭕"
} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
esp.a2 = "⭕"
} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
esp.a1 = "⭕"
} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
esp.b3 = "⭕"
} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
esp.b2 = "⭕"
} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
esp.b1 = "⭕"
} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
esp.c2 = "⭕"
} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
esp.c1 = "⭕"
} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
esp.b1 = "⭕"
} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
esp.a1 = "⭕"
} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
esp.c2 = "⭕"
} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
esp.b2 = "⭕"
} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
esp.a2 = "⭕"
} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
esp.b3 = "⭕"
} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
esp.a3 = "⭕"
} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
esp.b2 = "⭕"
} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
esp.a1 = "⭕"
} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
esp.b2 = "⭕"
} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
esp.a3 = "⭕"
}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
let randomALTER = Math.floor(Math.random() * 9)
switch (randomALTER) {
case 0:
if (esp.a1 == "🔲") {
tttset.reActivate2 = "off"
esp.a1 = "⭕"
}
break
case 1:
if (esp.a2 == "🔲") {
tttset.reActivate2 = "off"
esp.a2 = "⭕"
}
break
case 2:
if (esp.a3 == "🔲") {
tttset.reActivate2 = "off"
esp.a3 = "⭕"
}
break
case 3:
if (esp.b1 == "🔲") {
tttset.reActivate2 = "off"
esp.b1 = "⭕"
}
break
case 4:
if (esp.b2 == "🔲") {
tttset.reActivate2 = "off"
esp.b2 = "⭕"
}
break
case 5:
if (esp.b3 == "🔲") {
tttset.reActivate2 = "off"
esp.b3 = "⭕"
}
break
case 6:
if (esp.c1 == "🔲") {
tttset.reActivate2 = "off"
esp.c1 = "⭕"
}
break
case 7:
if (esp.c2 == "🔲") {
tttset.reActivate2 = "off"
esp.c2 = "⭕"
}
break
case 8:
if (esp.c3 == "🔲") {
tttset.reActivate2 = "off"
esp.c3 = "⭕"
}
break
}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
let randomPriC = Math.floor(Math.random() * 5)
switch (randomPriC) {
case 0 :
if (esp.a1 == "🔲") {
tttset.reActivate3 = "off"
esp.a1 = "⭕"
}
break
case 1 :
if (esp.a3 == "🔲") {
tttset.reActivate3 = "off"
esp.a3 = "⭕"
}
break
case 2 :
if (esp.b2 == "🔲") {
tttset.reActivate3 = "off"
esp.b2 = "⭕"
}
break
case 3 :
if (esp.c1 == "🔲") {
tttset.reActivate3 = "off"
esp.c1 = "⭕"
}
break
case 4 :
if (esp.c3 == "??") {
tttset.reActivate3 = "off"
esp.c3 = "⭕"
}
break
}
}

/********** FUCTION TEMPORIZADO **********/ 
function temporizado(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas ${pad(minutes)} minutos ${pad(seconds)} Segundos`
}

function horaOn(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas`
}
/********** CONEXÃO DO QR CODE **********/
async function starts() {
const client = new WAConnection()
client.logger.level = 'warn'
client.version = [3, 3234, 9];
console.log(banner.string)
console.log(banner2.string)
client.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color('escaneie o código qr'))
})
fs.existsSync('./qr.json') && client.loadAuthInfo('./qr.json')
client.on('connecting', () => {
start('2', ' ')
})
client.on('open', () => {
success('2', "Libid-BOT Conectada")
})

await client.connect({ timeoutMs: 2400 * 1000 });
fs.writeFileSync('./qr.json',JSON.stringify(client.base64EncodedAuthInfo(), null, "\t"));

/********** WELCOME (BEM VINDO) **********/
var ase = new Date();
var tempoByclient = ase.getHours();
switch(tempoByclient){
case 0: tempoByclient = `Boa noite`; break;
case 1: tempoByclient = `Boa noite`; break;
case 2: tempoByclient = `Boa noite`; break;
case 3: tempoByclient = `Bom Dia`; break;
case 4: tempoByclient = `Bom Dia`; break;
case 5: tempoByclient = `Bom Dia`; break;
case 6: tempoByclient = `Bom Dia`; break;
case 7: tempoByclient = `Bom Dia`; break;
case 8: tempoByclient = `Bom Dia`; break;
case 9: tempoByclient = `Bom Dia`; break;
case 10: tempoByclient = `Bom Dia`; break;
case 11: tempoByclient = `Boa tarde`; break;
case 12: tempoByclient = `Boa tarde`; break;
case 13: tempoByclient = `Boa tarde`; break;
case 14: tempoByclient = `Boa tarde`; break;
case 15: tempoByclient = `Boa tarde`; break;
case 16: tempoByclient = `Boa tarde`; break;
case 17: tempoByclient = `Boa tarde`; break;
case 18: tempoByclient = `Boa noite`; break;
case 19: tempoByclient = `Boa noite`; break;
case 20: tempoByclient = `Boa noite`; break;
case 21: tempoByclient = `Boa noite`; break;
case 22: tempoByclient = `Boa noite`; break;
case 23: tempoByclient = `Boa noite`; break;
}
var tempoByclient = '' + tempoByclient;

//WELCOME COM BOTÃO CRIPTOGRAFADO
function _0x3600(){const _0x403b8e=['imageMessage','75TLjXZi','promote','http://hadi-api.herokuapp.com/api/card/promote?nama=Promover\x20Detectado&member=@','6288213840883-1616169743@g.us','「\x20*[❗]\x20GRUPO\x20ABERTO*\x20」\x0a\x0a_O\x20grupo\x20foi\x20aberto\x20pelo\x20administrador_\x0a_Agora\x20todos\x20os\x20membros\x20podem\x20reply\x20mensagens_','「\x20*❗GRUPO\x20ABERTO❗*\x20」','jid','prepareMessage','remove','\x20saiu\x20do\x20grupo...\x20bye\x20bye👋','Saiu\x20🤨','23093750aGFJYT','「\x20*[❗]\x20GRUPO\x20FECHADO*\x20」\x0a\x0a_O\x20grupo\x20foi\x20fechado\x20pelo\x20administrador_\x0a_Agora,\x20apenas\x20administradores\x20podem\x20reply\x20mensagens_','subject','includes','Banindo\x20O\x20Número\x20Fake...','&pesan=','0@s.whatsapp.net','ephemeralMessage','@c.us','desc','image','announce','2736016VPgEFT','true','readFileSync','false','sticker','floor','red','mememteeeekkeke','2qLKslD','startsWith','1646349Evlnos','PHOTO','3040KCboEV','.\x0a\x0aBem\x20vindo(a)\x20ao\x0a','descOwner','guei','O\x20integrante\x20@','⚠️\x20*MEMBRO\x20PROMOVIDO*\x20🖐️🤨\x0a\x0a*Novo\x20Admin:*\x20@','participants','log','&bg=https://bit.ly/walpamikel','white','508187FvCNjo','action','2819979gBoPan','3899tdtRru','group-participants-update','.\x0a\x0aBem\x20vindo(a)\x20ao\x20:\x20','getProfilePicture','Error\x20:\x20%s','message','./base\x20de\x20dados/database/figurinhas/welcomeByclient1.webp','Ξ\x20Registrar','&pp=','Opae\x20boy,\x20de\x20boa?\x20._.','demote','split','👻\x20DETECTE\x20PROMOTE\x20🌙','sendMessage','Fala\x20alguma\x20coisa,\x20@','\x0a\x0a👾\x20•𝑬𝑵𝑻𝑹𝑶𝑼\x20𝑺𝑬\x20𝑨𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•\x0a📸\x20•F𝜣T𝜣\x0a👻\x20•N𝜣ME\x0a📌\x20•CID∆DE\x0a🗓️\x20•ID∆DE\x0a⚠️\x20•LEI∆\x20∆S\x20REGR∆S\x20D𝜣\x20GRUP𝜣\x0a\x0a*APROVEITE\x20O\x20GRUPO!*','Adeus\x20@','text',',\x20você\x20foi\x20ou\x20seria\x20um\x20excelente\x20~Gado\x20Top\x20de\x20Linha~\x20amigo(a)\x20e\x20membro.','add','5832aNTizd','.png','「\x20*❗DESCRIÇÃO\x20ALTERADA❗*\x20」','groupMetadata','random','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','buttonsMessage','group-update','「\x20*❗GRUPO\x20FECHADO❗*\x20」','length'];_0x3600=function(){return _0x403b8e;};return _0x3600();}function _0x1f42(_0x133b2f,_0x10b014){const _0x360062=_0x3600();return _0x1f42=function(_0x1f42ce,_0x1f0e4d){_0x1f42ce=_0x1f42ce-0x1b5;let _0x402610=_0x360062[_0x1f42ce];return _0x402610;},_0x1f42(_0x133b2f,_0x10b014);}const _0x24e55f=_0x1f42;(function(_0xb3ae6,_0x5a28bf){const _0xd40999=_0x1f42,_0x58aeba=_0xb3ae6();while(!![]){try{const _0x10f8ef=-parseInt(_0xd40999(0x1dd))/0x1+parseInt(_0xd40999(0x1cf))/0x2*(-parseInt(_0xd40999(0x1d1))/0x3)+-parseInt(_0xd40999(0x1c7))/0x4+-parseInt(_0xd40999(0x1ff))/0x5*(-parseInt(_0xd40999(0x1f4))/0x6)+-parseInt(_0xd40999(0x1e0))/0x7*(-parseInt(_0xd40999(0x1d3))/0x8)+-parseInt(_0xd40999(0x1df))/0x9+parseInt(_0xd40999(0x1bb))/0xa;if(_0x10f8ef===_0x5a28bf)break;else _0x58aeba['push'](_0x58aeba['shift']());}catch(_0x517b45){_0x58aeba['push'](_0x58aeba['shift']());}}}(_0x3600,0x7581e),client['on'](_0x24e55f(0x1e1),async _0x303a3f=>{const _0x1103d1=_0x24e55f;if(antifaker[_0x1103d1(0x1be)](_0x303a3f[_0x1103d1(0x1b6)])){const _0x3564bd=await client[_0x1103d1(0x1f7)](_0x303a3f['jid']);_0x303a3f[_0x1103d1(0x1de)]==_0x1103d1(0x1f3)&&(num=_0x303a3f[_0x1103d1(0x1d9)][0x0],!num[_0x1103d1(0x1eb)]('@')[0x0][_0x1103d1(0x1d0)](0x37)&&(client[_0x1103d1(0x1ed)](_0x3564bd['id'],'Números\x20fake\x20não\x20são\x20permitidos\x20nesse\x20grupo️️',MessageType['text']),setTimeout(async function(){const _0x2e3b3e=_0x1103d1;console[_0x2e3b3e(0x1da)](color('[',_0x2e3b3e(0x1dc)),color('!',_0x2e3b3e(0x1cd)),color(']',_0x2e3b3e(0x1dc)),color(_0x2e3b3e(0x1bf),'red')),client['groupRemove'](_0x3564bd['id'],[num]);},0x1388)));}const _0x30c688=await client[_0x1103d1(0x1f7)](_0x303a3f[_0x1103d1(0x1b6)]);if(_0x303a3f[_0x1103d1(0x1de)]==_0x1103d1(0x200)){num=_0x303a3f['participants'][0x0];try{ppimg=await client[_0x1103d1(0x1e3)](num[_0x1103d1(0x1eb)]('@')[0x0]+_0x1103d1(0x1c3));}catch{ppimg=_0x1103d1(0x1f9);}let _0x543f70=await getBuffer(_0x1103d1(0x201)+num[_0x1103d1(0x1eb)]('@')[0x0]+_0x1103d1(0x1c0)+encodeURI(_0x30c688[_0x1103d1(0x1bd)])+_0x1103d1(0x1e8)+ppimg+'&bg=https://bit.ly/walpamikel');var _0x3ba8e0=await client[_0x1103d1(0x1b7)](_0x30c688['id'],_0x543f70,MessageType[_0x1103d1(0x1c5)],{'thumbnail':null}),_0x34e080=_0x3ba8e0['message'][_0x1103d1(0x1c2)]?_0x3ba8e0[_0x1103d1(0x1e5)][_0x1103d1(0x1c2)]:_0x3ba8e0;const _0x332bb9=[{'buttonId':_0x1103d1(0x1d6),'buttonText':{'displayText':_0x1103d1(0x1ec)},'type':0x1}],_0x1f80e1={'contentText':_0x1103d1(0x1d8)+num[_0x1103d1(0x1eb)]('@')[0x0],'buttons':_0x332bb9,'headerType':0x4,'imageMessage':_0x34e080[_0x1103d1(0x1e5)][_0x1103d1(0x1fe)]};client[_0x1103d1(0x1ed)](_0x30c688['id'],_0x1f80e1,MessageType[_0x1103d1(0x1fa)],{'contextInfo':{'mentionedJid':[num]}});}else{if(_0x303a3f[_0x1103d1(0x1de)]==_0x1103d1(0x1ea)){num=_0x303a3f['participants'][0x0];try{ppimg=await client[_0x1103d1(0x1e3)](num[_0x1103d1(0x1eb)]('@')[0x0]+_0x1103d1(0x1c3));}catch{ppimg=_0x1103d1(0x1f9);}let _0x264770=await getBuffer('http://hadi-api.herokuapp.com/api/card/demote?nama=Rebaixar\x20Detectado&member=@'+num[_0x1103d1(0x1eb)]('@')[0x0]+_0x1103d1(0x1c0)+encodeURI(_0x30c688['subject'])+_0x1103d1(0x1e8)+ppimg+_0x1103d1(0x1db));var _0x3ba8e0=await client[_0x1103d1(0x1b7)](_0x30c688['id'],_0x264770,MessageType['image'],{'thumbnail':null}),_0x34e080=_0x3ba8e0['message']['ephemeralMessage']?_0x3ba8e0[_0x1103d1(0x1e5)][_0x1103d1(0x1c2)]:_0x3ba8e0;const _0x1d497c=[{'buttonId':'guei','buttonText':{'displayText':'👻\x20DETECTE\x20DEMOTE\x20🌙'},'type':0x1}],_0x1da96d={'contentText':'⚠️\x20*MEMBRO\x20REBAIXADO*\x20🖐️🤨\x0a\x0a*Perdeu\x20Admin:*\x20@'+num[_0x1103d1(0x1eb)]('@')[0x0],'buttons':_0x1d497c,'headerType':0x4,'imageMessage':_0x34e080[_0x1103d1(0x1e5)][_0x1103d1(0x1fe)]};client[_0x1103d1(0x1ed)](_0x30c688['id'],_0x1da96d,MessageType[_0x1103d1(0x1fa)],{'contextInfo':{'mentionedJid':[num]}});}}if(!welcome['includes'](_0x303a3f[_0x1103d1(0x1b6)]))return;try{const _0x279edb=await client[_0x1103d1(0x1f7)](_0x303a3f[_0x1103d1(0x1b6)]);console[_0x1103d1(0x1da)](_0x303a3f);if(_0x303a3f[_0x1103d1(0x1de)]==_0x1103d1(0x1f3)){num=_0x303a3f[_0x1103d1(0x1d9)][0x0];try{ppimg=await client[_0x1103d1(0x1e3)](_0x303a3f[_0x1103d1(0x1d9)][0x0][_0x1103d1(0x1eb)]('@')[0x0]+_0x1103d1(0x1c3));}catch{ppimg='https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';}mett=['1','2','3'],res=mett[Math[_0x1103d1(0x1cc)](Math['random']()*mett[_0x1103d1(0x1fd)])];if(res=='1'){let _0x3d0f8a=await getBuffer(ppimg);const _0x7265b4=await client[_0x1103d1(0x1b7)](_0x279edb['id'],_0x3d0f8a,MessageType[_0x1103d1(0x1c5)],{'thumbnail':null});let _0x25b4e2=_0x7265b4['message'][_0x1103d1(0x1c2)]?_0x7265b4[_0x1103d1(0x1e5)][_0x1103d1(0x1c2)]:_0x7265b4;const _0x363823=[{'buttonId':'Rg','buttonText':{'displayText':_0x1103d1(0x1e7)},'type':0x1}],_0x13badb={'contentText':tempoByclient+',\x20@'+num[_0x1103d1(0x1eb)]('@')[0x0]+_0x1103d1(0x1e2)+_0x279edb[_0x1103d1(0x1bd)],'footerText':_0x1103d1(0x1e9),'buttons':_0x363823,'headerType':0x4,'imageMessage':_0x25b4e2[_0x1103d1(0x1e5)][_0x1103d1(0x1fe)]};client[_0x1103d1(0x1ed)](_0x279edb['id'],_0x13badb,MessageType[_0x1103d1(0x1fa)],{'contextInfo':{'mentionedJid':[num]}}),setTimeout(()=>{const _0x1d6694=_0x1103d1;result=fs[_0x1d6694(0x1c9)](_0x1d6694(0x1e6)),client[_0x1d6694(0x1ed)](_0x279edb['id'],result,MessageType[_0x1d6694(0x1cb)]);},0x3e8);}else{if(res=='2'){res=mett[Math[_0x1103d1(0x1cc)](Math[_0x1103d1(0x1f8)]()*mett[_0x1103d1(0x1fd)])];let _0x8ce492=await getBuffer(ppimg);const _0x10db3b=await client[_0x1103d1(0x1b7)](_0x279edb['id'],_0x8ce492,MessageType[_0x1103d1(0x1c5)],{'thumbnail':null});let _0x2e0b2f=_0x10db3b[_0x1103d1(0x1e5)][_0x1103d1(0x1c2)]?_0x10db3b['message'][_0x1103d1(0x1c2)]:_0x10db3b;const _0x40f8b3=[{'buttonId':'Rg','buttonText':{'displayText':_0x1103d1(0x1e7)},'type':0x1}],_0x37e316={'contentText':tempoByclient+',\x20@'+num[_0x1103d1(0x1eb)]('@')[0x0]+_0x1103d1(0x1d4)+_0x279edb[_0x1103d1(0x1bd)]+_0x1103d1(0x1ef),'footerText':_0x1103d1(0x1e9),'buttons':_0x40f8b3,'headerType':0x4,'imageMessage':_0x2e0b2f[_0x1103d1(0x1e5)][_0x1103d1(0x1fe)]};client[_0x1103d1(0x1ed)](_0x279edb['id'],_0x37e316,MessageType[_0x1103d1(0x1fa)],{'contextInfo':{'mentionedJid':[num]}}),setTimeout(()=>{const _0x4ef127=_0x1103d1;client[_0x4ef127(0x1ed)](_0x279edb['id'],_0x4ef127(0x1ee)+num[_0x4ef127(0x1eb)]('@')[0x0],MessageType[_0x4ef127(0x1f1)],{'contextInfo':{'mentionedJid':[num]}});},0x3e8);}else{if(res=='3'){res=mett[Math[_0x1103d1(0x1cc)](Math[_0x1103d1(0x1f8)]()*mett['length'])],fotosAnime=['1','2','3','4','5'],ramdomRes=fotosAnime[Math[_0x1103d1(0x1cc)](Math[_0x1103d1(0x1f8)]()*fotosAnime['length'])];let _0xa52bc8=await fs['readFileSync']('./base\x20de\x20dados/lib/bot/fotos/animeByclient'+ramdomRes+_0x1103d1(0x1f5));const _0x1a1b33=await client[_0x1103d1(0x1b7)](_0x279edb['id'],_0xa52bc8,MessageType[_0x1103d1(0x1c5)],{'thumbnail':null});let _0x2a86e8=_0x1a1b33[_0x1103d1(0x1e5)][_0x1103d1(0x1c2)]?_0x1a1b33[_0x1103d1(0x1e5)][_0x1103d1(0x1c2)]:_0x1a1b33;const _0x1cfbec=[{'buttonId':'Rg','buttonText':{'displayText':_0x1103d1(0x1e7)},'type':0x1}],_0xe16284={'contentText':tempoByclient+'\x20@'+num['split']('@')[0x0]+'\x20...\x20Para\x20permanecer\x20neste\x20grupo,\x20veja\x20a\x20imagem\x20acima\x20e\x20diga\x20qual\x20é\x20o\x20nome\x20do\x20anime!\x20🤝🏼','footerText':_0x1103d1(0x1e9),'buttons':_0x1cfbec,'headerType':0x4,'imageMessage':_0x2a86e8[_0x1103d1(0x1e5)][_0x1103d1(0x1fe)]};client[_0x1103d1(0x1ed)](_0x279edb['id'],_0xe16284,MessageType[_0x1103d1(0x1fa)],{'contextInfo':{'mentionedJid':[num]}});}}}}else{if(_0x303a3f[_0x1103d1(0x1de)]==_0x1103d1(0x1b8)){num=_0x303a3f[_0x1103d1(0x1d9)][0x0];try{ppimg=await client[_0x1103d1(0x1e3)](_0x303a3f[_0x1103d1(0x1d9)][0x0]['split']('@')[0x0]+_0x1103d1(0x1c3));}catch{ppimg=_0x1103d1(0x1f9);}const _0x53bfae=[_0x1103d1(0x1d7)+num[_0x1103d1(0x1eb)]('@')[0x0]+_0x1103d1(0x1b9),_0x1103d1(0x1f0)+num[_0x1103d1(0x1eb)]('@')[0x0]+_0x1103d1(0x1f2)];var _0x1be571=_0x53bfae[Math['floor'](Math[_0x1103d1(0x1f8)]()*_0x53bfae[_0x1103d1(0x1fd)])];num=_0x303a3f[_0x1103d1(0x1d9)][0x0];let _0x543c50=await getBuffer(ppimg);const _0x298fa7=await client[_0x1103d1(0x1b7)](_0x279edb['id'],_0x543c50,MessageType[_0x1103d1(0x1c5)],{'thumbnail':null});let _0x1ef250=_0x298fa7[_0x1103d1(0x1e5)][_0x1103d1(0x1c2)]?_0x298fa7[_0x1103d1(0x1e5)][_0x1103d1(0x1c2)]:_0x298fa7;const _0x202923=[{'buttonId':'k','buttonText':{'displayText':_0x1103d1(0x1ba)},'type':0x1}],_0x49f5af={'contentText':''+_0x1be571,'footerText':'Press\x20F\x20chat\x20👋😙._.','buttons':_0x202923,'headerType':0x4,'imageMessage':_0x1ef250['message'][_0x1103d1(0x1fe)]};client[_0x1103d1(0x1ed)](_0x279edb['id'],_0x49f5af,MessageType['buttonsMessage'],{'contextInfo':{'mentionedJid':[num]}});}}}catch(_0x26e0a7){console['log'](_0x1103d1(0x1e4),color(_0x26e0a7,_0x1103d1(0x1cd)));}}),client['on'](_0x24e55f(0x1fb),async _0x552428=>{const _0x2e46e6=_0x24e55f;falfa={'key':{'fromMe':![],'participant':_0x2e46e6(0x1c1),'remoteJid':_0x2e46e6(0x1c1)},'message':{'groupInviteMessage':{'groupJid':_0x2e46e6(0x202),'inviteCode':_0x2e46e6(0x1ce),'groupName':'Lolizita','caption':''+NomeDoBot}}};const _0x1f37c5={'text':'oi','forwardingScore':0x3b9aca00,'externalAdenviar':{'title':_0x2e46e6(0x1b5),'body':'','previewType':'PHOTO','thumbnailUrl':'','thumbnail':img2}},_0x4867f3={'text':'oi','forwardingScore':0x3b9aca00,'externalAdenviar':{'title':_0x2e46e6(0x1fc),'body':'','previewType':'PHOTO','thumbnailUrl':'','thumbnail':img2}},_0x1c1c35={'text':'oi','forwardingScore':0x3b9aca00,'externalAdenviar':{'title':_0x2e46e6(0x1f6),'body':'','previewType':_0x2e46e6(0x1d2),'thumbnailUrl':'','thumbnail':img2}};metdata=await client[_0x2e46e6(0x1f7)](_0x552428['jid']);if(_0x552428[_0x2e46e6(0x1c6)]==_0x2e46e6(0x1ca))teks=_0x2e46e6(0x203),client[_0x2e46e6(0x1ed)](metdata['id'],teks,MessageType['text'],{'contextInfo':_0x1f37c5});else{if(_0x552428[_0x2e46e6(0x1c6)]==_0x2e46e6(0x1c8))teks=_0x2e46e6(0x1bc),client[_0x2e46e6(0x1ed)](metdata['id'],teks,MessageType['text'],{'contextInfo':_0x4867f3}),console[_0x2e46e6(0x1da)](_0x552428);else!_0x552428[_0x2e46e6(0x1c4)]==''&&(teks='「\x20*[❗]\x20DESCRIÇÃO\x20DO\x20GRUPO\x20ALTERADA*\x20」\x0a\x0aA\x20descrição\x20do\x20grupo\x20foi\x20alterada\x20pelo\x20administrador\x20wa.me/'+_0x552428[_0x2e46e6(0x1d5)][_0x2e46e6(0x1eb)]('@')[0x0]+'\x0a•\x20Nova\x20Descrição\x20:\x20\x0a'+_0x552428[_0x2e46e6(0x1c4)],client['sendMessage'](metdata['id'],teks,MessageType['text'],{'contextInfo':_0x1c1c35}),console[_0x2e46e6(0x1da)](_0x552428));}}));
  
/********** FUCTION ANTI CALL **********/
client.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m LIGAÇÃO DETECTADA LIGAÇÕES = BLOCK \x1b[1;37m]')
client.sendMessage(callerId, `${emoji_bot} Ligações = block`, MessageType.text)
setTimeout(async() => {
await client.blockUser(callerId, "add")
}, 3000)
})

/********** FUCTION BATERIA **********/
client.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
})
global.p
global.batrei = global.batrei ? global.batrei : []
client.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt(batteryLevelStr)
global.batrei.push(batterylevel)
})

/********** FUCTION BATERIA **********/
client.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
var baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
console.log(color('🔋Carga da bateria: ' + batterylevel+'%', "yellow"))
})

/************* LINGUAGEM ************/
client.on('chat-update', async (mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
m = simple.smsg(client, mek)
if (mek.key.fromMe) return 
global.p
global.blocked

/************** HORAS ************/
const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const speedB = moment.tz('America/Sao_Paulo').format('ss')
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const data = moment.tz('Asia/Jakarta').format('DD/MM')
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
const waktu = moment.tz('Asia/Jakarta').format('HHmmss')
const time3 = moment().tz('America/Sao_Paulo').format('HH:mm')

/************** TYPE DOS CONSOLE ************/
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const type = Object.keys(mek.message)[0]

/************** BUDY DO AUTO RESPONDER ************/
body = (type === 'conversation' && mek.message.conversation.startsWith(p)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(p) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(p) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(p) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectenviar.selectedRowId ? mek.message[type].singleSelectenviar.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && ((mek.message[type].fileSha256.toString('base64')) !== null && (mek.message[type].fileSha256.toString('base64')) !== undefined) ? (mek.message[type].fileSha256.toString('base64')) : ""
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

/************** CONST DE STRING ************/
const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const marker = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const arg = budy.slice(comando.length + 2, budy.length)
const isCmd = body.startsWith(p)
const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
var totalchat = await client.chats.all()
const botNumber = client.user.jid
const q = args.join(' ')
const me = client.user
const tescuk = ["0@s.whatsapp.net"]

/************** LINGUAGEM GRUPO ************/
const isGroup = from.endsWith('@g.us')
const senderr = isGroup ? mek.participant : mek.key.remoteJid
const sender = mek.key.fromMe ? client.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
const jid = senderr
const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const groupOwner = isGroup ? groupMetadata.owner : ''
const ownerNumber = [`${OwnerNumber}@s.whatsapp.net`] 
const isOwner = ownerNumber.includes(sender)
const isBanned = ban.includes(sender) 
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const argss = body.split(/ +/g)
const bater = global.batrei[global.batrei.length - 1]
const desc = isGroup ? groupMetadata.desc : ''
const nãoMexaAquiSeuPreto = botNumber
const numberBot = [`${nãoMexaAquiSeuPreto}@s.whatsapp.net`] 
const isBotk = numberBot.includes(sender)
  
/************** VERIFICADO CONST ************/
const dfrply = fs.readFileSync('./base de dados/lib/bot/fotos/client_libid.jpg')
var _0xa51ca7=_0xaced;function _0xaced(_0x35347c,_0x510658){var _0x5638db=_0x5638();return _0xaced=function(_0xacedac,_0x84b4fb){_0xacedac=_0xacedac-0xde;var _0x4771c3=_0x5638db[_0xacedac];return _0x4771c3;},_0xaced(_0x35347c,_0x510658);}function _0x5638(){var _0x28499c=['2222919JYYIfj','9cvEdGi','6237242HLCvJI','6790095wKqXPF','50YxYOWN','676040qLmwAs','4895608ZZThOL','5645478DDCbnf','https://chat.whatsapp.com/CaZ8OlmI59gCKizmlXqqay','api','4rddZyj','1623284FjEDCH','7rooKIT','api.zeks.me'];_0x5638=function(){return _0x28499c;};return _0x5638();}(function(_0x4f4e82,_0x737634){var _0x27b9c8=_0xaced,_0x3b02bd=_0x4f4e82();while(!![]){try{var _0x400347=-parseInt(_0x27b9c8(0xe6))/0x1+parseInt(_0x27b9c8(0xe5))/0x2*(-parseInt(_0x27b9c8(0xe9))/0x3)+-parseInt(_0x27b9c8(0xe1))/0x4+parseInt(_0x27b9c8(0xde))/0x5+parseInt(_0x27b9c8(0xe2))/0x6*(parseInt(_0x27b9c8(0xe7))/0x7)+-parseInt(_0x27b9c8(0xe0))/0x8*(-parseInt(_0x27b9c8(0xea))/0x9)+-parseInt(_0x27b9c8(0xdf))/0xa*(-parseInt(_0x27b9c8(0xeb))/0xb);if(_0x400347===_0x737634)break;else _0x3b02bd['push'](_0x3b02bd['shift']());}catch(_0x4581ef){_0x3b02bd['push'](_0x3b02bd['shift']());}}}(_0x5638,0xd9247),semApikeyPraTu='apivinz',zeks=_0xa51ca7(0xe8),sexoMuito=_0xa51ca7(0xe4),grupoDoclient=_0xa51ca7(0xe3));
function _0x2f25(_0x3fb1df,_0x246ad3){var _0x220811=_0x2208();return _0x2f25=function(_0x2f2539,_0x435f09){_0x2f2539=_0x2f2539-0x6f;var _0x132b32=_0x220811[_0x2f2539];return _0x132b32;},_0x2f25(_0x3fb1df,_0x246ad3);}var _0x2a04bc=_0x2f25;(function(_0x7399d3,_0x449ba7){var _0x15d48c=_0x2f25,_0x51e595=_0x7399d3();while(!![]){try{var _0x18f2c0=-parseInt(_0x15d48c(0x6f))/0x1+-parseInt(_0x15d48c(0x72))/0x2+parseInt(_0x15d48c(0x70))/0x3*(-parseInt(_0x15d48c(0x76))/0x4)+parseInt(_0x15d48c(0x71))/0x5+parseInt(_0x15d48c(0x74))/0x6*(parseInt(_0x15d48c(0x77))/0x7)+parseInt(_0x15d48c(0x75))/0x8+parseInt(_0x15d48c(0x73))/0x9;if(_0x18f2c0===_0x449ba7)break;else _0x51e595['push'](_0x51e595['shift']());}catch(_0x2ec434){_0x51e595['push'](_0x51e595['shift']());}}}(_0x2208,0x441eb),mtSexo=_0x2a04bc(0x78));function _0x2208(){var _0x4f9cc1=['6rcZSOt','266105pviyuZ','282936AclatQ','1338561yUJEMm','24BUNTbF','3485544ojvDna','143648WJBYbK','328958aHAEbL','copyright\x20©\x20client/Libid-BOT','333308tOTgoW'];_0x2208=function(){return _0x4f9cc1;};return _0x2208();}

/************** PUSHNAME (NOME) ************/
const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
let pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'

/************** CONST ANTILINK ************/
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

/************** RECURSO DE SEGURANÇA ************/
const isWelcome = isGroup ? welcome.includes(from) : true 
const isLevelingOn = isGroup ? _leveling.includes(from) : true 
const isAntiLink = isGroup ? antilink.includes(from) : true 
const isAntifaker = isGroup ? antifaker.includes(from) : true 
const isPalavrão = isGroup ? palavrão.includes(from) : false
const isAutconversa = isGroup ? autconversa.includes(from) : false
const isAntiflod = isGroup ? antiflod.includes(from) : true
const isMuted = isGroup ? mute.includes(from) : false
const isViewchat = isGroup ? viewchat.includes(from) : true

/************** REGISTRO ************/
const isRegistered = checkRegisteredUser(sender) 
const isUser = checkRegisteredUser(sender)

/************** PREMIUM ************/
const isPremium= prem.includes(sender)	 

/************** EM JAPONÊS 🙂 ************/
var ase = new Date();
var bolo_de_carne = ase.getHours();
switch(bolo_de_carne){
case 0: bolo_de_carne = `OI 😐 ${pushname}🌛`; break;
case 1: bolo_de_carne = `OPA BÃO ${pushname}🌛`; break;
case 2: bolo_de_carne = `😳 ${pushname}🌛`; break;
case 3: bolo_de_carne = `Olá ${pushname}✨`; break;
case 4: bolo_de_carne = `Olá 😐 ${pushname}✨`; break;
case 5: bolo_de_carne = `Bão ${pushname}✨`; break;
case 6: bolo_de_carne = `Olá ${pushname}✨`; break;
case 7: bolo_de_carne = `Olá ${pushname}✨`; break;
case 8: bolo_de_carne = `Olá ${pushname}✨`; break;
case 9: bolo_de_carne = `😳 ${pushname}✨`; break;
case 10: bolo_de_carne = `😐 ${pushname}✨`; break;
case 11: bolo_de_carne = `oi 😅 ${pushname}🔥`; break;
case 12: bolo_de_carne = `opa 🐤 ${pushname}🔥`; break;
case 13: bolo_de_carne = `😕 ${pushname}🔥`; break;
case 14: bolo_de_carne = `🌚 ${pushname}🔥`; break;
case 15: bolo_de_carne = `😼 ${pushname}🌹`; break;
case 16: bolo_de_carne = `oi ${pushname}🌹`; break;
case 17: bolo_de_carne = `oi ${pushname}🌹`; break;
case 18: bolo_de_carne = `OI ${pushname}??`; break;
case 19: bolo_de_carne = `OI ${pushname}🌛`; break;
case 20: bolo_de_carne = `OLA ${pushname}🌛`; break;
case 21: bolo_de_carne = `OPA ${pushname}🌛`; break;
case 22: bolo_de_carne = `BÃO ${pushname}🌛`; break;
case 23: bolo_de_carne = `😼 ${pushname}🌛`; break;
}
var bolo_de_carne = '' + bolo_de_carne;

/********** OUTRAS CONST **********/
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
}

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('pronto');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vf "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=60, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" ${asw}`, (err) => {
let media = fs.readFileSync(asw)
client.sendMessage(to, media, MessageType.sticker,{sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
} 

const sendSticker = (from, filename, mek) => {
client.sendMessage(from, filename, MessageType.sticker, {quoted: mek})
}

/********** ANTI NOME MODIFICADO **********/
function isDoubleByte(str) {
for (let i = 0, n = str.length; i < n; i++) {
if (str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

/********** FUCTION FOTO **********/
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
client.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
client.sendMessage(from, hasil, type, options).catch(e => {
client.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Erro ao baixar e reply mídia_')
})
})
})
})
}

/********** reply MSG **********/
const msg = (teks) => {client.sendMessage(from, teks, text, {contextInfo: {text: 'hi', "forwardingScore": 1000000000, "externalAdenviar": {"title": `${bolo_de_carne}`,"previewType": "PHOTO","thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg","thumbnail": img2,}, mentionedJid:[sender]}, quoted : mek})
}

const webPage = (teks) => {client.sendMessage(from, teks, text, {contextInfo: {text: 'hi', "forwardingScore": 1000000000, "externalAdenviar": {"title": `${bolo_de_carne}`,"previewType": "PHOTO","thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg","thumbnail": img2,}, mentionedJid:[sender]}, quoted : mek})
}

const reply = (teks) => {
client.sendMessage(from, teks, text,  {quoted: mek, contextInfo: {"mentionedJid": [sender]}})
}

const enviar = (teks) => {
client.sendMessage(from, teks, text, {quoted: mek})
}

const fotothumb = {text: 'oi', "forwardingScore": 1000000000, "externalAdenviar": {"title": `${bolo_de_carne}`,"body": "","previewType": "PHOTO","thumbnailUrl": "","thumbnail": img2, mentionedJid:[sender]}
}

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

/********** COSTUM DO TTT **********/
const costum = (pesan, tipe, target, target2) => {
 client.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}

/********** SENDMESS DO BC **********/
const sendMess = (hehe, teks) => {
client.sendMessage(hehe, teks, text)
}

/********** RAMDOM **********/
const math = (teks) => {
return Math.floor(teks)
} 

/********** MECIONADOR **********/
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
}

/********** TIME **********/
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

/********** PERDA DE XP **********/
randomPerda = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(randomPerda)

/********** GANHO EM XP **********/
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(randomTTTXP)

/********** MENSAGENS DO BOT **********/
var enviars = ["[ ! ] Aguarde amigo, estou fazendo...", "Vai beber uma água, ja estou terminando de reply..", "㋡ Opa, calma ae, tô enviando já!!", "❬❗❭ Aguarde 5 segundos", "☬ Seu pedido é uma ordem companheiro(a), Enviando...", "ههههه𓅂 Oi filho de Deus, calma ae, tô terminando de fazer..", "Oi princesa, já estou preparando pra reply, Aguarde..", "Salve mano, só aguarde um pouquinho que já estou enviando!!", "Aquieta o coração amigo, já estou enviando!", "Espere sentado que estou enviando!", "Pisa no freio aí amigo, tô enviando já!", "Foi daqui que pediram comando? Ta chegando...", "Oq vc ñ pede chorando, que eu não faço sorrindo, enviando já!", "Em 365 dias úteis termino o comando kkkk meme, to enviando!", "Não precisa gritar, já ouvi e tô enviando seu pedido!", "Aproveita que tô terminando aqui e beba água, hidrate-se!", "Seu pedido é uma ordem, terminando patrão!", "Manda quem pode, obedece quem tem juízo. Já tô enviando...", "Jaja está na mão amigo, aguarde um instante!", "Quem espera, sempre alcança","Tô enviando já amigão!"]
var enviars_libid= enviars[Math.floor(Math.random() * enviars.length)] 

/********** MESS && PTBR **********/
mess = {
espere: `${enviars_libid}`,
success: '『❗』Sucesso lek',
error: {
stick: '『❗』 Falha, ocorreu um erro ao converter a imagem em um adesivo ❌',
},
only: {
clientreplayoff: `『❌』Comando ${comando} desativado com sucesso!`,
clientreplay: `『❗』Comando ${comando} ativado com sucesso!`,
tobantilink: `Link permitido por ser adm! ._.`,
}
}
/*--------------------[ Tictactoe jogo Function ]--------------------*/
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
     if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
          const boardnow = setGame(`${from}`);
          if (budy == "Cex") return enviar("why");
          if (
               budy.toLowerCase() == "aceitar" ||
               budy.toLowerCase() == "Aceitar" ||
               budy.toLowerCase() == "aceita"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return enviar(`O jogo já começou antes!`);
                    const matrix = boardnow._matrix;
                    boardnow.status = true;
                    fs.writeFileSync(
                         `./lib/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}

`;
                    client.sendMessage(from, chatAccept, MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [
                                   boardnow.X + "@s.whatsapp.net",
                                   boardnow.O + "@s.whatsapp.net",
                              ],
                         },
                    });
               } else {
                    client.sendMessage(
                         from,
                         `『❗』 Esta é uma opção apenas para o @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          } else if (
               budy.toLowerCase() == "recusar" ||
               budy.toLowerCase() == "Recusar" ||
               budy.toLowerCase() == "RECUSAR"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return enviar(`O jogo já começou!`);
                    fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                    client.sendMessage(
                         from,
                         `@${boardnow.X} *_Infelizmente seu oponente não aceito o desafio ❌😕_*`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.X + "@s.whatsapp.net"],
                         },
                    }
                    );
               } else {
                    client.sendMessage(
                         from,
                         `『❗』 Esta é uma opção apenas para o @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: mek,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          }
     }

     if (arrNum.includes(cmde)) {
          const boardnow = setGame(`${from}`);
          if (!boardnow.status) return enviar(`Parece que seu oponente não aceitou o desafio ainda...`)
          if (
               (boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
               sender.replace("@s.whatsapp.net", "")
          )
               return;
          const moving = validmove(Number(budy), `${from}`);
          const matrix = moving._matrix;
          if (moving.isWin) {
               if (moving.winner == "SERI") {
                    const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo termina empatado 😐
`
                    enviar(chatEqual);
                    fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                    return;
               }
           //    const dinherowin = Math.ceil(Math.random() * 5000)
               const winnerJID = moving.winner == "O" ? moving.O : moving.X;
               const looseJID = moving.winner == "O" ? moving.X : moving.O;
               const limWin = Math.floor(Math.random() * 20) + 10;
               const limLoose = Math.floor(Math.random() * 10) + 5;
               const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Vencido por @${winnerJID} 😎👑
`;
            //    giftLimit(winnerJID + "@s.whatsapp.net", limWin);
            //    pushLimit(looseJID + "@s.whatsapp.net", limLoose);
            //addKoinUser(winnerJID + "@s.whatsapp.net", dinherowin)           
               client.sendMessage(from, chatWon, MessageType.text, {
                    quoted: mek,
                    contextInfo: {
                         mentionedJid: [
                              moving.winner == "O" ?
                                   moving.O + "@s.whatsapp.net" :
                                   moving.X + "@s.whatsapp.net",
                         ],
                    },
               });
setTimeout( () => {
if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
 fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
 enviar(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
 } else {
console.log(color(time, "red"), color("[ ESPIRADO ]", "magenta"), color('Jogo da velha espirado', "red"));
 }
}, 50000) //5 minutos
                enviar(`_*🥳Parabéns @${winnerJID} Você ganhou +${dinherowin} de dinheiro por ter ganhado o jogo da velha🎉...*_`)      
               fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
          } else {
               const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}


     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}

obs: jogo está em beta
`;
               client.sendMessage(from, chatMove, MessageType.text, {
                    quoted: mek,
                    contextInfo: {
                         mentionedJid: [
                              moving.X + "@s.whatsapp.net",
                              moving.O + "@s.whatsapp.net",
                         ],
                    },
               });
          }
     }
/********** FUCTION PATENTE **********/
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I🥉'
if (nivelAtual === 1) {
patt = 'Bronze  I🥉'
} else if (nivelAtual === 2) {
patt = 'Bronze II🥉'
} else if (nivelAtual === 3) {
patt = 'Bronze  III🥉'
} else if (nivelAtual === 4) {
patt = 'Bronze  IV🥉'
} else if (nivelAtual === 5) {
patt = 'Bronze  V🥉'
} else if (nivelAtual === 6) {
patt = 'Prata I🥈'
} else if (nivelAtual === 7) {
patt = 'Prata II🥈'
} else if (nivelAtual === 8) {
patt = 'Prata III🥈'
} else if (nivelAtual === 9) {
patt = 'Prata IV🥈'
} else if (nivelAtual === 10) {
patt = 'Prata V🥈'
} else if (nivelAtual === 11) {
patt = 'Ouro I🥇'
} else if (nivelAtual === 12) {
patt = 'Ouro II🥇'
} else if (nivelAtual === 13) {
patt = 'Ouro III🥇'
} else if (nivelAtual === 14) {
patt = 'Ouro IV🥇'
} else if (nivelAtual === 15) {
patt = 'Ouro V🥇'
} else if (nivelAtual === 16) {
patt = 'Campeão I🏆'
} else if (nivelAtual === 17) {
patt = 'Campeão II🏆'
} else if (nivelAtual === 18) {
patt = 'Campeão III🏆'
} else if (nivelAtual === 19) {
patt = 'Campeão IV🏆'
} else if (nivelAtual === 20) {
patt = 'Campeão V🏆'
} else if (nivelAtual === 21) {
patt = 'Diamante I 💎'
} else if (nivelAtual === 22) {
patt = 'Diamante II 💎'
} else if (nivelAtual === 23) {
patt = 'Diamante III 💎'
} else if (nivelAtual === 24) {
patt = 'Diamante IV 💎'
} else if (nivelAtual === 25) {
patt = 'Diamante V 💎'
} else if (nivelAtual === 26) {
patt = 'Mestre I 🐂'
} else if (nivelAtual === 27) {
patt = 'Mestre II 🐂'
} else if (nivelAtual === 28) {
patt = 'Mestre III 🐂'
} else if (nivelAtual === 29) {
patt = 'Mestre IV 🐂'
} else if (nivelAtual === 30) {
patt = 'Mestre V 🐂'
} else if (nivelAtual === 31) {
patt = 'Mítico I 🔮'
} else if (nivelAtual === 32) {
patt = 'Mítico II 🔮'
} else if (nivelAtual === 33) {
patt = 'Mítico III 🔮'
} else if (nivelAtual === 34) {
patt = 'Mítico IV 🔮'
} else if (nivelAtual === 35) {
patt = 'Mítico V 🔮'
} else if (nivelAtual === 36) {
patt = 'God I🕴'
} else if (nivelAtual === 37) {
patt = 'God II🕴'
} else if (nivelAtual === 38) {
patt = 'God III🕴'
} else if (nivelAtual === 39) {
patt = 'God IV🕴'
} else if (nivelAtual === 40) {
patt = 'God V🕴'
} else if (nivelAtual === 41) {
patt = 'Grande Mestre I 🛐'
} else if (nivelAtual === 42) {
patt = 'Grande Mestre II 🛐'
} else if (nivelAtual === 43) {   	
patt = 'Grande Mestre III 🛐'
} else if (nivelAtual === 44) {
patt = 'Grande Mestre IV 🛐'
} else if (nivelAtual >= 45) {
patt = 'Deus-Sama🔰'
} 

/********** FUCTION TIPO DE USUÁRIO **********/
if (groupAdmins) {
prema = 'Ademir🤓'
}
if (isOwner) {
prema = `El ${SeuNome}🕴🏽`
} else {
var prema = 'Membro comum🗿'
}

/********** FUCTION BODIA **********/
var ase = new Date();
var tempo = ase.getHours();
switch(tempo){
case 0: tempo = `Boa noite ${pushname}🌛`; break;
case 1: tempo = `Boa noite ${pushname}🌛`; break;
case 2: tempo = `Boa noite ${pushname}🌛`; break;
case 3: tempo = `Bom Dia ${pushname}✨`; break;
case 4: tempo = `Bom Dia ${pushname}✨`; break;
case 5: tempo = `Bom Dia ${pushname}✨`; break;
case 6: tempo = `Bom Dia ${pushname}✨`; break;
case 7: tempo = `Bom Dia ${pushname}✨`; break;
case 8: tempo = `Bom Dia ${pushname}✨`; break;
case 9: tempo = `Bom Dia ${pushname}✨`; break;
case 10: tempo = `Bom Dia ${pushname}✨`; break;
case 11: tempo = `Boa tarde ${pushname}🔥`; break;
case 12: tempo = `Boa tarde ${pushname}🔥`; break;
case 13: tempo = `Boa tarde ${pushname}🔥`; break;
case 14: tempo = `Boa tarde ${pushname}🔥`; break;
case 15: tempo = `Boa tarde ${pushname}🌹`; break;
case 16: tempo = `Boa tarde ${pushname}🌹`; break;
case 17: tempo = `Boa tarde ${pushname}🌹`; break;
case 18: tempo = `Boa noite ${pushname}🌛`; break;
case 19: tempo = `Boa noite ${pushname}🌛`; break;
case 20: tempo = `Boa noite ${pushname}🌛`; break;
case 21: tempo = `Boa noite ${pushname}🌛`; break;
case 22: tempo = `Boa noite ${pushname}🌛`; break;
case 23: tempo = `Boa noite ${pushname}🌛`; break;
}
var tempo = '' + tempo;

/********** FUCTION LEVELING **********/
var up_porcenntagem = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'  
const level_porcen = getLevelingLevel(sender)
if (level_porcen <= 10) {
up_porcenntagem = `*[█▒▒▒▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 20) {
up_porcenntagem = `*[██▒▒▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 30) {
up_porcenntagem = `*[███▒▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 40) {
up_porcenntagem = `*[████▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 50) {
up_porcenntagem = `*[█████▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 60) {
up_porcenntagem = `*[██████▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 70) {
up_porcenntagem = `*[███████▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 80) {
up_porcenntagem = `*[████████▒▒] ${level_porcen}%*`
} else if (level_porcen <= 90) {
up_porcenntagem = `*[█████████▒] ${level_porcen}%*`
} else if (level_porcen <= 100) {
up_porcenntagem = `*[██████████] ${level_porcen}%*`
} 		

/********** FUCTION BATERIA **********/
var porcentagem = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'  
const bateria = (`${baterai}`)
if (bateria <= 10) {
porcentagem = `*[█▒▒▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 20) {
porcentagem = `*[██▒▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 30) {
porcentagem = `*[███▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 40) {
porcentagem = `*[████▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 50) {
porcentagem = `*[█████▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 60) {
porcentagem = `*[██████▒▒▒▒] ${bateria}%*`
} else if (bateria <= 70) {
porcentagem = `*[███████▒▒▒] ${bateria}%*`
} else if (bateria <= 80) {
porcentagem = `*[████████▒▒] ${bateria}%*`
} else if (bateria <= 90) {
porcentagem = `*[█████████▒] ${bateria}%*`
} else if (bateria <= 100) {
porcentagem = `*[██████████] ${bateria}%*`
} 			

/********** FUCTION TEMPO **********/
const runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Hora, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minuto, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " segundos" : " Segundos") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}

/********** MENSAGENS DO BOT **********/
resposta = {
leveis: "❌ _*...Leveis não está ativado...*_❌",
playk: "✔️_*... Fazendo upload ...*_✔️",
macaco: "Macaco 😡️",
erroKrl: "Deu erro Macaco 😡️",
erroB: `${ll}...❌Deu erro, Tente mais tarde❌...${ll}`,
attp: `_Coloque o texto _\n\n*Exemplo ${p}attp ${SeuNome} gado*`,
play: `_*Sintaxe incorreta...*_\n\nUse assim: ${p + comando} F Marília Mendonça 👋😙`
}

/********** VERIFICADOS **********/
/** Verificado com o nome bom dia **/
const tob = { key: {fromMe: false,participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Libid", "caption": `${tempo}`}}}

/** Verificado com o nome ohayo **/
const tob1 = { key: {fromMe: false,participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Libid", "caption": `${bolo_de_carne}`}}}

/** Verificado com o nome e foto **/
const tob2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;AKAME,;;;\nFN:AKAME,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`./base de dados/lib/bot/fotos/client_libid.jpg`), thumbnail:fs.readFileSync(`./base de dados/lib/bot/fotos/client_libid.jpg`),sendEphemeral: true}}}

/** Verificado de catálogo com nome **/
const tobCat = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": dfrply}, "title": `${bolo_de_carne}`, "description": `${bolo_de_carne}`, "currencyCode": "USD", "priceAmount1000": "2000", "retailerId": `${bolo_de_carne}`, "productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}

/** Verificado de carrinho com nome **/
const tobCarr = {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 123, status: 1, surface : 1, message: `${bolo_de_carne}`, orderTitle: `${bolo_de_carne}`, thumbnail: dfrply, sellerJid: '0@s.whatsapp.net' }}}

/** Verificado de localização com nome **/
const tobLoc = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {caption: `${bolo_de_carne}`,jpegThumbnail: dfrply}}}

/** Verificado de video com nome **/
const tobVid = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": {"title": `${bolo_de_carne}`, "h": `${bolo_de_carne}`, 'duration': '99999', 'caption': `${bolo_de_carne}`, 'jpegThumbnail': dfrply}}}

/** Verificado de documento com nome **/
const tobDoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${bolo_de_carne}`, jpegThumbnail: dfrply}}}

/** Verificado de convite com nome **/
const tobCon = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": `${bolo_de_carne}`,"groupName": `${bolo_de_carne}`, "caption": `${bolo_de_carne}`, 'jpegThumbnail': dfrply}}}

/** Verificado de sticker com nome **/
const tobStk = {"key": {"participant": `0@s.whatsapp.net`,"remoteJid": "6289643739077-1613049930@g.us","fromMe": false,"id": "3B64558B07848BD81108C1D14712018E"},"message": {"stickerMessage": {"fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=","pngThumbnail": dfrply,"mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE","fileLength": "60206","firstFrameLength": 3626,"isAnimated": false}},"messageTimestamp": "1614070775","status": "PENDING"}

/** Verificado de gif com nome **/
const tobGif = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title": `${bolo_de_carne}`,"h": `${bolo_de_carne}`,'duration': '99999', 'gifPlayback': 'true', 'caption': `${bolo_de_carne}`,'jpegThumbnail': dfrply}}}

/** Verificado com nome **/
const tobTex = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "extendedTextMessage": {"text": `${bolo_de_carne}`,"title": `${bolo_de_carne}`,'jpegThumbnail': dfrply}}}

/** Verificado de audio com nome **/
const tobAud = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "99999","ptt": "true"}}}

//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━━━//
   const zero = fs.readFileSync ('./base de dados/lib/bot/fotos/Ndyi.jpg')
        
     const fakestatus = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./base de dados/lib/bot/fotos/Ndyi.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        client.chatRead(from, "read")
        const fakegroup = (teks) => {
            Ndyie.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./base de dados/lib/bot/fotos/Ndyi.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `@libid.gg`, 
                            orderTitle: `segue la @libid.gg`,
                            thumbnail: zero, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }

/********** BOTÃO LOC **********/
const sendButLocation = async (from, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, location)
const buttonMessages = {locationMessage: mhan.message.locationMessage, contentText: text1, footerText: desc1, buttons: but, headerType: 6}
client.sendMessage(from, buttonMessages, MessageType.buttonsMessage, options)}

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
client.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}

/********** BOTÃO VIDEO **********/
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await client.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

/********** BOTÃO IMAGE **********/
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, image, {thumbnail: null})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

/********** FUNÇÕES APARTI DAQUI **********/
const cmdadd = () => {
totalhit[0].totalcmd += 1
fs.writeFileSync('./base de dados/lib/totalcmd.json', JSON.stringify(totalhit))
}
if (isCmd) cmdadd()
const reqcmd = JSON.parse(fs.readFileSync('./base de dados/lib/totalcmd.json'))[0].totalcmd
function _0x3f3a(_0xe8646d,_0x162982){const _0x36eef1=_0x36ee();return _0x3f3a=function(_0x3f3aa7,_0x59c8f8){_0x3f3aa7=_0x3f3aa7-0xa8;let _0x1d8c58=_0x36eef1[_0x3f3aa7];return _0x1d8c58;},_0x3f3a(_0xe8646d,_0x162982);}function _0x36ee(){const _0x4dc2f4=['8MQhGXt','buttonsMessage','espere','4lvZHYl','sexo','sendMessage','2728152PNeJzS','1481322iAvjUo','Ok\x20','1454280GHjoNX','846420MhxUDs','8334747DEVUWj','11447541zrHWGg','32921950aCrBXE','10IfLwJm'];_0x36ee=function(){return _0x4dc2f4;};return _0x36ee();}(function(_0x304eed,_0x3d80b5){const _0x20a02b=_0x3f3a,_0x28302=_0x304eed();while(!![]){try{const _0x340319=parseInt(_0x20a02b(0xb1))/0x1+-parseInt(_0x20a02b(0xab))/0x2*(-parseInt(_0x20a02b(0xaf))/0x3)+parseInt(_0x20a02b(0xb2))/0x4*(-parseInt(_0x20a02b(0xb6))/0x5)+-parseInt(_0x20a02b(0xae))/0x6+-parseInt(_0x20a02b(0xb4))/0x7*(-parseInt(_0x20a02b(0xa8))/0x8)+parseInt(_0x20a02b(0xb3))/0x9+-parseInt(_0x20a02b(0xb5))/0xa;if(_0x340319===_0x3d80b5)break;else _0x28302['push'](_0x28302['shift']());}catch(_0x5dfdeb){_0x28302['push'](_0x28302['shift']());}}}(_0x36ee,0xcb699));const mortandela=_0x138417=>{const _0x5f034d=_0x3f3a,_0x3c1659=[{'buttonId':_0x5f034d(0xac),'buttonText':{'displayText':_0x5f034d(0xb0)+NomeDoBot},'type':0x1}],_0x23dd3f={'contentText':''+mess[_0x5f034d(0xaa)],'buttons':_0x3c1659,'headerType':0x1};client[_0x5f034d(0xad)](from,_0x23dd3f,MessageType[_0x5f034d(0xa9)],{'quoted':tob2});};

function fecha(){
myMonths = ["Janeiro","fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
myDays = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'];
var tgl = new Date();
var day = tgl.getDate()
bulan = tgl.getMonth()
var thisDay = tgl.getDay(),
thisDay = myDays[thisDay];
var yy = tgl.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

const stickerAdm = (hehe) => {
anu = fs.readFileSync('./base de dados/database/figurinhas/stickerAdm_sticker.webp')
client.sendMessage(hehe, anu, sticker,{
quoted: mek})
}

/********** FUCTION HIDETAG **********/
const hideTag = async function(from, text){
let anu = await client.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
client.sendMessage(from, text, 'extendedTextMessage', {quoted: tob2, contextInfo: {"mentionedJid": ane}})
}  

/********** FUCTION LEVEL XP **********/
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * (20 - 30 + 45) + 15)
var requiredXp = 20 * Math.pow(currentLevel, 2) + 150 * currentLevel + 1000
var getLevel = getLevelingLevel(sender)
const namelv = checkId
mett = ["1", "2", "3", "4", "5"]
res = mett[Math.floor(Math.random() * mett.length)]
result = fs.readFileSync(`./base de dados/database/audios/som` + res + `.mp3`)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m LEVEL UP \x1b[1;37m]', color(pushname, "yellow"), color('subiu'), color('de', "yellow"), color('level'), color('no', "yellow"), color('grupo:'), color(groupName, "yellow"))
const level_quetod = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "caption": `❲👾️-❪ 𝙻ᴇᴠᴇʟ ᴜᴘ ❫-👾❳\nTag: @${namelv.split('@')[0]}\n${up_porcenntagem}`}}}

let contentt = await getBuffer(`https://yuzzu-api.herokuapp.com/api/level?icon=https://i.ibb.co/KKgYHRW/8c5dc479e4a8a9404e292b5fc50ab8db.jpg`)
const media = await client.prepareMessage(from, contentt, MessageType.image, { thumbnail: null})
let qweriio = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
const buttons1 = [{buttonId: `${p}info perfil`, buttonText: {displayText: '👤 ＰＥＲＦＩＬ 👻'}, type: 1}]
const btn1 = {contentText: `
    ═══╾ Lᴇᴠᴇʟ Uᴘ ╼═══                           
  ➣ Numero: @${namelv.split('@')[0]}
╭════╾「👾」╼════╾
┣❲🔰❳ Xp: ${getLevelingXp(sender)}
┣❲🆙❳ Level: ${getLevel} -> ${getLevelingLevel(sender)}
┣❲〽️❳ Patente : ${patt}
╰════╾「🌀」╼════╾`, buttons: buttons1, headerType: 4, imageMessage: qweriio.message.imageMessage}
client.sendMessage(from, btn1, MessageType.buttonsMessage, {quoted: mek})
}
} catch (err) {
console.error(err)
}
}

/********** FUCTION DINHEIRO **********/
if (isGroup) {
const checkATM = checkATMuser(sender)
try {
if (checkATM === undefined) addATM(sender, pushname)
const uangsaku = Math.floor(Math.random() * 10) + 90
addKoinUser(sender, uangsaku)
} catch (err) {
console.error(err)
}
}

/***** FINALIZAR TTT AUTOMATICAMENTE *****/
if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isLevelingOn) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
client.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌\n\n➣  PUNIÇÃO: ${randomEndTTTXP} XP 🔮`, text, {quoted: tttset.mentionPlayer})
} else {
client.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}

/***** ANTI LINK DE GRUPOS *****/
if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply('🧐')
reply(`*「 LINK DETECTADO 」*\n\nParece que você enviou o link do grupo, desculpe, você será expulso`)
client.groupRemove(from, [sender])
}

/*[--ANTI PALAVRÃO --]*/
if (isGroup && isPalavrão) { 
if (palavra.includes(messagesC)) {
reply(`Essᴀ ᴘᴀʟᴀᴠʀᴀ ғᴏɪ ᴘʀᴏɪʙɪᴅᴀ ɴᴇssᴇ ɢʀᴜᴘᴏ\nRᴇᴘᴇɴsᴇ ᴏǫᴜᴇ ᴠᴄ ғᴇᴢ ᴘᴏʀ 4 ᴍɪɴᴜᴛᴏs ғᴏʀᴀ ᴅᴏ ɢʀᴜᴘᴏ 👋`)
setTimeout( () => { 
client.groupRemove(from, [sender]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 2000)
setTimeout( () => { 
reply(`Aᴅɪᴄɪᴏɴᴀɴᴅᴏ ${pushname} Nᴏᴠᴀᴍᴇɴᴛᴇ`)
}, 185000) //240000
var addd = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => { 
client.groupAdd(from, [addd]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 240000)
setTimeout( () => {
client.updatePresence(from, )
reply("Aᴅᴇᴜsシ︎")
}, 0)
}
}

//ANTI SPAM EU PEGUEI DO ITALU/TIRINGA-BOT
 if (isCmd && isFiltered(from) && !isGroup && isAntiflod) {
console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${comando}`), 'DE:', color(pushname))
const ff = {
text:  `Sem flood @${sender.split('@')[0]}...\n\nAguarde 3 segundos antes de usar outro comando✅`,
contextInfo: {
mentionedJid: [sender]
}
}
return reply(ff)}

if (isCmd && isFiltered(from) && isGroup && isAntiflod) {
console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${comando}`), 'DE:', color(pushname))
const ff1 = {
text:  `Sem flood @${sender.split('@')[0]}...\n\nAguarde 3 segundos antes de usar outro comando✅`,
contextInfo: {
mentionedJid: [sender]
}
}
return reply(ff1)}
// MUTE
             if (isMuted){
             if (!isGroupAdmins && !isOwner) return
 }
            
              const getWin = (userId) => {
              let position = false
              Object.keys(_win).forEach((i) => {
              if (_win[i].jid === userId) {
              position = i
       }
        })
              if (position !== false) {
              return _win[position].win
            }
        }
           
/********** TIPOS DE MENSAGENS **********/
colors = ['red','white','black','blue','yellow','green']
//_TIPO DE MENSAGEM
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isDocument = type == 'documentMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isDocument) typeMessage = "Document"
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const stickerMessage = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const tipoMensagem = type == 'audioMessage' ? 'Audio' : type == 'stickerMessage' ? 'Sticker' : type == 'imageMessage' ? 'Imagem' : type == 'videoMessage' ? 'Video' : type == 'documentMessage' ? 'Documento' : type == 'contactMessage' ? 'Contato' : type == 'locationMessage' ? 'Localização' : 'Mensagem'
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', color(comando, "yellow"), 'do', color(pushname, "yellow"), 'horas', color(hr, "yellow"))
if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MSG \x1b[1;37m]', color(`${tipoMensagem}`, "yellow"), 'do', color(pushname, "yellow"), 'horas', color(hr, "yellow"))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', color(comando, "yellow"), 'do', color(pushname, "yellow"), 'Em', color(groupName), 'horas', color(hr, "yellow"))
if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MSG \x1b[1;37m]', color(`${tipoMensagem}`, "yellow"), 'do', color(pushname, "yellow"), 'Em', color(groupName), 'horas', color(hr, "yellow"))

/********** VISUALIZADOR AS MENSAGENS  **********/
client.chatRead(from)

/********** USUÁRIO BANIDO **********/
if (isCmd && isBanned) {
reply(linguagem.ban())
return console.log('\x1b[1;31m~\x1b[1;37m>', '[', color('BAN', "red"), ']', color('Ignorando', "yellow"), 'comando', color('do', "yellow"), color(pushname), 'Horas', color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'))
}

/********** REGISTRO **********/
if (isCmd && !isRegistered) {
try {
ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let contentt = await getBuffer(ppimg)
const media = await client.prepareMessage(from, contentt, MessageType.image, { thumbnail: null})
let qweriio = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
const buttons1 = [
{buttonId: 'Rg', buttonText: {displayText: '👤 ＲＥＧＩＳＴＲＡＲ 👻'}, type: 1}]
const btn1 = {contentText: `${ll}_❌Registro Obrigadorio❌_${ll}`, footerText: `${ll}Aperte no botão abaixo.${ll}\n${ll}Ou pode mandar "login" aqui${ll}`, buttons: buttons1, headerType: 4, imageMessage: qweriio.message.imageMessage}
client.sendMessage(from, btn1, MessageType.buttonsMessage, {contextInfo: {"externalAdenviar": {"title": `${tempo}`, "body": "", "previewType": "PHOTO", "thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg", "thumbnail": img2, sourceUrl: grupoDoclient, contextInfo: {"mentionedJid": [sender]}}}})
return 
}

/********** LOGIN **********/
if (selectedButton == `Rg`) {
if (isUser) return reply(`📌 *Você já está registrado*`)
const namaUser = q.substring(0, q.indexOf('/') - 0)
const serialUser = createSerial(20)
reply(`${ll}Espere, Cadastrando: ${pushname}...!${ll}`)
try {
ppimg = await client.getProfilePicture(sender)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=https://bit.ly/walpamikel`)
const tekentod = 
`
╭━━々
│${ll}REGISTRADO(A)${ll}
│${ll}Id: ${serialUser}${ll}
│${ll}Hora: ${time}${ll}
│${ll}Nome: ${pushname}${ll}
│${ll}Link: wa.me/${sender.split('@')[0]}${ll}
╰━━━々
`            
veri = sender
if (isGroup) {
addRegisteredUser(sender, pushname, time, serialUser)
await client.sendMessage(from, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                 
} else {
addRegisteredUser(from, pushname, time, serialUser)
await client.sendMessage(from, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                  
}
}

/********** REGISTRO **********/
if ((budy === "login") || (budy === "Login") || (budy === "Login")) {
if (isUser) return reply(`📌 *Você já está registrado*`)
const namaUser = q.substring(0, q.indexOf('/') - 0)
const serialUser = createSerial(20)
reply(`${ll}...*❌ Esᴘᴇʀᴇ ❌*...${ll}`)
try {
var ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buff = await getBuffer(ppimg)
const tekentod = 
`
╭━━々
│${ll}REGISTRADO(A)${ll}
│${ll}Id: ${serialUser}${ll}
│${ll}Hora: ${time}${ll}
│${ll}Nome: ${pushname}${ll}
│${ll}Link: wa.me/${sender.split('@')[0]}${ll}
╰━━━々
`            
veri = sender
if (isGroup) {
addRegisteredUser(sender, pushname, time, serialUser)
await client.sendMessage(from, buff, image, {thumbnail: null, sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                 
} else {
addRegisteredUser(from, pushname, time, serialUser)
await client.sendMessage(from, buff, image, {thumbnail: null, sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${tekentod}`})
addATM(sender)
addLevelingId(sender)                  
}
}

//-TIME TEMPO ONLINE
if (selectedButton == `nãoDaEsseMekAiManoGay`) {
uptime = process.uptime();
client.sendMessage(from, `*${temporizado(uptime)}*`, MessageType.text, {quoted: mek})
}

/********** EVAL CMDS **********/
if (budy.startsWith('>')){
if(!isOwner) return
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m EVAL \x1b[1;37m]', color(moment(mek.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
try {
return reply(JSON.stringify(eval(budy.slice(2)),null,'\t'))
} catch(e) {
reply(`${e}`)
}
}

if (budy.startsWith('=>')){
if (!isOwner) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
//reply(JSON.stringify(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(`${e}`)
}
}

if (budy.startsWith(`${p}exec`)){
if (!isOwner) return
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
exc = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
//reply(JSON.stringify(eval(`;(async () => { ${exc} })()`)))
reply(util.format(eval(`;(async () => { ${exc} })()`)))
} catch(e){
reply(String(e))
}
}

/********** COMANDOS SEM PREFIX, BR client **********/
if (isAutconversa) {
if ((budy.match("Pq")) || (budy.match("pq"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/Pq_sticker.webp`)
client.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("hentai")) || (budy.match("Hentai"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/hentai_sticker.webp`)
client.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Analise")) || (budy.match("analise"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/Analise_sticker.webp`)
client.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Sexo")) || (budy.match("sexo"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/sexo_sticker.webp`)
client.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Não")) || (budy.match("não"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/sim_sticker.webp`)
client.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("🤔"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/analise_sticker.webp`)
client.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("😭"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/chorando_sticker.webp`)
client.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Mentira")) || (budy.match("mentira"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/verdade_sticker.webp`)
client.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Bye")) || (budy.match("bye")) || (budy.match("Tchau")) || (budy.match("tchau"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/audios/bye_audio.mp3`)
client.sendMessage(from, result, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})}}

if ((budy.match("🙈")) || (budy.match("🙉")) || (budy.match("🙊")) || (budy.match("🐵")) || (budy.match("🐒"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/audios/macaco_audio.mp3`)
client.sendMessage(from, result, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})}}

if ((budy.match(`@${me.jid.split('@')[0]}`))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/tag_sticker.webp`)
client.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("diga"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
reply("te amoooo")}}
}

/********** TODOS OS CMD APARTI DAQUI **********/
switch(comando) {
case 'menu':
case 'help':
addFilter(from)
client.updatePresence(from, Presence.composing)
uptime = process.uptime()
const checATM = checkATMuser(sender)
const useLevel = getLevelingLevel(sender)
const useXp = getLevelingXp(sender)
const requireXp = 5 * Math.pow(useLevel, 2) + 50 * useLevel + 100
const chatss = `${totalchat.length}`
const antifaker_by_client = isAntifaker ? 'Ativado' : 'Desativado'
const antilink_by_client = isAntiLink ? 'Ativado' : 'Desativado'
const welcome_by_client = isWelcome ? 'Ativado' : 'Desativado'
const levelingon_by_client = isLevelingOn ? 'Ativado' : 'Desativado'
const selfchat_by_client = isAutconversa ? 'Ativado' : 'Desativado'
totalChat = await client.chats.all()
charge = charging ? 'sim' : 'não'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await client.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let menuAjuda = await getBuffer(ppimg)
var mediaByclient = await client.prepareMessage(from, menuAjuda, MessageType.image, { thumbnail: null, caption: help(p, hr, pushname, prema, checATM, useLevel, useXp, requireXp, patt, bateria, chatss, antilink_by_client, welcome_by_client, levelingon_by_client, antifaker_by_client, selfchat_by_client)})
var qweriioaByclient = mediaByclient.message["ephemeralMessage"] ? mediaByclient.message.ephemeralMessage : mediaByclient
const buttons2 = [{buttonId: `${p}playrs`, buttonText: {displayText: '🎵 MENU PLAYRS☔'}, type: 1}]
const btn2 = {contentText: `${help(ll, p, hr, pushname, prema, checATM, useLevel, useXp, requireXp, patt, bateria, porcentagem, chatss, me, reqcmd, _registered)}`, footerText: `\`\`\`▢ Total Chats : ${totalChat.length}\`\`\`\n\`\`\`▢ Carregando : ${charge}\`\`\`\n\`\`\`▢ Bateria : ${baterai}\`\`\`\n\`\`\`▢ Velocidade : ${latensi.toFixed(4)} segundos\`\`\`\n\`\`\`▢ Tempo de atividade : ${horaOn(os.uptime())}\`\`\``, buttons: buttons2, headerType: 4, imageMessage: qweriioaByclient.message.imageMessage}
client.sendMessage(from,  btn2, MessageType.buttonsMessage, {quoted: mek})
break

case 'grupo':
addFilter(from)
totalChat = await client.chats.all()
charge = charging ? 'sim' : 'não'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await client.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const grupoMenu = await getBuffer(ppimg)
var mediaByclient = await client.prepareMessage(from, grupoMenu, MessageType.image, { thumbnail: null})
var qweriioaByclient = mediaByclient.message["ephemeralMessage"] ? mediaByclient.message.ephemeralMessage : mediaByclient
var but1tons = [{buttonId: `${p}Jogos`, buttonText: {displayText: '🎮 MENU JOGOS 🎰'}, type: 1}]
var button1s = {contentText: `${(linguagem.menu2(pushname, hr, totalchat, bateria, ll))}`, footerText: `\`\`\`▢ Total Chats : *${totalChat.length}*\`\`\`\n\`\`\`▢ Carregando : *${charge}*\`\`\`\n\`\`\`▢ Bateria : *${baterai}*\`\`\`\n\`\`\`▢ Velocidade : *${latensi.toFixed(4)} segundos*\`\`\`\n\`\`\`▢ Tempo de atividade : *${horaOn(os.uptime())}*\`\`\``, buttons: but1tons, headerType: 4, imageMessage: qweriioaByclient.message.imageMessage}
client.sendMessage(from, button1s, MessageType.buttonsMessage, {quoted: mek})
break

case 'dono':
addFilter(from)
client.sendMessage(from, '『❗』𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘...', MessageType.text, {quoted: tob2})
client.sendMessage(sender, 'Esᴛᴇ ᴇ́ ᴍᴇᴜ ᴄʀɪᴀᴅᴏʀ [(>_<)] Cᴀsᴏ ᴛᴇɴʜᴀ ᴀʟɢᴜᴍᴀ ᴅᴜᴠɪᴅᴀ ғᴀʟᴇ ᴄᴏᴍ ᴇʟᴇ',MessageType.text, { quoted: tob2} )
client.sendMessage(sender, {displayname: "Jeff", vcard: vcard}, MessageType.contact, {quoted: tob2})
break

case 'banir':
if (!isGroup) return reply(linguagem.group())
if (!isGroupAdmins && !isOwner) return reply(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return reply(`${emoji_bot} Sintaxe correta: ${p + comando} @${OwnerNumber}`)
if (args[0].startsWith(`@${OwnerNumber}`)) return reply(`Eu não posso reply banir meu criador ${OwnerNumber} 😞`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Alvo removido com sucesso :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
client.groupRemove(from, mentioned)
} else {
mentions(`${emoji_bot} Alvo removido com sucesso : @${mentioned[0].split('@')[0]}`, mentioned, true)
client.groupRemove(from, mentioned)
}
break

case 'add':
case 'reviver':
try {
if (!isGroup) return reply("Somente em grupos!")
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply("Não hmmmm")  
if (!isBotGroupAdmins) return reply(`Tornar bot como administrador de grupo!`)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
response = await client.groupAdd(from, [entah])
linkgc = await client.groupInviteCode(from)
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('O alvo já está no grupo!') 
if(inv[0].code == 403) return reply('Erro, conta privada do usuário')
if(inv[0].code == 408) return reply('Erro, usuário acabou de sair')
if(inv[0].code == 401) return reply('Erro, porque o bot está bloqueado pelo alvo ')
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
response = await client.groupAdd(from, [entah])
o = response.participants[0]
linkgc = await client.groupInviteCode(from)
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('O alvo já está no grupo! ')
if(inv[0].code == 403) return reply('Erro, conta privada do usuário')
if(inv[0].code == 403) return reply('Falhou, porque em privado ')
if(inv[0].code == 408) return reply('Falha, porque o alvo acabou de sair ')
if(inv[0].code == 401) return reply('Falha, porque o bot está bloqueado pelo alvo ')
}
} catch {
return 
}
break

case 'promover':
if (!isGroup) return reply(linguagem.group())
if (!isGroupAdmins && !isOwner) return reply(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return reply(`${emoji_bot} Sintaxe correta: ${p + comando} @${OwnerNumber}`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Promovido com sucesso\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
client.groupRemove(from, mentioned)
} else {
mentions(`${emoji_bot} Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} agora é admin do grupo!`, mentioned, true)
client.groupMakeAdmin(from, mentioned)
}
break

case 'rebaixar':
if (!isGroup) return reply(linguagem.group())
if (!isGroupAdmins && !isOwner) return reply(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return reply(`${emoji_bot} Sintaxe correta: ${p + comando} @${OwnerNumber}`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Rebaixado com sucesso\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
client.groupRemove(from, mentioned)
} else {
mentions(`${emoji_bot} Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} perdeu o adm com sucesso!`, mentioned, true)
client.groupDemoteAdmin(from, mentioned)
}
break

case 'kick':
if (!isGroup) return reply(linguagem.group())
if (!isGroupAdmins && !isOwner) return reply(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
kick = mek.message.extendedTextMessage.contextInfo.participant
client.groupRemove(from, [kick])
await reply('Removendo participantes com sucesso')
break

case 'promote':
if (!isGroup) return reply(linguagem.group())
if (!isGroupAdmins && !isOwner) return reply(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
promoverGay = mek.message.extendedTextMessage.contextInfo.participant
client.groupMakeAdmin(from, [promoverGay])
clientzinhokkkk = mek.message.extendedTextMessage.contextInfo.participant
reply(`Esse macaco *@${clientzinhokkkk.split('@')[0]}*... agora é admintrador`)
break

case 'demote':
if (!isGroup) return reply(linguagem.group())
if (!isGroupAdmins && !isOwner) return reply(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
rebaixarGay = mek.message.extendedTextMessage.contextInfo.participant
client.groupDemoteAdmin(from, [rebaixarGay])
kapiuugvb = mek.message.extendedTextMessage.contextInfo.participant
reply(`Pronto, Esse macaco *@${kapiuugvb.split('@')[0]}*... perdeu seu cargo de admintrador`)
break 

case 'addprem':
case 'darvip':
if (!isGroup) return reply(linguagem.group())
if (!isOwner && !isPremium) return  reply(linguagem.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
prem.push(`${mentioned}`)
fs.writeFileSync('./base de dados/datauser/premium.json', JSON.stringify(prem))
susp = `👑@${mentioned[0].split('@')[0]} foi adicionado à lista de usuários premium com sucesso👑`
mentions(`${susp}`, mentioned, true)   
break

case 'dellprem': 
case 'tirarvip':
if (!isGroup) return reply(linguagem.group())
if (!isOwner) return reply(linguagem.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
let dellprem = body.slice(12)
let positio = prem.indexOf(dellprem)
prem.splice(positio, 1)
fs.writeFileSync('./base de dados/datauser/premium.json', JSON.stringify(prem))
susp = `✖@${mentioned[0].split('@')[0]} foi removido da lista de usuários premium✖`
mentions(`${susp}`, mentioned, true)   
break

case 'group': //by resen e client
case 'grup':
case 'gp':
addFilter(from)
if (!isGroup) return reply(linguagem.group())
if (!isGroupAdmins && !isOwner) return reply(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return reply(`${emoji_bot} Sintaxe correta: ${p + comando} abrir/fechar`)
if (args[0].toLowerCase() == 'abrir') { 
reply(`${emoji_bot} Grupo aberto com sucesso`)
client.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0].toLowerCase() == 'fechar') {
await client.groupSettingChange(from, GroupSettingChange.messageSend, true)
reply(`${emoji_bot} Grupo fechado com sucesso`)
}
break                  

case 'totag':
addFilter(from)
if (!isGroup) return reply(linguagem.group())
if (!isGroupAdmins && !isOwner) return reply(linguagem.admin())
//if (!isBotGroupAdmins) return stickerAdm(from)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await client.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: tob2
}
ini_buffer = fs.readFileSync(file)
client.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await client.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: tob2
}
ini_buffer = fs.readFileSync(file)
client.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await client.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4', duration: 999999999,
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: tob2
}
ini_buffer = fs.readFileSync(file)
client.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
 } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await client.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/gif',
contextInfo: { mentionedJid: mem },
quoted: tob2
}
ini_buffer = fs.readFileSync(file)
client.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await client.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'text/plain',
contextInfo: { mentionedJid: mem },
quoted: tob2
}
ini_buffer = fs.readFileSync(file)
client.sendMessage(from, ini_buffer, document, options)
fs.unlinkSync(file)
}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await client.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4', duration: 999999999,
contextInfo: { mentionedJid: mem },
quoted: tob2
}
ini_buffer = fs.readFileSync(file)
client.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
reply(`${emoji_bot} Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${p + comando}`)
}
break

case 'setnome':
addFilter(from) 
if (!isGroup) return reply(linguagem.group())
if (!isGroupAdmins && !isOwner) return reply(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return reply(`${emoji_bot} Use: ${p + comando} <Novo nome do grupo>`)
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
client.groupUpdateSubject(idgrup, `${body.slice(9)}`)
client.sendMessage(from, `${emoji_bot} Nome do grupo alterado`, text, {quoted: tob2})
break

case 'setdesk':
addFilter(from) 
if (!isGroup) return reply(linguagem.group())
if (!isGroupAdmins && !isOwner) return reply(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return reply(`${emoji_bot} Use: ${p + comando} <Nova Descrição>`)
client.groupUpdateDescription(from, `${body.slice(9)}`)
client.sendMessage(from, `${emoji_bot} Descrição do grupo alterada`, text, {quoted: mek})
break

case 'setppgc':
addFilter(from) 
if (!isGroup) return reply(linguagem.group())
if (!isGroupAdmins && !isOwner) return reply(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isQuotedImage) return reply(`${emoji_bot} Use: ${p + comando} <Marque uma foto>`)
const ftgp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
const medipp = await client.downloadAndSaveMediaMessage(ftgp)
await client.updateProfilePicture (from, medipp)
reply(`${emoji_bot} foto do grupo alterada`) 
break

case 'delete': 
case 'del':
case 'apagar':
case 'd':
addFilter(from)
if (!isGroup)return reply(linguagem.group())
if (!isGroupAdmins && !isOwner && !isPremium)return reply(linguagem.admin())
try {
client.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
} catch {
reply(`${emoji_bot} Só é possível deletar mensagens minhas`)
}
break

case 'marcar':
addFilter(from)
client.updatePresence(from, Presence.composing)
if (!isGroup) return reply(linguagem.group())
if (!isGroupAdmins && !isOwner) return reply(linguagem.admin())
//if (!isBotGroupAdmins) return stickerAdm(from)
members_id = []
todos = (args.length > 1) ? body.slice(8).trim(): ''
todos += `${q}\n\n`
for (let mem of groupMembers) {
todos += `⪧ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(' '+todos+' ', members_id, true)
break

case 'info': //by resen e client
addFilter(from) 
if (args.length < 1) return reply(`${emoji_bot} Use ${p + comando} <Grupo ou Perfil>`)
if (args[0].toLowerCase() == 'grupo') {
client.updatePresence(from, Presence.composing)
if (!isGroup) return reply(linguagem.group())
ppUrl = await client.getProfilePicture(from) 
buffer = await getBuffer(ppUrl)
infoGrupTob = `
📛 *Nome* : ${groupName}
👤 *Dono do Grupo* : @${from.split("-")[0]}
👥 *Membro* : ${groupMembers.length}
👥 *Admin* : ${groupAdmins.length}

⬣ Welcome : ${isWelcome ? 'Ativado':'Desativado'}
⬣ Anti Link : ${isAntiLink? 'Ativado':'Desativado'}
⬣ Anti Fake : ${isAntifaker? 'Ativado':'Desativado'}
⬣ Self Chat : ${isAutconversa? 'Ativado':'Desativado'}
⬣ Anti Flod : ${isAntiflod? 'Ativado':'Desativado'}

💬 Descrição do grupo :
\`\`\`${groupDesc}\`\`\``
client.sendMessage(from, buffer, image, {quoted: tob2, thumbnail:null, caption: infoGrupTob})
} else if (args[0].toLowerCase() == 'perfil') { 
const usLevel = getLevelingLevel(sender)
const usXp = getLevelingXp(sender)
const usTime = getRegisterTime(sender) 
const serh = getRegisterSerial(sender)
const idad = getRegisterAge(sender)
const regin = getRegisterName(sender)
const requirXp = 500 * (Math.pow(2, usLevel) - 1)
const teste64 = sender
const teste65 = await client.getStatus(teste64 , MessageType.text)
try {
ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
pf = 
`
╭•❏ ઽ૯ષ ℓ૯√૯ℓ
 • ⋟ 🪀 Nome: ${pushname}
│⋟ 🔮 Level: ${usLevel}
 • ⋟ 💎 XP: ${usXp}/${requirXp}
│⋟ 🧸 Patente: ${patt}
 • ⋟ 📂 link: wa.me/${sender.split("@")[0]}
│⋟ 👾 Seu recado: ${teste65.status}
╰━━━━━━─ • ─━━━━━❋ཻུ۪۪⸙
`
its = await getBuffer (ppimg)
client.sendMessage(from, its, image, {quoted: tob2, thumbnail:null, caption: pf, contextInfo: {mentionedJid: [sender]}})
}
break

case 'listadmins': 
case 'listadmin':
case 'adminlist':
case 'listadm':
addFilter(from)
if (!isGroup) return reply(linguagem.group())
adl = `Lista de administradores do grupo: ${groupMetadata.subject}\nTotal: ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
adl += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(adl, groupAdmins, true)
break

case 'linkgp': 
case 'link':
addFilter(from)
if (!isGroup) return reply(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return reply(`${emoji_bot} Use ${p + comando} <Grupo ou Pv>`)
if (args[0].toLowerCase() == 'grupo') {
linkgc = await client.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
} else if (args[0].toLowerCase() == 'pv') {
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
linkgc = await client.groupInviteCode(from)
client.sendMessage(sender, 'https://chat.whatsapp.com/'+linkgc, MessageType.text)
}
break

case 'hidetag':
addFilter(from)  
if (!isGroup) return reply(linguagem.group())
//if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return reply(linguagem.admin())
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break

case 'ajuda':
let botao = client.prepareMessageFromContent(from, {"listMessage": {"title": `\n╭━━━━──「★」──━━━╮\n│︎ *ᴛᴏᴅᴏs ᴏs ᴍᴇɴᴜ* 👤⃟ き\n╰┬━━━━── • ──━━━┈ ⳹\n┌┤ *_ESSE É O MENU_* \n││ *_GERAL DA_*\n││ _*${NomeDoBot}*_\n│╰━─━─━─━◈━─━─━─\n╰━━━━━── • ──━━━━┈⳹`, "description": "\`\`\`_Aperte em_ *MENU* _Para Receber os Comandos_\`\`\`", "buttonText": "ᴍᴇɴᴜ", "listType": "SINGLE_SELECT", "sections": [{ "rows": [{ "title": "✙◗ Help", "description": "\`\`\`▢ 📛 Para receber o menu completo 📛 ▢\`\`\`", "rowId": `${p}menu` }, {"title": "✙◗ Playrs", "description": "\`\`\`▢ 🎵 Menu de Músicas 🎵 ▢\`\`\`", "rowId": `${p}Playrs` }, { "title": "✙◗ Grupo", "description": "\`\`\`▢ 😏 Menu dos Adms 😏 ▢\`\`\`", "rowId": `${p}Grupo`}, {"title": "✙◗ Jogos", "description": "\`\`\`▢ 🎮 Menu de Jogos 🎮 ▢\`\`\`", "rowId": `${p}Jogos`}, {"title": "✙◗ Criador", "description": `\`\`\`▢ ️👨🏻‍✈️ Menu do ${SeuNome} 👨🏻‍✈️ ▢\`\`\``, "rowId": `${p}Criador`}, {"title": "✙◗ Infobot", "description": "\`\`\`▢ ✔️ Menu do Bot ✔️ ▢\`\`\`", "rowId": `${p}Infobot`}, {"title": "✙◗ Animes", "description": "\`\`\`▢ 🔥 Menu Animes/+18 🔥 ▢\`\`\`", "rowId": `${p}Animes`}, {"title": "✙◗ Bankloja", "description": "\`\`\`▢ 💰 Menu de Banco 💰 ▢\`\`\`", "rowId": `${p}Bankloja`}, {"title": "✙◗ Premium", "description": "\`\`\`▢ 💫 Menu dos Premiuns 💫 ▢\`\`\`", "rowId": `${p}Premium`}, {"title": "✙◗ Figurinhas", "description": "\`\`\`▢ 🌳 Menu de Figurinhas 🌳 ▢\`\`\`", "rowId": `${p}Figurinhas`}, ]}]}}, {quoted:mek})
client.relayWAMessage(botao)
break

case 'eval':
if(!isOwner) return
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m EVAL \x1b[1;37m]', color(moment(mek.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
try {
eval(q)
} catch (err) {
reply(`${err}`)
}
break

case 'welcome':
if (!isGroup) return reply(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return reply(linguagem.admin())
if (args.length < 1) return reply(`[❗]On/Off, Exemplo ${p + comando} On`)
if (args[0] === 'on') {
if (isWelcome) return reply('*[❗] ja esta ativado amigo...*')
welcome.push(from)
fs.writeFileSync('./base de dados/database/arquivos/welcome.json', JSON.stringify(welcome))
reply(mess.only.clientreplay)
} else if (args[0] === 'off') {
let position = welcome.indexOf(welcome.find((x) => x === from))
if (position === -1) return reply(`${comando} não estava ativo antes`)
welcome.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/welcome.json', JSON.stringify(welcome))
reply(mess.only.clientreplayoff)
} else {
reply(`[❗]ativar/desativar, Exemplo ${p + comando} On`)
}
break

case 'leveling':
case 'leveis':
if (!isGroup) return reply(linguagem.group())
//if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return reply(linguagem.admin())
if (args.length < 1) return reply(`[❗]ativar/desativar, Exemplo ${p}${comando} ativar`)
if (args[0] === 'on') {
if (isLevelingOn) return reply('*[❗] ja esta ativado amigo...*')
_leveling.push(from)
fs.writeFileSync('./base de dados/database/arquivos/leveling.json', JSON.stringify(_leveling))
reply(mess.only.clientreplay)
} else if (args[0] === 'off') {
let position = _leveling.indexOf(_leveling.find((x) => x === from))
if (position === -1) return reply(`${comando} não estava ativo antes`)
_leveling.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/leveling.json', JSON.stringify(_leveling))
reply(mess.only.clientreplayoff)
} else {
reply(`[❗]on/off, Exemplo ${p}${comando} on`)
}
break

case 'antilink':
case 'antilinks':
if (!isGroup) return reply(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return reply(linguagem.admin())
if (args.length < 1) return reply(`[❗]On/Off, Exemplo ${p + comando} Off`)
if (args[0] === 'on') {
if (isAntiLink) return reply('*[❗] ja esta ativado amigo...*')
antilink.push(from)
fs.writeFileSync('./base de dados/database/arquivos/antilink.json', JSON.stringify(antilink))
reply(mess.only.clientreplay)
} else if (args[0] === 'off') {
let position = antilink.indexOf(antilink.find((x) => x === from))
if (position === -1) return reply(`${comando} não estava ativo antes`)
antilink.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/antilink.json', JSON.stringify(antilink))
reply(mess.only.clientreplayoff)
} else {
reply(`[❗]On/Off, Exemplo ${p + comando} Off`)
}
break

case 'antifake':
if (!isGroup) return reply(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return reply(linguagem.admin())
if (args.length < 1) return reply(`[❗]On/Off, Exemplo ${p + comando} Off`)
if (args[0] === 'on') {
if (isAntifaker) return reply('*[❗] ja esta ativado amigo...*')
antifaker.push(from)
fs.writeFileSync('./base de dados/database/arquivos/antifaker.json', JSON.stringify(antifaker))
reply(mess.only.clientreplay)
} else if (args[0] === 'off') {
let position = antifaker.indexOf(antifaker.find((x) => x === from))
if (position === -1) return reply(`${comando} não estava ativo antes`)
antifaker.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/antifaker.json', JSON.stringify(antifaker))
reply(mess.only.clientreplayoff)
} else {
reply(`[❗]On/Off, Exemplo ${p + comando} Off`)
}
break

case 'autconversa':
case 'selfchat':
if (!isGroup) return reply(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return reply(linguagem.admin())
if (args.length < 1) return reply(`[❗]On/Off, Exemplo ${p + comando} Off`)
if (args[0] === 'on') {
if (isAutconversa) return reply('*[❗] ja esta ativado amigo...*')
autconversa.push(from)
fs.writeFileSync('./base de dados/database/arquivos/autconversa.json', JSON.stringify(autconversa))
reply(mess.only.clientreplay)
} else if (args[0] === 'off') {
let position = autconversa.indexOf(autconversa.find((x) => x === from))
if (position === -1) return reply(`${comando} não estava ativo antes`)
autconversa.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/autconversa.json', JSON.stringify(autconversa))
reply(mess.only.clientreplayoff)
} else {
reply(`[❗]on/off, Exemplo ${p + comando} off`) 
}
break

case 'antiflod':
case 'antiflods':
if (!isGroup) return reply(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins && !isOwner) return reply(linguagem.admin())
if (args.length < 1) return reply(`[❗]ativar/desativar, Exemplo ${p}${comando} on`)
if (args[0] === 'on') {
if (isAntiflod) return reply('*[❗] ja esta ativado amigo...*')
antiflod.push(from)
fs.writeFileSync('./base de dados/database/arquivos/_antiflod.json', JSON.stringify(antiflod))
reply(`[❗] Comando ${comando} ativado, Aparti de agora não pode flodar comandos`)
} else if (args[0] === 'off') {
let position = antiflod.indexOf(antiflod.find((x) => x === from))
if (position === -1) return reply(`${comando} não estava ativo antes`)
antiflod.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/_antiflod.json', JSON.stringify(antiflod))
reply(`[❗] Comando ${comando} off, Aparti de agora pode flodar comandos`)
} else {
reply(`[❗]ativar/desativar, Exemplo ${p}${comando} on`)
}
break

case 'mute':
               if (!isGroup) return reply(linguagem.group())
               if (!isGroupAdmins && !isOwner) return reply(linguagem.admin())
               if (args.length < 1) return reply('!mute 1/0')
               if (args[0].toLowerCase() === '1'){
               if (isMuted) return reply(`já mudo`)
               mute.push(from)
               fs.writeFileSync('./base de dados/database/arquivos/mute.json', JSON.stringify(mute))
               reply(`*...:* *LIGADO* *:...*\n\nseguinte gurizada\nO bot foi silenciado e agora somente os adms podem usar os comandos no grupo ${groupName} , Por favor, lembre-se disso\n\n_*${NomeDoBot}*_`)
               } else if (args[0].toLowerCase() === '0'){
               anu = mute.indexOf(from)
               mute.splice(anu, 1)
               fs.writeFileSync('./base de dados/database/arquivos/mute.json', JSON.stringify(mute))
               reply(`*...:* *ATIVO NOVAMENTE* *:...*\n\nAe piazada\nO bot foi reativado no grupo ${groupName} e agora os membros podem voltar a usar ele novamente\n\n_*${NomeDoBot}*_`)
               } else {
               reply(`Selecione 1 ou 0`)
}
               break

//<~FIM DOS COMANDOS EM GRUPOS

//<~COMEÇO DOS COMANDOS STICKERS
case 'figurinhas':
addFilter(from)
const total_gp2 = `${totalchat.length}`
totalChat = await client.chats.all()
charge = charging ? 'sim' : 'não'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await client.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const figurinhasMenu = await getBuffer(ppimg)
var mediaByclient = await client.prepareMessage(from, figurinhasMenu, MessageType.image, {thumbnail: null})
var qweriioaByclient = mediaByclient.message["ephemeralMessage"] ? mediaByclient.message.ephemeralMessage : mediaByclient
var button9s = [{buttonId: `${p}playrs`, buttonText: {displayText: '🎵 MENU PLAYRS ☔'}, type: 1}]
var button9s = {contentText: `${(linguagem.figurinhas(pushname, hr, total_gp2, bateria, ll))}`, footerText: `\`\`\`▢ Total Chats : *${totalChat.length}*\`\`\`\n\`\`\`▢ Carregando : *${charge}*\`\`\`\n\`\`\`▢ Bateria : *${baterai}*\`\`\`\n\`\`\`▢ Velocidade : *${latensi.toFixed(4)} segundos*\`\`\`\n\`\`\`▢ Tempo de atividade : *${horaOn(os.uptime())}*\`\`\``, buttons: button9s, headerType: 4, imageMessage: qweriioaByclient.message.imageMessage}
client.sendMessage(from, button9s, MessageType.buttonsMessage, {quoted: tob2})
break

case 'f':
case 'fig':
case 'gif':
case 'figura':
case 'figu':
case 'figurinha':
case 's':
case 'stiker':
case 'sticker':
case 'stickergif':
case 'stikergif':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmediat = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
mediat = await client.downloadAndSaveMediaMessage(encmediat)
ron = getRandom('.webp')
exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
fs.unlinkSync(mediat)
if (err) return reply(`${err}`)
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ron} -o ${ron}`, async (error) => {
if (error) return reply(`${error}`)
client.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:mek})
fs.unlinkSync(ron)
})
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
mediat = await client.downloadAndSaveMediaMessage(encmedia)
ron = getRandom('.webp')
exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
fs.unlinkSync(mediat)
if (err) return reply(`${err}`)
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ron} -o ${ron}`, async (error) => {
if (error) return reply(`${error}`)
client.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:mek})
fs.unlinkSync(ron)
})
})
} else {
reply(`Eii *${pushname}* você precisa reply ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

case 'sfundo':  
addFilter(from)
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia1 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const dlfile1 = await client.downloadMediaMessage(encmedia1)
const bas641 = `data:image/jpeg;base64,${dlfile1.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `🔮 ${NomeDoBot}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `💎 @${pushname}._`
var mantap1 = await convertSticker(bas641, `${dua}`, `${satu}`)
var st = new Buffer.from(mantap1, 'base64');
client.sendMessage(from, st, sticker, {quoted: tob2})
} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
const encmedia2 = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media2 = await client.downloadAndSaveMediaMessage(encmedia2, `./src/sticker/${sender}`)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${SeuNome}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${NomeDoBot}`
const Nombre2 = `${satu}` 
const author101 = `${dua}`
exif.create(Nombre2, author101, `stickwm_${sender}`)
mortandela(from)
await ffmpeg(`${media2}`)
.inputFormat(media2.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`❎ Error : ${err}`)
fs.unlinkSync(media2)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❎ Falha, no momento da conversão de ${type} em adesivo`)
})
.on('end', function () {
console.log('✅ Listo')
exec(`webpmux -set exif ./src/sticker/stickwm_${sender}.exif ./src/sticker/${sender}.webp -o ./src/sticker/${sender}.webp`, async (error) => {
if (error) return reply('error')
sendSticker(from, fs.readFileSync(`./src/sticker/${sender}.webp`), mek)
fs.unlinkSync(media2)
fs.unlinkSync(`./src/sticker/${sender}.webp`)
fs.unlinkSync(`./src/sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decre
ase,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./src/sticker/${sender}.webp`)
} else {
reply(`Você precisa reply ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

case 'st':
addFilter(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
mortandela(from)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function(cmd) {
})
.on('error', function(err) {
reply(linguagem.stick())
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${rano} -o ${rano}`, async(error) => {
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {
quoted: tob2
})
fs.unlinkSync(rano)
})
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
mortandela(from)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function(cmd) {
})
.on('error', function(err) {
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${rano} -o ${rano}`, async(error) => {
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {
quoted: tob2
})
fs.unlinkSync(rano)
})
})
} else {
reply(`Você precisa reply ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

case 'stk':
addFilter(from)
client.updatePresence(from, Presence.composing)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
mortandela(from)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function(cmd) {
})
.on('error', function(err) {
fs.unlinkSync(media)
reply(linguagem.stick())
})
.on('end', function() {
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ran} -o ${ran}`, async(error) => {
if (error) return reply(linguagem.stick())
client.sendMessage(from, fs.readFileSync(ran), sticker, {
quoted: tob2
})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,650)':h='min(min(iw\,ih)\,650)',scale=320:320,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
mortandela(from)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function(cmd) {
})
.on('error', function(err) {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`A conversão de ${tipe} para o sticker falhou`)
})
.on('end', function() {
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ran} -o ${ran}`, async(error) => {
if (error) return reply(linguagem.stick())
client.sendMessage(from, fs.readFileSync(ran), sticker, {
quoted: tob2
})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,320)':h='min(min(iw\,ih)\,320)',scale=200:200,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
.toFormat('webp')
.save(ran)
} else {
reply(`Você precisa reply ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

case 'toimg':
addFilter(from)
client.updatePresence(from, Presence.composing)
if (!isQuotedSticker) return reply(`${emoji_bot} Você precisa marcar um sticker não animado para isso`)
mortandela(from)
tomg = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
medtmg = await client.downloadAndSaveMediaMessage(tomg)
ran = getRandom('.png')
exec(`ffmpeg -i ${medtmg} ${ran}`, (err) => {
fs.unlinkSync(medtmg)
if (err) return reply(`${emoji_bot} falha ao converter sticker em imagem`)
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, image, {quoted: tob2, caption: '🐤'})
fs.unlinkSync(ran)
})
break

case 'togif':
addFilter(from) 
if (!isQuotedSticker) return reply(`${emoji_bot} Você precisa marcar um sticker animado para isso`)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
mortandela(from)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
client.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: tob2, caption: '🐤'})
fs.unlinkSync(mediaaa)
}
break

case 'figupet':
addFilter(from)               
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await client.downloadAndSaveMediaMessage(ger)
figupet = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${figupet.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/petpet?url=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou reply uma imagem para isso')
}
break

case 'arma':
case 'figuarma':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await client.downloadAndSaveMediaMessage(ger)
figuarma = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${figuarma.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuarma1 = `https://api-exteam.herokuapp.com/api/gun?img=${imgtrg}`
exec(`wget ${figuarma1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou reply uma imagem para isso')
}
break

case 'triggered':
case 'figuger':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)  
owgi = await client.downloadAndSaveMediaMessage(ger)
triggered = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${triggered.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuger1 = `https://some-random-api.ml/canvas/triggered?avatar=${imgtrg}`
exec(`wget ${figuger1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou reply uma imagem para isso')
}
break

case 'raimbow':
case 'arcoirirs':
case 'figulgbt':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/rainbow?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou reply uma imagem para isso')
}
break

case 'figuwasted':
addFilter(from)              
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await client.downloadAndSaveMediaMessage(ger)
figuwasted = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${figuwasted.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuwasted1 = `https://api-exteam.herokuapp.com/api/wasted?img=${imgtrg}`
exec(`wget ${figuwasted1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou reply uma imagem para isso')
}
break

case 'preso':
case 'figupreso':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await client.downloadAndSaveMediaMessage(ger)
preso = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${preso.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
preso1 = `https://api-exteam.herokuapp.com/api/jail?img=${imgtrg}`
exec(`wget ${preso1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou reply uma imagem para isso')
}
break

case 'figuinvert':
case 'invert':
case 'figuinvertida':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await client.downloadAndSaveMediaMessage(ger)
figuinvertida = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${figuinvertida.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
figuinvertida1 = `https://api-exteam.herokuapp.com/api/invert?img=${imgtrg}`
exec(`wget ${figuinvertida1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou reply uma imagem para isso')
}
break

case 'figuprocurado':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/procurado?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😔😔`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou reply uma imagem para isso')
}
break

case 'attp':
addFilter(from) 
if (args.length < 1) return reply(resposta.attp)
mortandela(from)
attp2 = await getBuffer(`https://api.xteam.xyz/${marker}?file&text=${encodeURIComponent(body.slice(5))}`)
client.sendMessage(from, attp2, sticker, {quoted: tob2})
break

case 'borra':
case 'figuborrada':
addFilter(from)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mortandela(from)
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/pixelate?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou reply uma imagem para isso')
}
break           
//<~FIM DOS COMANDOS DE FIGURINHAS

//<~COMEÇO DOS COMANDOS AUDIOS
case 'playrs':
addFilter(from) 
const total_gp3 = `${totalchat.length}`
totalChat = await client.chats.all()
charge = charging ? 'sim' : 'não'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await client.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const playrsMenu = await getBuffer(ppimg)
var mediaByclient = await client.prepareMessage(from, playrsMenu, MessageType.image, {thumbnail: null})
var qweriioaByclient = mediaByclient.message["ephemeralMessage"] ? mediaByclient.message.ephemeralMessage : mediaByclient
var button2s = [{buttonId: `${p}grupo`, buttonText: {displayText: '☔ MENU GRUPO 👨🏻‍✈️'}, type: 1}]
var button2s = {contentText: `${(linguagem.playrs(pushname, hr, total_gp3, bateria, ll))}`, footerText: `\`\`\`▢ Total Chats : *${totalChat.length}*\`\`\`\n\`\`\`▢ Carregando : *${charge}*\`\`\`\n\`\`\`▢ Bateria : *${baterai}*\`\`\`\n\`\`\`▢ Velocidade : *${latensi.toFixed(4)} segundos*\`\`\`\n\`\`\`▢ Tempo de atividade : *${horaOn(os.uptime())}*\`\`\``, buttons: button2s, headerType: 4, imageMessage: qweriioaByclient.message.imageMessage}
client.sendMessage(from, button2s, MessageType.buttonsMessage, {quoted: mek})
break

case 'play':
if (args.length < 1) return reply(resposta.play)
mortandela(from)
testeki = args.join(' ')
if (!testeki.endsWith("-doc")){
res = await yts(`${testeki}`).catch(e => {
reply('_[ ! ] Erro ao baixar e reply mídia_')
})
let thumbInfo = `❒「  *${NomeDoBot}*  」
🎯 *Título:* ${res.all[0].title}
📼 *ID Video:* ${res.all[0].videoId}
📆 *Data da postagem :* ${res.all[0].ago}
♨️ *Visualizações :* ${res.all[ 0].views}
⏳ *Duração:* ${res.all[0].timestamp}
📁 *Canal:* ${res.all[0].author.name}
📊 *Link do Canal:* ${res.all[0].author.url}
`
kkkkkkmuitoSexo = await getBuffer(res.all[0].image)
sendButImage(from, `${thumbInfo}`, `${ll}Escolha entre as tres opções.${ll}`, kkkkkkmuitoSexo, [{buttonId: `${p}play6 ${q}`, buttonText: {displayText: `☔ AUDIO 🎵`,}, type: 1,}, {
buttonId: `${p}playvid2 ${q}`, buttonText: {displayText: `🎮 VIDEO 👻`}, type: 1}, {buttonId: `${p}play7 ${q}`, buttonText: {displayText: `🎰 DOCUMENTO 📁`}, type: 1}]);
res = await y2mateV(res.all[0].url).catch(e => {
reply('_[ ! ] Erro ao entrar no Y2mate Web *Tente repetir*_')
})
}
break

case 'play1':
addFilter(from) 
if (args.length < 1) return reply(resposta.play)
teks = args.join(' ')
mortandela(from)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] O erro de consulta inserido não existe_')
})
let thumbInfo = `❒「  *Youtube Search*  」
├ *Título :* ${res.all[0].title}
├ *ID de vídeo :* ${res.all[0].videoId}
├ *Carregado em :* ${res.all[0].ago}
├ *Visualizações :* ${res.all[0].views}
├ *Duração :* ${res.all[0].timestamp}
├ *Canal :* ${res.all[0].author.name}
└ *Link do canal :* ${res.all[0].author.url}

*_Aguarde o processo de upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Erro ao entrar no Y2mate Web * Tente repetir*_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
break

case 'play2':
addFilter(from)    
if (args.length < 1) return reply(resposta.play)
mortandela(from)
anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${q}`)
lagu = await getBuffer(anu.result.url)		
client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp3', quoted: mek})
.catch(() => reply(`[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`))
break

case 'play3':
addFilter(from)  
if (args.length < 1) return reply(resposta.play)
mortandela(from)
play_4 = await fetchJson(`https://api-gdr2.herokuapp.com/api/ytplay?q=${q}`)
buffer = await getBuffer(play_4.result.thumb)
lagu = await getBuffer(play_4.result.url)
client.sendMessage(from, buffer, image, {quoted: mek, caption: `${play_4.result.title}`})
client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
.catch(() => reply(`[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`))
break

case 'play3':
addFilter(from) 
if (args.length < 1) return reply(resposta.play)
testeki = body.slice(6)
mortandela(from)
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/play/audio?video=${testeki}`)
lagu = await getBuffer(anu.Link_De_Download)
buffer = await getBuffer(anu.Imagem_Do_Video)
testekkzu = `💎 Título: ${anu.Titulo_Encontrado}\n👾Tamanho: ${anu.Tamanho_Do_Video}\n📥 Duração: ${anu.Duracao_Do_Video}\n📝 Link: ${anu.Link_Do_Video}`
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${testekkzu}`})		
client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
.catch(() => reply(`[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`))
break

case 'play4':
addFilter(from) 
if (args.length < 1) return reply(resposta.play)
hay = body.slice(6)
mortandela(from)
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=S38aL2CO2Ez4wZjJWxD2vaJKKrC&q=${hay}`)
lagu = await getBuffer(anu.result.url_audio)
client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
.catch(() => reply(`[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`))
break

case 'play5':
addFilter(from) 
if (args.length < 1) return reply(resposta.play)
mortandela(from)
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/play/audio?video=${q}`)
lagu = await getBuffer(anu.Link_De_Download)		
kapaclientAqui = `💎 Título: ${anu.Titulo_Encontrado}\n👾Canal: ${anu.Link_Do_Video}\n📥 Duração: ${anu.Duracao_Do_Video}\n📝 Tamanho: ${anu.Tamanho_Do_Video}`
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
client.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: `${kapaclientAqui}`})
client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
.catch(() => reply(`[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`))
break

case 'play6':
addFilter(from) 
if (args.length < 1) return reply(resposta.play)
teks = args.join(' ')
mortandela(from)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] O erro de consulta inserido não existe_')
})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Erro ao entrar no Y2mate Web * Tente repetir*_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
break

case 'play7':
addFilter(from) 
if (args.length < 1) return reply(resposta.play)
teks = args.join(' ')
mortandela(from)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] O erro de consulta inserido não existe_')
})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Erro ao entrar no Y2mate Web * Tente repetir*_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/m4a', filename: res[0].output})
}
break

case 'playvid':
addFilter(from) 
if (args.length < 1) return reply(resposta.play)
teks = args.join(' ')
mortandela(from)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Erro ao baixar e reply mídia_')
})
reply(`.•♫•♬• Playing ${res.all[0].title} •♬•♫•.`)
let thumbInfo = `❒「  *${NomeDoBot}*  」
🎯 *Título:* ${res.all[0].title}
📼 *ID Video:* ${res.all[0].videoId}
📆 *Data da postagem :* ${res.all[0].ago}
♨️ *Visualizações :* ${res.all[0].views}
⏳ *Duração:* ${res.all[0].timestamp}
📁 *Canal:* ${res.all[0].author.name}
📊 *Link do Canal:* ${res.all[0].author.url}

*_Aguarde o processo de download....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateV(res.all[0].url).catch(e => {
reply('_[ ! ] Erro ao entrar no Y2mate Web *Tente repetir*_')
})
sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
}
break

case 'playvid1':  
addFilter(from) 
if (args.length < 1) return reply(resposta.play)
mortandela(from)
playvideoByclient = q
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/play/video?video=${playvideoByclient}`)   
lagu = await getBuffer(anu.Link_De_Download)
client.sendMessage(from, lagu, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
.catch(() => reply(`[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`))
break

case 'playvid2':
addFilter(from) 
if (args.length < 1) return reply(resposta.play)
mortandela(from)
if (!q.endsWith("-doc")){
res = await yts(`${q}`).catch(e => {
reply('_[ ! ] Erro ao baixar e reply mídia_')
})
res = await y2mateV(res.all[0].url).catch(e => {
reply('_[ ! ] Erro ao entrar no Y2mate Web *Tente repetir*_')
})
sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
}
break

case 'tomp3':
addFilter(from) 
client.updatePresence(from, Presence.composing)
if (!isQuotedVideo) return reply(`Marque um vídeo com ${p}tomp3`)
mortandela(from)
mitri = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
duh = await client.downloadAndSaveMediaMessage(mitri)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
fs.unlinkSync(duh)
if (err) return reply('❌falha ao converter video para mp3❌')
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
break

case 'rapido':  
case 'nightcore':
addFilter(from)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(`${emoji_bot} , Adicionando efeito rápido....`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bmedia = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bmedia} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bmedia)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break   

case 'devagar': 
case 'slow':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(`${emoji_bot} Aguarde, Adicionando efeito devagar....`)
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await client.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'esquilo':
addFilter(from) 
if (!isQuotedAudio) return reply('Marque um áudio')
reply(`${emoji_bot} Aguarde, Adicionando efeito esquilo....`)
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await client.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'gemuk': 
case 'gigante':
addFilter(from)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(`${emoji_bot} Aguarde, Adicionando efeito gigante....`)
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await client.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'fast': 
case 'rapid':
addFilter(from)
if (!isQuotedAudio) return reply('Marque um áudio')
reply(`${emoji_bot} Aguarde, Adicionando efeito rapido 3x....`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
amedia = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${amedia} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(amedia)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'baixo': 
case 'bass':
addFilter(from) 
if (!isQuotedAudio) return reply('Marque um áudio')
reply(`${emoji_bot} Aguarde, Adicionando efeito baixo 50hz....`) 
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'earrape': 
case 'estourar':
addFilter(from)       
if (!isQuotedAudio) return reply('Marque um áudio')
reply(`${emoji_bot} Aguarde, Adicionando efeito estorado....`)
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'ytsearch':
addFilter(from)
if (args.length < 1) return reply(resposta.play)
const srch = args[0];
try {
var aramas = await yts(srch);
} catch {
return await client.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE SEARCH* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '❏ Title: ' + video.title + '\n'
ytresult += '❏ Link: ' + video.url + '\n________________________\n\n'
});
ytresult += `◩ *${NomeDoBot}*`
await client.sendMessage(from, tbuff, image, {thumbnail: fs.readFileSync('./base de dados/lib/bot/fotos/logo.jpeg'),quoted: mek, caption: ytresult})
break

case 'sombrio':
addFilter(from) 
encmmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mehdia = await client.downloadAndSaveMediaMessage(encmmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mehdia} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mehdia)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(ran)
})
break

//<~COMEÇO DOS COMANDOS DE JOGOS
case 'jogos':
addFilter(from) 
const total_gp4 = `${totalchat.length}`
totalChat = await client.chats.all()
charge = charging ? 'sim' : 'não'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await client.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const jogosMenu = await getBuffer(ppimg)
var mediaByclient = await client.prepareMessage(from, jogosMenu, MessageType.image, {thumbnail: null})
var qweriioaByclient = mediaByclient.message["ephemeralMessage"] ? mediaByclient.message.ephemeralMessage : mediaByclient
var button3s = [
{buttonId: `${p}Criador`, buttonText: {displayText: '☔ MENU CRIADOR 🌙'}, type: 1},
]
var button3s = {contentText: `${(linguagem.jogos(pushname, hr, total_gp4, bateria, ll))}`, footerText: `\`\`\`▢ Total Chats : *${totalChat.length}*\`\`\`\n\`\`\`▢ Carregando : *${charge}*\`\`\`\n\`\`\`▢ Bateria : *${baterai}*\`\`\`\n\`\`\`▢ Velocidade : *${latensi.toFixed(4)} segundos*\`\`\`\n\`\`\`▢ Tempo de atividade : *${horaOn(os.uptime())}*\`\`\``, buttons: button3s, headerType: 4, imageMessage: qweriioaByclient.message.imageMessage}
client.sendMessage(from, button3s, MessageType.buttonsMessage, {quoted: tob2})
break
case 'jogodavelha':
case'velha':
					enviar('Lembre-se ao terminar uma partida , use o comando .resetavelha , para poder iniciar outro jogo.')
						if(!isGroup) return reply('comando apenas para grupos')
                    if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
                         const boardnow = setGame(`${from}`);
                         const matrix = boardnow._matrix;
                         const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
     [❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
     ❌ : @${boardnow.X}
     ⭕ : @${boardnow.O}
     
     Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
     
          ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
          ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
          ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
     
     `;
                         client.sendMessage(from, chatMove, MessageType.text, {
                              quoted: tob2,
                              contextInfo: {
                                   mentionedJid: [
                                        boardnow.X + "@s.whatsapp.net",
                                        boardnow.O + "@s.whatsapp.net",
                                   ],
                              },
                         });
                         return;
                    }
                    if (argss.length === 1)
                         return enviar(
                              `*⟅❗⟆ Jogue com Alguém!!!!*
*para inicar a partida : ${p + command} @membro do gp*`
                         );
                    const boardnow = setGame(`${from}`);
                    console.log(`Start Tictactore ${boardnow.session}`);
                    boardnow.status = false;
                    boardnow.X = sender.replace("@s.whatsapp.net", "");
                    boardnow.O = argss[1].replace("@", "");
                    fs.writeFileSync(
                         `./lib/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
     @${sender.replace(
                         "@s.whatsapp.net",
                         ""
                    )} _está te desafiando para uma partida de jogo da velha..._
     
     _[ ${argss[1]} ] Use *『aceitar』* para aceitar ou *『recusar』* para não aceitar..._
     `;
                    client.sendMessage(from, strChat, MessageType.text, {
                         quoted: tob2,
                         contextInfo: {
                              mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
                         },
                    });
                 
                    break
                      case  'resetavelha':
                      case 'reseta':
                    if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {

                         fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");

                         enviar(`Jogo da velha resetado com sucesso nesse grupo!`);

                    } else {

                         enviar(`Não a nenhuma sessão em andamento...`);

                    }

                    break
case 'slot':
case 'sexokslot':
var somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
ppg = Math.floor(Math.random() * 13) + 349
if ((somtoy == '🥑 : 🥑 : ??') ||(somtoy == '🍉 : 🍉 : 🍉') ||(somtoy == '🍓 : 🍓 : 🍓') ||(somtoy == '🍎 : 🍎 : 🍎') ||(somtoy == '🍍 : ?? : 🍍') ||(somtoy == '🥝 : 🥝 : 🥝') ||(somtoy == '🍑 : 🍑 : 🍑') ||(somtoy == '?? : 🥥 : ??') ||(somtoy == '🍋 : 🍋 : 🍋') ||(somtoy == '🍐 : 🍐 : 🍐') ||(somtoy == '🍌 : 🍌 : 🍌') ||(somtoy == '🍒 : 🍒 : 🍒') ||(somtoy == '🔔 : 🔔 : 🔔') ||(somtoy == '🍊 : ?? : 🍊') ||(somtoy == '🍇 : 🍇 : 🍇')) {
var vitr = "Você ganhou!!!"
} else {
var vitr = "Você perdeu..."
}
if (!bater) {
bateriaLibid = `${tempo}`
}
if (bater) {
bateriaLibid = `bateria em : *${bater}*`
}
const buttons = [{buttonId: `${p}sexokslot`, buttonText: {displayText: `🎰 NEXT SLOT 🎰`}, type: 1}]
const buttonMessage = { contentText: 
`Consiga 3 iguais para ganhar
╭╾╾╾╾ ≪ •❈• ≫ ╾╾╾╾╗
║         [💰SLOT💰 | 777 ]        
║                                             
║                                             
║           ${somtoy}  ◄━━┛
║            
║                                           
║          [💰SLOT💰 | 777 ]        
╚╾╾╾╾ ≪ •❈• ≫ ╾╾╾╾╝

${vitr}`, footerText: `${bateriaLibid}`, buttons: buttons, headerType: 1}
if (vitr == "Você ganhou!!!") {
setTimeout( () => {
reply(`Você ganhou ${ppg} em xp!!!`)
}, 1100)
}
client.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: tob2})
break

case 'preto':
case 'feio':
case 'lixo':
case 'burro':
case 'gordo':
case 'pobre':
case 'corno':
case 'bonito':
case 'macaco':
case 'gostoso':
addFilter(from)
if (!isGroup) return reply(linguagem.group())
d = []
teks = `O mais *${comando}* é : `
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `@${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
break

case 'amongus':
addFilter(from)
if (!isGroup) return reply(linguagem.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus = 
`.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} was E j e c t e d
                  1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
mentions(`${sus}`, mentioned, true)
break

case 'getn':
addFilter(from)
if (!isGroup) return reply(linguagem.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = client.contacts[ambl] != undefined ? client.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : client.contacts[ambl].notify || client.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(sname)
break

case 'getname':
addFilter(from)
if (!isGroup) return reply(linguagem.group())
if (args.length < 1) return reply(`Tag alguém`)
mentioned = mek.message[type].contextInfo.mentionedJid[0]
const arroz = client.contacts[mentioned] != undefined ? client.contacts[mentioned].vname || client.contacts[mentioned].notify: undefined
nome = `${arroz}`
client.sendMessage(from, nome, text, {quoted: mek})	
break

case 'dado':
addFilter(from)
if (!isGroup) return reply(linguagem.group())
const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./base de dados/datauser/dados/'+dadu+'.webp')
client.sendMessage(from, dador, sticker, {quoted: mek})
break

case 'tagme':
addFilter(from)
if (!isGroup) return reply(linguagem.group())
const tagme = {text: `@${sender.split("@")[0]} 🧙‍♂️`, contextInfo: {mentionedJid: [sender]}}
client.sendMessage(from, tagme, text)
break

case 'cassino':
addFilter(from)
if (!isGroup) return reply(linguagem.group())
client.updatePresence(from, Presence.composing) 
const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : 🍒',
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : ??',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		
const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Você ganhou!!!"
} else {
var Vitória = "Você perdeu..."
}
if (!bater) {
bateriaLibid = `bateria: Não disponível!`
}
if (bater) {
bateriaLibid = `bateria em : *${bater}*`
}
const cassinoButtons = [{buttonId: `${p}cassino`, buttonText: {displayText: `dnv`}, type: 1}]
const buttonkMessage = {
contentText: 
`
┏━━━━❪🎰❫━━━━
┣►${somtoy2}◄┛
┗━━━━❪💰❫━━━━

*${Vitória}*`,
footerText: `${bateriaLibid}`, buttons: cassinoButtons, headerType: 1}
client.sendMessage(from, buttonkMessage, MessageType.buttonsMessage, {quoted: tob2})
if (Vitória == "Você ganhou!!!") {
dinherocassino = Math.floor(Math.random() * 14) + 10000
addKoinUser(sender, dinherocassino)
setTimeout( () => {
reply(`Parabéns você ganhou *${dinherocassino}* dinheiro 💰💎`)
}, 1100)
}
break

case "ppt": 
addFilter(from)
if (!isGroup) return reply(linguagem.group())
if (args.length < 1) return reply(linguagem.tterro())
ppt = ["pedra","papel","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 13) + 349
pptb = ppy
pph = `Você ganhou ${ppg} em xp`
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(linguagem.tterro())
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota" ) {
var tes = "A vitória é do bot"
}
if (vit == "empate" ) {
var tes = "O jogo terminou em empate"
}
reply(`Bot jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break

case 'gado':
addFilter(from)
if (!isGroup) return reply(linguagem.group())
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Você é:\n\n${gado}`
reply(hisil)
break

case 'sn':
addFilter(from)
if (!isGroup) return reply(linguagem.group())
const sn = ['sim', 'não']
gosto = body.slice(3)
if (args.length < 1) return client.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${p}sn O ${SeuNome} é um baiano preguiçoso?`, text, {quoted: tob2})
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
reply(hasil)
break

case 'chance':
addFilter(from)
if (!isGroup) return reply(linguagem.group())
client.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
if (args.length < 1) return client.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${p}chance do ${SeuNome} ser um trouxa`, text, {quoted: mek})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(7)}\n\né de... ${random}%`
client.sendMessage(from, hasil, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
break

case 'ttt':
addFilter(from) 
const limitrl = getLimit(sender, daily)
if (!isGroup) {
reply(linguagem.group())
} else if (tttset.tttstatus == "on") {
reply(`
「❗ESPERE❗ 」

 Alguém já está jogando no momento
 Por favor aguarde 8 minutos`)
} else if (tttset.waitingTime == "on") {
reply(`
「❗ESPERE 8 MINUTOS❗ 」

Alguém jogou recentemente
Por favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`
「❗Defina a dificuldade❗ 」

${p}ttt easy
Dificuldades: easy, normal... 
hard e impossible....`)
} else if (limitrl !== undefined && cdd - (Date.now() - limitrl) > 0) {
reply(`
「❗ESPERE❗」

Opa, deixe seus amigos jogarem.
também, tente novamente Em 8 minutos.`)
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`╭◪「❗COMEÇOU❗ 」╰───────────────╮  \n╭───────────────╯\n├❏ O Jogo Começou!!!\n├❏ Modo: ${tttset.tttdifficulty}\n╰───────────────╯`, text, tescuk, crtt)
client.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
client.sendMessage(from,`Caso não saiba como jogar digite: ${p}ttthelp`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 240000) //4 minutos
addLimit(sender, daily)
}
break

case 'level':
addFilter(from)
if (!isGroup) return reply(linguagem.group())
if (!isLevelingOn) return reply(resposta.leveis)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return reply(linguagem.levelnol())
var requiredXp = 5 * Math.pow(userLevel, (5 / 2)) + 50 * userLevel + 100
var getLevel = getLevelingLevel(sender)
const level_quetod = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "caption": `❲👾️-❪ 𝙻ᴇᴠᴇʟ ᴜᴘ ❫-👾❳\n⪧𝖳𝚊𝚐: @${sender.split('@')[0]}\n${up_porcenntagem}`}}}
client.sendMessage(from, leveltab(sender, pushname, userLevel, userXp, patt, getLevel), text, {quoted: level_quetod, contextInfo: {mentionedJid: [sender]}})
.catch(async(err) => {
console.error(err)
await reply(`Error!\n${err}`)
})
break

case 'ranklevel':
case 'nivelrall':
addFilter(from)
if (!isGroup) return reply(linguagem.group())
if (!isLevelingOn) return reply(resposta.leveis)
let userh = _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = `*〈👾 Rᴀɴᴋ Lᴇᴠᴇɪs 👾〉*\n\n`
let nom = 0
try {
for (let i = 0; i < 5; i++) {
nom++
leaderboardlvl += `⪧ ⃝༘⃕ꪶ📱ꫂ @${userh[i].id.replace('@s.whatsapp.net', '')}\n⪧ ⃝༘⃕ꪶ👾ꫂ 𝚇ᴘ: ${userh[i].xp}\n⪧ ⃝༘⃕ꪶ🌀ꫂ 𝙻ᴇᴠᴇʟ: ${userh[i].level}\n\n`
}
client.sendMessage(from, leaderboardlvl, text, {quoted: mek})
} catch (err) {
console.error(err)
await reply(`pelo menos 10 usuários para poder acessar o banco de dados`)
}
break

case 'v':
addFilter(from) 
tttset.playertest = sender
if (!isGroup) {
reply(linguagem.group())
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${p}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${p}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break
}
client.sendMessage(from, `『❗』Parabens *${pushname}* Você ganhou no jogo da velha\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `『❗』Parabens *${pushname}* Você Ganhou.`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "??"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
client.sendMessage(from, `『❗』Parabens *${pushname}* Você perdeu.\n\n➣  PUNIÇÃO: +${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `『❗』Vitoria da *${NomeDoBot}* Você Perdeu amigo!`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "??"; esp.b3 = "🔲"
esp.c1 = "??"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
client.sendMessage(from, `『❗』Empate entre *${pushname}* e *${NomeDoBot}*\n\n ➣ NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
client.sendMessage(from, `『❗』Empate entre *${pushname}* e *${NomeDoBot}*`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break

case 'ttthelp':
addFilter(from) 
client.sendMessage(from, ttthelp(p), text, {quoted:mek})
break

case 'tttme':
addFilter(from) 
if (!isGroup) return reply(linguagem.group())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
client.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
break

case 'tttrank':
addFilter(from) 
if (!isGroup) return reply(linguagem.group())
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 7; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 3) {board += `${i + 1}º 🏆 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} ??\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 4) {board += `${i + 1}º 💎 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 5) {board += `${i + 1}º 🐂 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} ??\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 6) {board += `${i + 1}º 🐂 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await client.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: mek})
}
break

case 'pau':
addFilter(from)
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
if (tamanho < 13 ) {pp = 'só a fimose'} else if (tamanho == 13 ) {pp = 'passou da média😳'} else if (tamanho == 14 ) {pp = 'passou da média😳'} else if (tamanho == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {pp = 'vai procurar petróleo com isso?'
}
hasil = `Seu pau tem ${random}cm\n\n${pp}`
reply(hasil)
break
   
case 'gay':
addFilter(from)
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 38 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não???'} else if (boiola > 51) {bo = 'você é gay??'
}
hasil = `Você é ${random}% gay\n\n${bo}`
reply(hasil)
break

case 'roleta':
addFilter(from) 
const tiro = ["vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","pow","pow"]
const figr = ["pattta1","pattta2","pattta3"]
tpa = tiro[Math.floor(Math.random() * (tiro.length))]	
tpb = figr[Math.floor(Math.random() * (figr.length))]
figb = fs.readFileSync('./base de dados/database/figurinhas/'+tpb+'.webp')
if (tpa == "vazio") {
var morte = "Você teve sorte dessa vez, o tambor estava vazio."
} else if (tpa == "pow") {
var morte = "Tinha uma bala no tambor, POW!"
}
if (morte == "Tinha uma bala no tambor, POW!") {
setTimeout( () => {
client.sendMessage(from, figb, sticker, {quoted: tob2})
}, 2100)
}
setTimeout( () => {
client.sendMessage(from, morte, text, {quoted: tob2})
}, 2300)
break

case 'caracoroa':
addFilter(from) 
const cara = fs.readFileSync('./base de dados/datauser/cara/cara.webp');
const coroa = fs.readFileSync('./base de dados/datauser/cara/coroa.webp');
cararo = ["cara", "coroa"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
reply(`você conseguiu: ${fej}`)
cararoa = fs.readFileSync('./base de dados/datauser/cara/'+fej+'.webp')
client.sendMessage(from, cararoa, sticker, {quoted: tob2})
break
//<~FIM DOS COMANDOS DE JOGOS

//<~COMEÇO DOS HENTAIS
case 'animes':
addFilter(from) 
const total_gp6 = `${totalchat.length}`
var totalchat = `${totalchat.length}`
totalChat = await client.chats.all()
charge = charging ? 'sim' : 'não'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await client.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const animesMenu4431 = await getBuffer(ppimg)
var mediaByclient = await client.prepareMessage(from, animesMenu4431, MessageType.image, {thumbnail: null})
var qweriioaByclient = mediaByclient.message["ephemeralMessage"] ? mediaByclient.message.ephemeralMessage : mediaByclient
var button6s = [{buttonId: `${p}bankloja`, buttonText: {displayText: '💲 MENU BANKLOJA 💱'}, type: 1}]
var button6s = {contentText: `${(linguagem.animes(pushname, hr, total_gp6, bateria, ll))}`, footerText: `\`\`\`▢ Total Chats : *${totalChat.length}*\`\`\`\n\`\`\`▢ Carregando : *${charge}*\`\`\`\n\`\`\`▢ Bateria : *${baterai}*\`\`\`\n\`\`\`▢ Velocidade : *${latensi.toFixed(4)} segundos*\`\`\`\n\`\`\`▢ Tempo de atividade : *${horaOn(os.uptime())}*\`\`\``, buttons: button6s, headerType: 4, imageMessage: qweriioaByclient.message.imageMessage}
client.sendMessage(from, button6s, MessageType.buttonsMessage, {quoted: mek})
break

case 'zoro':
case 'nami':
case 'carrot':
case 'buggy':
case 'shanks': 
case 'sakura':
case 'hinata':
case 'madara': 
case 'sasuke':
case 'obito':
case 'shikamaru':
case 'shikaku':
case 'shikadai':
case 'asuma': 
case 'luffy':
addFilter(from)
mortandela(from)
teks = `${comando}`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: null})
}
}
break

case 'ace':
mortandela(from)
pw = ["wallpaper ace", "ace"]
teks = pw[Math.floor(Math.random() * pw.length)]
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: null})
}
}
break

case 'holo':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`) 
res = axios.get(`https://nekos.life/api/v2/img/holo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'erofeet':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/erofeet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'trap':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/trap`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'eron':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/eron`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'anal':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/anal`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'ero':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/ero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'cum':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/cum_jpg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'les':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/les`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'holoero':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/holoero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case  'hentai':
addFilter(from) 
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
try {
tk = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(tk.url)
client.sendMessage(sender, buffer, image, {quoted: mek, thumbnail:null})
} catch (e) {
reply(linguagem.erro())
}
break

case 'eroyuri':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/eroyuri`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'hentain':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/hentai`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case  'neko':
addFilter(from)
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
try {
znn = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(znn.url)
client.sendMessage(sender, buffer, image, {caption: `${comando}, certo?`, quoted: mek, thumbnail:null})
} catch (e) {
reply(linguagem.erro())
}
break

case 'lewd':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/lewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'solog':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/solog`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'feet':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/feet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'feetg':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/feetg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'classic':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/classic`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'erokemo':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/erokemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'futanari':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/futanari`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'femdom':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/femdom`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'blowjob':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/blowjob`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'pwankg':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/pwankg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'lewdk':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/lewdk`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case'boobs':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/boobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'spank':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/spank`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'trapnime':
addFilter(from)
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
try {
clientr = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(clientr.url)
client.sendMessage(sender, buffer, image, { quoted: mek, thumbnail:null})
} catch (e) {
reply(linguagem.erro())
}
break

case 'solo':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/solo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'erok':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/erok`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'feed':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/feed`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'hololewd':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/hololewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break

case 'lewdkemo':
addFilter(from)
try {
if (!isGroup) mortandela(from)
if (isGroup) reply(`『❗』${comando} enviado no seu pv`)
res = axios.get(`https://nekos.life/api/v2/img/lewdkemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
client.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
reply(linguagem.erro())
}
break
//<~FIM DOS COMANDOS DE HENTAI

//<~COMEÇO DOS COMANDOS ANIMES
case 'bully':
mortandela(from)
try {
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/anime/valentao`)
let contentt = await getBuffer(anu.Resultado)
const media = await client.prepareMessage(from, contentt, MessageType.image, { thumbnail: null})
let qweriio = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
const buttons1 = [{buttonId: `${p + comando}`, buttonText: {displayText: '🍻 ＰＲＯＸＩＭＡ🌙'}, type: 1}, {buttonId: `${p}Libid`, buttonText: {displayText: '🍻 ＮＥＸＴ ＬＯＬＩ🌙'}, type: 1}]
const btn1 = {contentText: `*『${NomeDoBot}™』*\n\n${ll}${pushname} Quer outra imagem? ._. ${ll}`, footerText: `${mtSexo}`, buttons: buttons1, headerType: 4, imageMessage: qweriio.message.imageMessage}
client.sendMessage(from, btn1, MessageType.buttonsMessage, {quoted: mek})
} catch (e) {
reply(linguagem.erro())
reply(`${e}`)
}
break

case 'libid':
mortandela(from)
try {
nextloliCmd = await getBuffer(`https://source-apis.herokuapp.com/loli`)
var mediakkkclient = await client.prepareMessage(from, nextloliCmd, MessageType.image, { thumbnail: null})
var qweriioByclient = mediakkkclient.message["ephemeralMessage"] ? mediakkkclient.message.ephemeralMessage : mediakkkclient
const nextloliByclient = [{buttonId: `${p}libid`, buttonText: {displayText: '🍻 ＰＲＯＸＩＭＡ🌙'}, type: 1}, {buttonId: `${p}waifu`, buttonText: {displayText: '🍻 ＮＥＸＴ ＷＡＩＦＵ🌙'}, type: 1}]
const btn1Byclient = {contentText: `*『${NomeDoBot}™』*\n\n${ll}${pushname} Quer outra imagem? ._. ${ll}`, footerText: `${mtSexo}`, buttons: nextloliByclient, headerType: 4, imageMessage: qweriioByclient.message.imageMessage}
client.sendMessage(from, btn1Byclient, MessageType.buttonsMessage, {quoted: tob2})
} catch (e) {
reply(linguagem.erro())
}
break

case 'waifu':
mortandela(from)
try {
var nextloliCmd = await getBuffer(`https://leyscoders-api.herokuapp.com/api/random-waifu?apikey=IkyOgiwara`)
var mediakkkclient = await client.prepareMessage(from, nextloliCmd, MessageType.image, { thumbnail: null})
var qweriioByclient = mediakkkclient.message["ephemeralMessage"] ? mediakkkclient.message.ephemeralMessage : mediakkkclient
const nextwaifuByclient = [{buttonId: `${p}waifu`, buttonText: {displayText: '🍻 ＰＲＯＸＩＭＡ🌙'}, type: 1}, {buttonId: `${p}abraço`, buttonText: {displayText: '🍻 ＮＥＸＴ ＡＢＲＡＣ̧Ｏ🌙'}, type: 1}]
const btn1waiguByclient = {contentText: `*『${NomeDoBot}™』*\n\n${ll}${pushname} Quer outra imagem? ._. ${ll}`, footerText: `${mtSexo}`, buttons: nextwaifuByclient, headerType: 4, imageMessage: qweriioByclient.message.imageMessage}
client.sendMessage(from, btn1waiguByclient, MessageType.buttonsMessage, {quoted: tob2})
} catch (e) {
reply(linguagem.erro())
}
break

case 'megumin':
mortandela(from)
try {
clientu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
var nextloliCmd = await getBuffer(clientu.url)
var mediakkkclient = await client.prepareMessage(from, nextloliCmd, MessageType.image, { thumbnail: null})
var qweriioByclient = mediakkkclient.message["ephemeralMessage"] ? mediakkkclient.message.ephemeralMessage : mediakkkclient
var meguminByclient = [{buttonId: `${p + comando}`, buttonText: {displayText: '🍻 ＰＲＯＸＩＭＡ🌙'}, type: 1}, {buttonId: `${p}nekoa`, buttonText: {displayText: '🍻 ＮＥＸＴ ＮＥＫＯＡ🌙'}, type: 1}]
const meguminByclientnByclient = {contentText: `*『${NomeDoBot}™』*\n\n${ll}${pushname} Quer outra imagem? ._. ${ll}`, footerText: `${mtSexo}`, buttons: meguminByclient, headerType: 4, imageMessage: qweriioByclient.message.imageMessage}
client.sendMessage(from, meguminByclientnByclient, MessageType.buttonsMessage, {quoted: tob2})
} catch (e) {
reply(linguagem.erro())
}
break

case 'pinterest':
addFilter(from)
mortandela(from)
teks = `${q}`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: null})
}
}
break
//<~FIM DOS COMANDOS DE ANIMES

//<~COMEÇO DOS COMANDOS DO DONO
case 'criador':
addFilter(from) 
const total_gp7 = `${totalchat.length}`
totalChat = await client.chats.all()
charge = charging ? 'sim' : 'não'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await client.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const criadorMenu = await getBuffer(ppimg)
var mediaByclient = await client.prepareMessage(from, criadorMenu, MessageType.image, {thumbnail: null})
var qweriioaByclient = mediaByclient.message["ephemeralMessage"] ? mediaByclient.message.ephemeralMessage : mediaByclient
var button4s = [{buttonId: `${p}Infobot`, buttonText: {displayText: '🌙 MENU INFOBOT 🌳️'}, type: 1}]
var button4s = {contentText: `${(linguagem.dono(pushname, hr, total_gp7, bateria, ll))}`, footerText: `\`\`\`▢ Total Chats : *${totalChat.length}*\`\`\`\n\`\`\`▢ Carregando : *${charge}*\`\`\`\n\`\`\`▢ Bateria : *${baterai}*\`\`\`\n\`\`\`▢ Velocidade : *${latensi.toFixed(4)} segundos*\`\`\`\n\`\`\`▢ Tempo de atividade : *${horaOn(os.uptime())}*\`\`\``, buttons: button4s, headerType: 4, imageMessage: qweriioaByclient.message.imageMessage}
client.sendMessage(from, button4s, MessageType.buttonsMessage, {quoted: tob2})
break

case 'bateria':
addFilter(from)
if (!isOwner) return  reply(linguagem.ownerB())
client.sendMessage(from, linguagem.bateria(baterai, porcentagem), text, {contextInfo: fotothumb, quoted: ftrol})
break

case 'bc':
addFilter(from)
if (!isOwner) return  reply(linguagem.ownerB())
if (args.length < 1) return reply('Cadê o texto?')
clients = await client.chats.all()
for (let _ of clients) {
client.sendMessage(_.jid, `${q}`, text, {contextInfo :{text: 'hi', "forwardingScore": 1000000000, isForwarded: true, sendEphemeral: true, "externalAdenviar": {"title": `Transmissão De Aviso`, "body": "", "previewType": "PHOTO", "thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg", "thumbnail": img2}}})
}
reply('Transmissão enviada com sucesso')
break

case 'bcstik':
case 'bcfig':
addFilter(from)
if (!isOwner) return reply('Quem é Você, Você não é meu dono ???')
if (!isQuotedSticker) return reply('Marque uma figurinha!!!')
bcsticker = await client.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await client.downloadMediaMessage(encmedia)
for (let _ of bcsticker) {
client.sendMessage(_.jid, bc, sticker) 
}
reply(`Figurinha envianda para: ${totalchat.length} chats`)
}
break

case 'clone':
addFilter(from) 
if (!isGroup) return reply(linguagem.group())
if (!isOwner) return  reply(linguagem.ownerB())
if (args.length < 1) return reply('Mencione quem devo roubar a foto de perfil')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await client.getProfilePicture(id)
buffer = await getBuffer(pp)
client.updateProfilePicture(botNumber, buffer)
mentions(`Roubei a foto de perfil de: @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply('ocorreu um erro')
}
break

case 'block':
addFilter(from)
client.updatePresence(from, Presence.composing)
if (!isGroup) return reply(linguagem.group())
if (!isOwner) return reply(linguagem.ownerB(ownerName))
client.blockUser(`${body.slice(8)}@c.us`, "add")
client.sendMessage(from, `Usuário bloqueado`, text, {quoted: tob2})
break

case 'ban':
case 'darban':
addFilter(from) 
if (!isGroup) return reply(linguagem.group())
if (!isOwner) return  reply(linguagem.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./base de dados/datauser/banned.json', JSON.stringify(ban))
susp = `『❗』@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot`
mentions(`${susp}`, mentioned, true)  
break

case 'unban':
case 'tirarban':
addFilter(from) 
if (!isGroup) return reply(linguagem.group())
if (!isOwner) return  reply(linguagem.ownerB())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./base de dados/datauser/banned.json', JSON.stringify(ban))
susp = `『❗』@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot`
mentions(`${susp}`, mentioned, true)  
break

case 'q': 
if (!m.quoted) return reply('responder à mensagem!')
let qse = client.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('a mensagem que você está respondendo não contém uma resposta!')
await qse.quoted.copyNForward(m.chat, true)
break

case 'antipalavras':
addFilter(from)
if (!isGroup) return reply(linguagem.group())
if (!isGroupAdmins && !isOwner) return reply(linguagem.admin())
//if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return reply(`[❗]ativar/desativar, Exemplo ${p + comando} ativar`)
if (args[0] === 'on') {
if (isPalavrão) return reply('*Já esta ativado...*')
palavrão.push(from)
fs.writeFileSync('./base de dados/database/arquivos/palavrão.json', JSON.stringify(palavrão))
reply(mess.only.clientreplay)
} else if (args[0] === 'off') {
palavrão.splice(from, 1)
fs.writeFileSync('./base de dados/database/arquivos/palavrão.json', JSON.stringify(palavrão))
reply(mess.only.clientreplayoff)
} else {
reply(`[❗]on/off, Exemplo ${p + comando} on`)
}
break

case 'addpalavra':
addFilter(from)
if (!isOwner) return  reply(linguagem.ownerB())
if (!isPalavrão) return reply(`『❗』A função anti palavras está desativada`)
if (args.length < 1) return reply( `Use assim : ${p + comando} [palavra]. exemplo ${p + comando} puta`)
const bw = body.slice(12)
palavra.push(bw)
fs.writeFileSync('./base de dados/lib/palavras.json', JSON.stringify(palavra))
await reply(`Palavra *${q}* adicionado na lista com sucesso!`)
break

case 'delpalavra':
addFilter(from)
if (!isOwner) return  reply(linguagem.ownerB())
if (!isPalavrão) return reply(`『❗』A função anti palavras está desativada`)
if (args.length < 1) return reply( `Use assim : ${p + comando} [palavra]. exemplo ${p + comando} puta`)
let dbw = body.slice(12)
var position = palavra.indexOf(dbw)
palavra.splice(position, 1)
fs.writeFileSync('./base de dados/lib/palavras.json', JSON.stringify(palavra))
await reply(`Palavra *${q}* removida da lista com sucesso!`)
break 

case 'listname':
addFilter(from)
if (!isOwner) return  reply(linguagem.ownerB())
if (!isPalavrão) return reply(`『❗』A função anti palavras está desativada`)
teks = `Lista de palavras: \n\n`
for (let ahzhgxnshxg of palavra) {
teks += `⪧ ${ahzhgxnshxg}\n`
}
teks += `\nTotal : ${palavra.length}\nUse o comando\n${p}Addpalavra『Nome』\nPara adicionar texto\n\n E use o comando\n${p}Delpalavra『Nome』\nPara tirar texto`
client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": palavra } })
break

case 'mystat':
addFilter(from)
 if (!isOwner) return reply('Este comando e so pro meu criador')
var groups = client.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = client.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
uptime = process.uptime();
timestamp = speed();
totalChat = await client.chats.all()
charge = charging ? 'sim' : 'não'
listrik = charging ? '⚡' : 'ga di cas'
latensi = speed() - timestamp
let total = math(`${groups.length}*${privat.length}`)
teks = `
き⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟️❗ informações do bot❗⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟️き

き⃟🐋 Velocidade : *${latensi.toFixed(4)} segundos*
き⃟🐋 Tempo ativo : *${temporizado(uptime)}*
き⃟🐋 Total de chats : *${totalChat.length}*
き⃟🐋 Total de grupos : *${groups.length}*
き⃟🐋 Total de pessoas no pv : *${privat.length}*

き⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟️📱 informações do celular📱⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟⃟️き

き⃟🐥 Bateria : *${baterai}*
き⃟🐥 Carregando : *${charge}*
き⃟🐥 Uso da ram : *${ram2}*
き⃟🐥 Plataforma : *${os.platform()}*
き⃟🐥 Nome do host : *${os.hostname()}*
き⃟🐥 Versão do celular : *${client.user.phone.os_version}*
き⃟🐥 Tempo de atividade : *${temporizado(os.uptime())}*
き⃟🐥 Versão do whatsapp : *${client.user.phone.wa_version}*
き⃟🐥 Modelo do dispositivo : *${client.user.phone.device_model}*`
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
client.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: `${teks}`})
break

case 'delchat':
if (!isOwner) return reply(resposta.macaco)
reply('Pronto papai, deletei esse chat')
console.log(from)
client.modifyChat(from, "delete", {includeStarred: false})
break

case 'setname': 
if (args.length < 1) return reply(`Use ${p + comando} Churrasco-Bot`)
if (!isOwner) return reply(resposta.macaco)
anu = q
client.updateProfileName(anu)
await reply(`_*Sucesso em mudar o nome do bot_*\n\nPara : *${anu}*`)
break

case 'setprefix':
addFilter(from)
if (args.length < 1) return reply(`Use ${p + comando} !`)
if (!isOwner) return reply(resposta.macaco)
p = args[0]
reply(`*O prefix do bot foi alterado com sucesso para*: ${q}`)
break

case 'tagstick':
addFilter(from)
if (!isOwner) return reply(resposta.macaco)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const enmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
filePath = await client.downloadAndSaveMediaMessage(enmedia, filename = getRandom())
var value = args.join(" ")
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: {
mentionedJid: mem
},
quoted: mek
}
ini_buffer = fs.readFileSync(filePath)
client.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(filePath)
} else {
reply(`Marque um sticker para que eu mencione todos com ele`)
}
break

case 'tagimg':
addFilter(from)
if (!isOwner) return reply(resposta.macaco)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const ncmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
filePath = await client.downloadAndSaveMediaMessage(ncmedia, filename = getRandom())
var value = args.join(" ")
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: {
mentionedJid: mem
},
quoted: mek
}
ini_buffer = fs.readFileSync(filePath)
client.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(filePath)
} else {
reply(`Marque uma imagem para que eu mencione todos com ela`)
}
break

case 'ping':
addFilter(from)
uptime = process.uptime()
const pingButtons = [{buttonId: `nãoDaEsseMekAiManoGay`, buttonText: {displayText: "Tempo Ativo"}, type: 1}]
const pingButt = {contentText: `${linguagem.speed(speedB, temporizado)}`, buttons: pingButtons, headerType: 1}
client.sendMessage(from, pingButt, MessageType.buttonsMessage, {quoted: mek})
break

case 'visuchat':
addFilter(from)
if (!isOwner) return reply(resposta.macaco)
const readallid = await client.chats.all()
client.setMaxListeners(25)
for (let xyz of readallid) {
await client.chatRead(xyz.jid)
}
client.sendMessage(from, `Pronto`, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(from ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"imageMessage": {
"mimetype": "image/jpeg",
"caption": "Todos os chats foram vistos",
'jpegThumbnail': fs.readFileSync('./base de dados/lib/bot/fotos/logo.jpeg')
}
}
}
})
break

case 'bloqueados':
addFilter(from) 
if (!isOwner) return reply(resposta.macaco)
teks = 'Esta é uma lista de números bloqueados :\n'
for (let block of blocked) {
teks += `~> @${block.split('@')[0]}\n`
}
teks += `Total : ${blocked.length}`
client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
break

case 'desligar':
addFilter(from)
if (!isOwner) return reply(resposta.macaco)
reply('Bot desligado')
setTimeout(() => {
client.close()
}, 3000)
break

case 'reiniciar':
addFilter(from) 
if (!isOwner) return reply(resposta.macaco)
npm = `npm start`
reply("Aguarde, Estou Reiniciando...")
exec(npm, (err, stdout) => {
if(err) return client.sendMessage(from, "Erro", text, {quoted: mek})
if (stdout) {
client.sendMessage(from, stdout, text, {quoted: mek})
} 
})
break

case 'clearchat': 
case 'clearall':
case 'clear-all':
addFilter(from)
if (!isOwner) return reply(resposta.macaco)
clientf = await client.chats.all()
list_chat = await client.chats.all()
for (let chat of list_chat) {
client.modifyChat(chat.jid, "delete", {includeStarred: false})
}
client.sendMessage(from, `Pronto`, text, {
quoted: { key: {fromMe: false,
participant: `0@s.whatsapp.net`,
...(from ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"imageMessage": {
"caption": `Todos os chats foram apagados`
}
}
}
})
break
//<~FIM DOS COMANDOS DE DONOS

case 'report':
addFilter(from) //info
const bug = `${q}`
 if (args.length > 300) return client.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
teks1 = `╭ ⋟ Sugestão + Reporte\n├ ⋟ De: ${pushname}\n├ ⋟ Numero: @${sender.split("@s.whatsapp.net")[0]}\n╰━━━━━── • ──━━━━━\n ⋟ 𝖲𝗎𝗀𝖾𝗌𝗍𝖺̃𝗈:\n${bug}`
var options = {text: teks1, contextInfo: {mentionedJid: [sender]},}
client.sendMessage(`${OwnerNumber}@s.whatsapp.net`, options, text)
reply("Mensagem enviada ao meu dono; Spam = block + ban.")
break

case 'premium':  
case 'prem':
addFilter(from)
var totalchat = `${totalchat.length}`
totalChat = await client.chats.all()
charge = charging ? 'sim' : 'não'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await client.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const premiumMenu = await getBuffer(ppimg)
var mediaByclient = await client.prepareMessage(from, premiumMenu, MessageType.image, {thumbnail: null})
var qweriioaByclient = mediaByclient.message["ephemeralMessage"] ? mediaByclient.message.ephemeralMessage : mediaByclient
var button8s = [{buttonId: `${p}figurinhas`, buttonText: {displayText: '🌙 MENU FIGURINHAS ☔'}, type: 1}]
var button8s = {contentText: `${(linguagem.premium(pushname, hr, totalchat, bateria, ll))}`, footerText: `\`\`\`▢ Total Chats : *${totalChat.length}*\`\`\`\n\`\`\`▢ Carregando : *${charge}*\`\`\`\n\`\`\`▢ Bateria : *${baterai}*\`\`\`\n\`\`\`▢ Velocidade : *${latensi.toFixed(4)} segundos*\`\`\`\n\`\`\`▢ Tempo de atividade : *${horaOn(os.uptime())}*\`\`\``, buttons: button8s, headerType: 4, imageMessage: qweriioaByclient.message.imageMessage}
client.sendMessage(from, button8s, MessageType.buttonsMessage, {quoted: mek})
break

case 'ddd':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return reply(`Use ${p + comando} 94`)
try {
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
try {
ppimg = await client.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
buffer = await getBuffer(ppimg)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${dddlist}`})
} catch (e) {
reply(linguagem.erro())
}
break

case 'letra':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return reply("Qual é o nome da música? ._.")
mortandela(from)
teks = body.slice(7)
try {
ppimg = await client.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppimg)
lirikLagu(teks).then((res) => {
if (!res[0].result) {
reply("_*❌Titulo não encontrado...❌*_\n\nTalves eu não tenha essa resposta") 
} else {
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${res[0].result}`})
}
})

break

case 'github':
addFilter(from)   
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length == 0) return reply(`_*Sintaxe de nome incorreto...*_\n\nExemplo: ${p + comando} clientzinho`)
try {
ppimg = await client.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/github?nomedeusuario=${q}`)
githubByclient = `🏷️ Nome : ${anu.Nome_De_Usuario}\n📆 Criada em : *${anu.Criada_Em}*\n💫 Ultima atualização : *${anu.Ultima_Atualizacao}*\n👤 Seguidores : *${anu.Total_De_Seguidores}*\n👥 Total de Repositorios : *${anu.Total_De_Seguidores}*\n🌍 Seguindo : *${anu.Total_Seguindo} Pessoas*\n📊 Seguidores : \n*${anu.Link_De_Seguidores}*\n📁 Repositório : \n*${anu.Link_Do_Repositorios}*`
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
buffer = await getBuffer(ppimg)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${githubByclient}`})
} catch {
reply(resposta.erroB)
}
break

case 'mediafire':
addFilter(from)   
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return reply('Onde está o link? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
mortandela(from)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `
き⃟❗️MEDIAFIRE DOWNLOAD❗⃟ き

${ll}📁 Nome : ${res[0].nama}${ll}
${ll}📊 Tamanho : ${res[0].size}${ll}
${ll}🧧 Link : ${res[0].link}${ll}

_*Aguarde o processo de upload de mídia......*_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break

case 'covidst':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
mortandela(from)
teks = args.join(' ')
if (!q) return reply(`${emoji_bot} Use apenas a sigla do estado e, apenas uma sigla por consulta`)
try {
ppimg = await client.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/covid/brasil?estado=${q}`)
const by_client_thiago = `
╭═══════════════⊷
╰╮✙◗ Covid Mundo
╭┤➩ Sigla do estado: ${anu.Sigla_Do_Estado}
┃│➩ Estado: ${anu.Estado_Informado}
┃│➩ Casos desconhecidos: ${anu.Casos_Desconhecidos}
┃│➩ Casos encontrados: ${anu.Casos_Encontrados}
┃│➩ Mortes encontradas: ${anu.Mortes_Encontradas}
┃│➩ Previsões Econtradas: ${anu.Previsoes_Encontradas}
┃╰═════════════⊷
╰══════「★」═════⊷`
buffer = await getBuffer(ppimg)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${by_client_thiago}`})
} catch (e) {
reply(linguagem.erro())
}
break

case 'sticknime':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
mortandela(from)
fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
break

case 'anime':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return reply("Cadê o texto vida? kkkkk")
mortandela(from)
try {
buscarByclient = q
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/educacional/buscaranimes?anime=${buscarByclient}`)
img = await getBuffer(anu.Foto_anime)
client.sendMessage(from, img, image, { quoted: mek, thumbnail:null})
} catch {
reply(resposta.erroB)
}
break

case 'wikipedia':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return reply("Cadê o texto vida? kkkkk")
try {
ppimg = await client.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppimg)
wikipediaByclient = q
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/educacional/wikipedia?pergunta=${wikipediaByclient}`)
if (!anu.Resultado) {
reply("_*Titulo não encontrado...*_\n\nTalves eu não tenha essa resposta") 
} else {
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${anu.Resultado}`})
reply(`${anu.Resultado}`) 
}
break

case 'storesearch':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (!q) return reply(`❎ Que imagem você quer que eu pesquise? `);
mortandela(from)
teks = body.slice(7)
try {
sexooo = await axios.get(`https://api.zeks.me/api/sgplay?apikey=apivinz&q=${teks}`)
sexooo2 = sexooo.data
zaps = `*Lista de ${sexooo2.result[0].title}*\n\n`
for (let i = 0; i < sexooo2.result.length; i++) {
zaps += `\n$‣ 🧧 Nome : *${sexooo2.result[i].title}*\n‣ 🏷️Link : *${sexooo2.result[i].url}*\n‣ ✔️ Versão *${sexooo2.result[i].rating}*\n`
}
buffer = await getBuffer(sexooo2.result[0].thumb)
client.sendMessage(from, buffer, image, {quoted: mek, caption: zaps})
} catch (e) {
reply(linguagem.erro())
}
break

case 'buscaimg':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (!q) return reply(`❎ Que imagem você quer que eu pesquise? `);
mortandela(from)
try {
let pin = await hx.pinterest(q);
let ac = pin[Math.floor(Math.random() * pin.length)];
let di = await getBuffer(ac);
await client.sendMessage(from, di, image, {quoted: mek, caption: `✅ *${q}*` });
} catch (e) {
reply(linguagem.erro())
}
break;

case 'glosearch':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return reply('O que você está procurando?')
teks = args.join(' ')
mortandela(from)
try {
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `\n
「  *─「🍛 GOOGLE 🍛」*  」
‣ *🧧Título :* ${i.title}
‣ *🏷️Link :* ${i.link}
‣ *📁Sobre :* ${i.snippet}`
}
var clientDev = kant.trim()
wew = fs.readFileSync('./base de dados/lib/bot/fotos/login.mp4')
client.sendMessage(from, wew, video, {quoted: mek, mimetype: Mimetype.gif, thumbnail:null, caption: `${clientDev}`})
} catch (e) {
reply(linguagem.erro())
}
break

case 'playstore1':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if(!q) return reply('O que você está procurando?')
mortandela(from)
try {
ppimg = await client.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
let play = await hx.playstore(`${q}`)
let store = ' 「🍛PLAY STORE🍛」'
for (let i of play){
store += `
‣ *📌Nome* : ${i.name}
‣ *📟Ligação* : ${i.link}
‣ *🎈Dev* : ${i.developer}
‣ *🔗Link Dev* : ${i.link_dev}\n❉─── 「🍛PLAY STORE🍛」───❉`
}
buffer = await getBuffer(ppimg)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${store}`})
} catch (e) {
reply(linguagem.erro())
}
break

case 'happymod':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return reply('O que você está procurando?')
mortandela(from)
teks = q
sexoo = await axios.get(`https://api.zeks.me/api/happymod?apikey=${semApikeyPraTu}&q=${teks}`)
sexoo2 = sexoo.data
zaps = `*Lista de ${teks}*\n\n`
for (let i = 0; i < sexoo2.result.length; i++) {
zaps += `\n‣ 🧧 Nome : *${sexoo2.result[i].title}*\n‣ 🏷️Link : *${sexoo2.result[i].url}*\n‣ ✔️ Versão *${sexoo2.result[i].rating}*\n`
}
buffer = await getBuffer(sexoo2.result[0].thumb)
client.sendMessage(from, buffer, image, {quoted: mek, caption: zaps})
break

case 'celular':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (!q) return reply(`Qual celular você está procurando?`)
teks = args.join(' ')
try {
ppimg = await client.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/search/gsmarena?query=${q}`)
const busca_celular = 
`
📝 Titulo: ${anu.judul}
❗Última atualização: ${anu.rilis}
📱 Tamanho do celular: ${anu.ukuran}
⚡ Tipo: ${anu.type}
🗃️ Armazenamento: ${anu.storage}
📴 Tela: ${anu.display}
📳 Polegada: ${anu.inchi}
🔰 Resolução da câmera: ${anu.pixel}
📲 Resolução do video: ${anu.videoPixel}
💭 Ram do celular: ${anu.ram}
👤 Hardware do celular: ${anu.chipset}
⚠️ Bateria: ${anu.batrai}
🔋 Tipo da bateria: ${anu.merek_batre}`
buffer = await getBuffer(ppimg)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${busca_celular}`})
} catch {
reply(resposta.erroB)
}
break

case 'rename':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
var namaPackss = q.substring(0, q.indexOf('|') - 0)
var authorPackss = q.substring(q.lastIndexOf('|') + 1)
texto = body.slice(7)
if (isDoubleByte(texto)) return reply('🤖⚠️ Não é permitido letras modificadas!!')
stiker_wm = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
dlstiker_wm = await client.downloadAndSaveMediaMessage(stiker_wm)
stickerpackid = "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2"
packname = namaPackss;
author = authorPackss;
exif321 = getRandom('.exif')
exifst = getRandom('.webp')
googlelink = ` `;
applelink = ` `;
json = {"sticker-pack-id": stickerpackid, "sticker-pack-name": packname, "sticker-pack-publisher": author, "android-app-store-link": googlelink, "ios-app-store-link": applelink}
len = JSON.stringify(json).length
f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
aaa = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
if (len > 256) {
len = len - 256
aaa.unshift(0x01)
} else {
aaa.unshift(0x00)
}
fff = Buffer.from(aaa)
ffff = Buffer.from(JSON.stringify(json))
if (len < 16) {
len = len.toString(16)
len = "0" + len
} else {
len = len.toString(16)
}
ff = Buffer.from(len, "hex")
wm = Buffer.concat([f, ff, fff, ffff])
fs.writeFile(exif321, wm, function(err) {
if (err) return console.log(err);
exec(`webpmux -set exif ${exif321} undefined.webp -o ${exifst}`, (err) => {
if (err) return console.log(err);
client.sendMessage(from, fs.readFileSync(exifst), sticker, {quoted: mek})
fs.unlinkSync(exifst)
fs.unlinkSync(exif321)
fs.unlinkSync('undefined.webp')
})
});
break

case 'covidmundo':
addFilter(from)
if (!isOwner && !isPremium) return webPage(semPremium(p))
mortandela(from)
try {
teks = args.join(' ')
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/covid/mundial`)
try {
ppimg = await client.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const bya_client_thiago = `
╭═══════════════⊷
╰╮✙◗ Covid Mundo
╭┤➩ Total de casos: ${anu.Total_Casos}
┃│➩ Total de casos ativos: ${anu.Total_Casos_Ativos}
┃│➩ Total de casos criticos: ${anu.Total_Casos_Criticos}
┃│➩ Total de casos hoje: ${anu.Total_Casos_Hoje}
┃│➩ Total de mortes: ${anu.Total_Mortes}
┃│➩ Total de mortes hoje: ${anu.Total_Mortes_Hoje}
┃│➩ Total de recuperados: ${anu.Total_Recuperados}
┃╰═════════════⊷
╰══════「★」═════⊷`
buffer = await getBuffer(ppimg)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${bya_client_thiago}`})
} catch (e) {
reply(linguagem.erro())
}
break 

case 'loja':
case 'bankloja':
addFilter(from)
var totalchat = `${totalchat.length}`
totalChat = await client.chats.all()
charge = charging ? 'sim' : 'não'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await client.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const banhoLoja = await getBuffer(ppimg)
var mediaByclient = await client.prepareMessage(from, banhoLoja, MessageType.image, {thumbnail: null})
var qweriioaByclient = mediaByclient.message["ephemeralMessage"] ? mediaByclient.message.ephemeralMessage : mediaByclient
var button7s = [{buttonId: `${p}premium`, buttonText: {displayText: '🌙 MENU PREMIUM 👻'}, type: 1},]
var button7s = {contentText: `${(linguagem.bankloja(pushname, hr, totalchat, bateria, ll))}`, footerText: `\`\`\`▢ Total Chats : *${totalChat.length}*\`\`\`\n\`\`\`▢ Carregando : *${charge}*\`\`\`\n\`\`\`▢ Bateria : *${baterai}*\`\`\`\n\`\`\`▢ Velocidade : *${latensi.toFixed(4)} segundos*\`\`\`\n\`\`\`▢ Tempo de atividade : *${horaOn(os.uptime())}*\`\`\``, buttons: button7s, headerType: 4, imageMessage: qweriioaByclient.message.imageMessage}
client.sendMessage(from, button7s, MessageType.buttonsMessage, {quoted: mek})
break

case 'buypack':
addFilter(from)
payout2 = 1
const valorPack = 1000
const buyPacks = valorPack * payout2
if ( checkATMuser(sender) <= buyPacks) return reply(`[❗] Desculpe ${pushname} você não tem dinhero suficiente\nvalor do premiun : ${valorPack} mil`)
if ( checkATMuser(sender) >= buyPacks) {
confirmATM(sender)
var pornoByclient = [
"Michelle Rabbit\nhttps://mega.nz/folder/FXB0ELpS#CaCYgD8f8YNPc_dL4JjtDA ",
"Dripxxx\nhttps://mega.nz/folder/UdEjxYbA#2dGzAJq9JR8Qy8C8Y3VirQ",
"Sia Sibéria\nhttps://drive.google.com/drive/u/0/mobile/folders/1pOfYV7ZFqumnZpB-6eu03fHsByBJgNWt",
"Nicole Bum\nhttps://drive.google.com/drive/mobile/folders/1MRARgrA4GIcw14MGNpr5NxAKJTcnLjra",
"Love Lilah\nhttps://drive.google.com/drive/u/0/mobile/folders/145OnVBWuA54ZwfW5zL6WOQ7pQ41-fBx3 ",
"Taty Maia\nhttps://mega.nz/folder/i841xSqT#8sP2vyffUbS1RjQ_keNYoA/folder/O9hX1QSR ",
"Me1adinha\nhttps://accounts.google.com/ServiceLogin?service=lh2&passive=1209600&osid=1&continue=https://photos.google.com/share/AF1QipOjkWA-SYuXFsR17RGK0D0ZagmAP0_nK_kJnhpllW9WLj19YdLWGr0rDFLnncXVxQ?key%3DZVBtdV9YN2RmUUtkUkg2d2dMSzRKd3B5dEtMTWVn&followup=https://photos.google.com/share/AF1QipOjkWA-SYuXFsR17RGK0D0ZagmAP0_nK_kJnhpllW9WLj19YdLWGr0rDFLnncXVxQ?key%3DZVBtdV9YN2RmUUtkUkg2d2dMSzRKd3B5dEtMTWVn&authuser=0\n(Via Google Fotos) ",
"Mari Ávila\nhttps://drive.google.com/drive/u/0/mobile/folders/1lVU8GgLTHfPoYUh5ZJ1oj5gluiTRmgB5 ",
"Feh Galvão\nhttps://mega.nz/folder/OxQiHJAA#8dGkVcq08YtonYSJQgZFfQ/folder/etx0QRQT ",
"Marina Mui\nhttps://mega.nz/folder/nhxWCQhC#jefLXWFJiqCXMtj6wEEN4A ",
"Sophia Carracini\nhttps://drive.google.com/drive/u/0/mobile/folders/1mIpBq3amINT9am9yxQGlbz7dd8-NMN_o ",
"Maria Eugênia\nhttps://drive.google.com/drive/u/0/mobile/folders/10kdyiz9TCQuqEQXK_78KJJjG-zd4ywi3 ",
"Skylar Vox\nhttps://mega.nz/folder/XIQTSKzR#_0vLyBUESlCj3l5HCCUkQg ",
"Neiva Mara\nhttps://mega.nz/folder/PZZxQABC#IVO1DL-zczyMd1Kr83sDBw ",
"Amorazz\nhttps://mega.nz/folder/6kpT0IoT#Zqin16-ASUvoXgoEK6BsIw ",
"Nayara\nhttps://drive.google.com/drive/u/0/mobile/folders/1JpJdDtuI408EpCmoQalcOC8oz3szAxqE ",
"Megnutt\nhttps://mega.nz/folder/UAJE0DQT#gCEzz702Amr2rdqSWmshMA/folder/lQx21JjC ",
"Littl Misfit\nhttps://mega.nz/#F!QvhW2RiB!kog5LiL5dOU_115ZEVpcGg!UyhkGLCL ",
"Anitta\nhttps://drive.google.com/drive/u/0/mobile/folders/1K5NZNNJPGVo3FGuWIjZ0jNoJ-8Gh9hG3 ",
"MC Princesa\nhttps://drive.google.com/drive/u/0/mobile/folders/1Zsj66cMEPgQTcT91VenAkl9L1TAuguSF ",
"MC Pipokinha\nhttps://drive.google.com/drive/u/0/mobile/folders/1X7u7cj8MKj1cE6hM2_mkQe9bOF8M2npm ",
"Lana Rhoades\nhttps://mega.nz/folder/JEkWhaoZ#lho_3rS4nhf28tGtyvImCw ",
"Belle Delphine\nhttps://drive.google.com/drive/mobile/folders/1IzUUxQO6owpvW9r5Yj6xJ_711yTtlZg9 ",
"Venomous Dolly\nhttps://mega.nz/folder/pxYAXLjI#QnZHek_zGQDz5ct9d63Bmg ",
"MC Mirella\nhttps://seulink.online/qOkcdS\n(Esse ta com encurta) ",
"LoverLaci\nhttps://mega.nz/folder/yRIHgQ5A#euOpAQNEcZiej5uBuxjBkw/folder/XEQWSZBC ",
"Victoria Matosa\nhttps://drive.google.com/drive/mobile/folders/1x2j-SglJX-nezdBuc4WhpYleZO2c8Tl9 ",
"Segredos Da Ana\nhttps://www.mediafire.com/folder/tcpjkncy4as5f/d.gg\n(FONTE: Wakai T) ",
"Letícia Shirayuki\nhttps://www.mediafire.com/file/2a4kq8pmxc3je71/Let%25C3%25ADcia_Shirayuki.zip/file ",
"KITTYXKUM\nhttps://mega.nz/folder/f4xDSS7R#_5ZrSNVwLJ4nEUdEJxoijw ",
"Kinechan\nhttps://mega.nz/folder/GgxRQCaS#kdT7IidrqwgbggnpZOkMHA ",
"Grazi Mourão\nhttps://mega.nz/folder/2hwgwYpI#kUTsXqrwDNFeKcDhTINz-w ",
"https://mega.nz/folder/aU1wVTZR#6_P4jZGjUZmHqC5Fu2Y78Q",
"https://photos.app.goo.gl/Tqvfv8yVdp3FaUnX9",
"https://photos.app.goo.gl/g685WWL4T7BcZssk8",
"https://photos.app.goo.gl/gNxLbJHGVzeWY9iS9",
"https://photos.app.goo.gl/phyRpNFLcAtsknfJ7",
"https://photos.app.goo.gl/TBbkjGGdAVHjPFt5A",
"https://photos.app.goo.gl/Jr4Qk1dFSJepPdRc7",
"https://mega.nz/folder/aU1wVTZR#6_P4jZGjUZmHqC5Fu2Y78Q",
"https://photos.app.goo.gl/Tqvfv8yVdp3FaUnX9",
"https://photos.app.goo.gl/phyRpNFLcAtsknfJ7",
"https://photos.app.goo.gl/g685WWL4T7BcZssk8",
"https://photos.app.goo.gl/TBbkjGGdAVHjPFt5A",
"https://photos.app.goo.gl/gNxLbJHGVzeWY9iS9",
"https://photos.app.goo.gl/Jr4Qk1dFSJepPdRc7",
"Polonesa Do Hype\nhttps://drive.google.com/drive/u/0/mobile/folders/1yA4MOOhL1Qjfx8BOtjZptyNDgZPxzYAC",
"Ashley Tervort\nhttps://mega.nz/folder/X5wQwIbK#579uPWLNfCuUDuXvuIJ3aA ",
"Ashley Alban\nhttps://mega.nz/folder/9eBBBQZb#pi0kaL6zqRYq3SoSJHUJpQ ",
"Emília Bunny\nhttps://mega.nz/folder/q1pkBJoI#5ZiKfZhaKIUg9ea0eS6EYw ",
"Maru Karv\nhttps://mega.nz/folder/tHoC2CaY#bPf5ZHzM89nq-oCr0Civdw ",
"Evilena\nhttps://drive.google.com/drive/u/0/mobile/folders/1j5OR2qsYQ9uKrO2V2ywdpdUpooBlIJCo ",
"Bambi Doe\nhttps://mega.nz/folder/IxgyhZJI#Rd8bzK3_Ri2I3LUvy2Tf6Q ",
"Mulher Melão\nhttps://mega.nz/folder/is8w1Q7a#XmaNa0PNl6J-JS9VXneDJg ",
"Aline Faria\nhttps://drive.google.com/drive/u/0/mobile/folders/1QEaiSu9SFeoV__Obo42252zj-WQaEZxQ ",
"Rafaela Nery\nhttps://drive.google.com/drive/u/0/mobile/folders/1dYfY3QTybo_gFeNE-oQsxN45VnZ7HRW0 ",
"Remy LaCroix\nhttps://mega.nz/folder/sTxmzDAb#_0igusp-mS454WIEh_lGqg ",
"Mayakayagaia\nhttps://mega.nz/folder/5MsATbYI#V-90W2qijBk3N5YzJTgfHQ ",
"Bella Thorne\nhttps://mega.nz/folder/okw0gYLL#O6-OqnJhRYTbHiMJbNqI3Q ",
"Canela Skin\nhttps://mega.nz/folder/vN5XBIIZ#m7P5H4J_B5HcsYrf26tmoQ ",
"Hailey Queen\nhttps://mega.nz/folder/FFlgXBIT#8X5NYUFWkTjVDUqmwXSVow/folder/pc1yVbyA ",
"Adriana Chechik\nhttps://mega.nz/folder/1XgFnKyJ#HETOSi3Qi8Kwckbm2FBXDw ",
"Dripxxx\nhttps://mega.nz/folder/UdEjxYbA#2dGzAJq9JR8Qy8C8Y3VirQ ",
"Steffy Moreno\nhttps://mega.nz/folder/QkYARZ7J#vtktDmYALs5wwcImYy8tnw ",
"Angelic Videos\nhttps://mega.nz/folder/XgMRQYAL#GidekeyDkkEDFWit2kAJ_g "]
var pornkkkByclientNekkkk = pornoByclient[Math.floor(Math.random() * pornoByclient.length)]
client.sendMessage(from, `${pornkkkByclientNekkkk}`, text, {contextInfo :{text: 'hi', "forwardingScore": 1000000000, isForwarded: true, sendEphemeral: true, "externalAdenviar": {"title": `Packs porno?? by © clientkkk`, "body": "", "previewType": "PHOTO", "thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg", "thumbnail": img2}}})
}
break

case 'buyprem':
addFilter(from)
if (prem.includes(sender)) return reply("❌ Só pode comprar premium uma vez! ❌")
payout2 = 1
const koinPerlimit2 = 100000
const buyPrem = koinPerlimit2 * payout2
if ( checkATMuser(sender) <= buyPrem) return reply(`[❗] Desculpe ${pushname} você não tem dinhero suficiente\nvalor do premiun : 100000 mil`)
if ( checkATMuser(sender) >= buyPrem) {
confirmATM(sender, buyPrem)
prem.push(`${sender}`)
fs.writeFileSync('./base de dados/datauser/premium.json', JSON.stringify(prem))
await reply(`き⃟💲COMPRA BEM SUCEDIDA💲️⃟き\n\nき⃟👤️ Vendedor : *${me.name}*\nき⃟🏷️ Comprador : *${pushname}*\nき⃟💱 Preço do premium : *${koinPerlimit2}*`)				
}
break

case 'transfer':
case 'transferir':             			
addFilter(from)
if (!q.includes('/')) return  reply(`[❗] Use assim : ${p}transferir @/2500`)
const tujuan = q.substring(0, q.indexOf('/') - 1)
const jumblah = q.substring(q.lastIndexOf('/') + 1)
if(isNaN(jumblah)) return await reply('[❗] PRECISA SER UM NÚMERO')
if (jumblah < 100) return reply(`transfrência mínima e de 100 reais`)
if (checkATMuser(sender) < jumblah) return reply(`[❗] você não tem dinheiro suficiente para fazer uma transferência, você precisa ter no minímo 100 de dinhero`)
const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
fee = 0.010 *  jumblah 
hasiltf = jumblah - fee
addKoinUser(tujuantf, hasiltf)
confirmATM(sender, jumblah)
addKoinUser('5527997619163@s.whatsapp.net', fee)
reply(`き⃟💲TRANSFERÊNCIA💲️⃟き\n\nき⃟👤️ Transferidor: wa.me/${sender.split("@")[0]}\nき⃟🏷️ Recebidor : ${tujuan}\nき⃟💱 Valor Da Transferência : ${jumblah}\nき⃟🧧Taxa : ${fee}`)
break		

case 'darmoney':
addFilter(from)
if (!isOwner) return reply("Só meu dono")
const numeroUang = args[0].replace('@','')
const uangLimite1 = args[1]
const darmoneyUang = mek.message[type].contextInfo.mentionedJid[0]
if (uangLimite1 <= 1) return reply(`Precisa dar no minímo 1 limit`)
if (isNaN(uangLimite1)) return reply(`[❗] USE ASSIM\n ${p + comando} @5527997619163 5`)
if (!numeroUang) return reply(`[❗] USE ASSIM\n ${p + comando} @5527997619163 5`)
const idUang = numeroUang + '@s.whatsapp.net'
var found = false
Object.keys(uang).forEach((i) => {
if(uang[i].id === idUang){
found = i
}
})
if (found !== false) {
uang[found].uang += Number(uangLimite1)
const updated = uang[found]
fs.writeFileSync('./base de dados/datauser/uang.json',JSON.stringify(uang))
const verMoney = checkATMuser(darmoneyUang)
const result = `
╭─❒ 「 Sucesso! 」 ❒
├ *🦈 ID : *${createSerial(8)}*
├ *🦈 Horário : *${moment().format('DD/MM/YY HH:mm:ss')}*
├ *🦈 Usúario : *@${updated.id.replace('@s.whatsapp.net','')}*
├ *🦈 Dinheiro:* ${verMoney}*
└❏`
console.log(uang[found]);
reply(result)
} else {
reply(`[❗] Desculpe ${pushname}, este ${numeroUang} número não está registrado no bot...`)
}
break

case 'apostar':
addFilter(from)
if (!isGroup) return reply(`SOMENTE EM GRUPOS`)
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `10000`
if (checkxpr <= quantidader) return reply(`Você não possui licença para jogar, obtenha uma quando tiver ${quantidader} de dinheiro.\n\nSeu dinheiro: ${checkxpr}`)
if (args.length !== 1) return reply('Especifique a quantidade de dinheiro para apostar.')
if (Number(args[0]) >= checkxpr || Number(args[0]) >= dinheiro) return reply(`Você não pode apostar uma quantidade de dinheiro maior do que a você tem, e nosso limite de apostas é de ${quantidader} dinheiro por vez!\n\nSeu dinheiro: ${checkxpr}`)
if (Number(args[0]) < 1000) return reply(`O minimo para se apostar é de 1000 dinheiro`)
if (isNaN(args[0])) return reply('Para apostar use apenas números, nada de inserir letras, a menos que queira perder todo o XP que tenha.')
const double = Math.floor(Math.random() * 7) + 1
const nrolxp = Number(-args[0])
const prolxp = double + Number(args[0])
if (double == 1) {
await reply(`🔪BANG!!!💣\n\nVocê perdeu na roleta-russa, causando uma perca de ${nrolxp} em seu dinheiro.`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`${OwnerNumber}@s.whatsapp.net`, prolxp)
} else if (double == 2) {
await reply(`🙌🏻SALVO😇\n\nVocê não levou um tiro e ganhou ${prolxp} dinheiro`)
addKoinUser(sender, prolxp, dinheiro)
} else if (double == 3) {
await reply(`👎🏼BAAAAH MÁ SORTE😔\n\nPerdeu ${nrolxp} KKK Continua apostando pra perder mais otário kkkkkkkkkkkkkkk`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`${OwnerNumber}@s.whatsapp.net`, prolxp)
} else if (double == 4) {
await reply(`👍🏼MUITA SORTE!!!😬\n\nVocê pulou o muro, e se salvou da polícia.\nGanhou ${prolxp} Dinheiro, Meu soldado anti prisão!`)
addKoinUser(sender, prolxp, dinheiro)
} else if (double == 5) {
await reply(`💀 WASTED - SE FODEU ⚰️\n\nAcabou perdendo ${nrolxp} em seu dinheiro, pra ganhar, aposte mais alto.`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`${OwnerNumber}@s.whatsapp.net`, prolxp)
} else if (double == 6) {
await reply(`✨CONGRATULATIONS💫\n\nVocê finalmente ganhou, receba seus ${prolxp} de dinheiro`)
addKoinUser(sender, prolxp, dinheiro)
}
break

case 'dinheiro':
case 'money':
const testeDinheiro = checkATMuser(sender)
const checkDinheiro = checkATMuser(sender, testeDinheiro)
reply(linguagem.dinheiroConta(checkDinheiro))
break

case 'rankmoney':
bo = args[0]
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
_registered.sort((a, b) => (a.name < b.name) ? 1 : -1)
uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
let rankDinheiro = '🏆【DINHEIRO】🏆\n\n'
let nomNumberRank = 0
try {
for (let i = 0; i < 5; i++) {
nomNumberRank++
rankDinheiro += `
*${nomNumberRank}º*🥇 : @${uang[i].id.replace('@s.whatsapp.net', '')}
╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸
│ ➣ Nome: _${uang[i].nome}_
│ ➣ Dinheiro: _${uang[i].uang}_💰
╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
await reply(rankDinheiro)
} catch (err) {
console.error(err)
await reply(`Precisa ter mais Usuários registrados`)
}
break

case 'vermoney':
addFilter(from)
if (args.length < 1) return reply(`Use ${p + comando} @tag`)
const verMoneyki = mek.message[type].contextInfo.mentionedJid[0]
const verMoneyMencionador = checkATMuser(verMoneyki)
mentioned = mek.message[type].contextInfo.mentionedJid[0]
const feijoada = client.contacts[mentioned] != undefined ? client.contacts[mentioned].vname || client.contacts[mentioned].notify: undefined
reply(`き⃟💰_Adquirir o saldo na conta do ${feijoada}_💰️⃟ き\n\nき⃟💰 - Dinheiro: ${verMoneyMencionador}`)
break

case 'tts': 
addFilter(from)
if (args.length < 1) return client.sendMessage(from, `Você deve usar o comando da forma correta:\n${p}tts (língua) (texto)\nExemplo: ${p}tts pt bom dia\n\nUse: ${p}ts para listar todas as línguas`, text, {quoted: mek})
const gtts = require('./base de dados/lib/gtts')(args[0])
if (args.length < 2) return client.sendMessage(from, 'Cadê o texto?', text, {quoted: mek})
dtt = body.slice(8)
ranm = getRandom('.mp3')
dtt.length > 800
? reply('Texto muito grande')
: gtts.save(ranm, dtt, function() {
client.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
fs.unlinkSync(ranm)
})
break

case 'infobot':
addFilter(from)
var totalchat = `${totalchat.length}`
totalChat = await client.chats.all()
charge = charging ? 'sim' : 'não'
timestamp = speed();
latensi = speed() - timestamp
try {
ppimg = await client.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const infobotMenu = await getBuffer(ppimg)
var mediaByclient = await client.prepareMessage(from, infobotMenu, MessageType.image, {thumbnail: null})
var qweriioaByclient = mediaByclient.message["ephemeralMessage"] ? mediaByclient.message.ephemeralMessage : mediaByclient
var button5s = [{buttonId: `${p}animes`, buttonText: {displayText: '☔ MENU ANIMES 🌸'}, type: 1}]
var button5s = {contentText: `${(linguagem.info(pushname, hr, totalchat, bateria, ll))}`, footerText: `\`\`\`▢ Total Chats : *${totalChat.length}*\`\`\`\n\`\`\`▢ Carregando : *${charge}*\`\`\`\n\`\`\`▢ Bateria : *${baterai}*\`\`\`\n\`\`\`▢ Velocidade : *${latensi.toFixed(4)} segundos*\`\`\`\n\`\`\`▢ Tempo de atividade : *${horaOn(os.uptime())}*\`\`\``, buttons: button5s, headerType: 4, imageMessage: qweriioaByclient.message.imageMessage}
client.sendMessage(from, button5s, MessageType.buttonsMessage, {quoted: mek})
break

case 'infome':
const lordGcs_5 = "5527997619163@s.whatsapp.net"
const aldebaran_6 = "5527997619163@s.whatsapp.net"
const suportewhatsapp = "https://chat.whatsapp.com/GeG0ppNsUB0Cvja9tkz9gF" 
uptime = process.uptime()
const timestamp2 = speed();
const latensi2 = speed() - timestamp2
runtime2 = process.uptime()
infobot =`
▢ Nome : ${me.name}
▢ Version Bot : 0.0.1
▢ Total de cmds usados : ${reqcmd}
▢ Usuarios registrados : ${_registered.length}
▢ Navegador : ${client.browserDescription[1]}
▢ Versão do navegador: ${client.browserDescription[2]}
▢ Velocidade : ${latensi2.toFixed(4)}
▢ Tempo de execução : ${temporizado(uptime)}
▢ Versão wha : ${client.user.phone.wa_version}
▢ Grupo de suporte : 
${suportewhatsapp}

⊷ *AGRADECIMIENTOS* ⊶
▢ *🔮 ${NomeDoBot} ┃ ᴮᴼᵀ* :
🇹🇷ɑղԵ ՏօϲíɑӀᬊ᭄: @${aldebaran_6.split("@")[0]}
_*Contribuidor com: ajeito os menus*_
_*e ajudou a testar os comandos, etc...*_

▢ *🔮 ${NomeDoBot} ┃ ᴮᴼᵀ* :
Vegas: @${lordGcs_5.split("@")[0]}
_*ajudou a testar os comandos*_`
client.sendMessage(from, infobot, text, {contextInfo: fotothumb, quoted: mek})
break

case 'reportes':
report = `  ≡ *INFORMAÇÕES*
Solicite e relate funções de bug no bot, certifique-se de fornecer um relatório correto e claro!

┌──⊷ *REPORTES* ⊶
▢ *${p}Solicitar (Texto)*
▢ *${p}Informe (Texto)*
└──────────────

*Total*
Solicitações : ${_solicitar.length}
Informes : ${_informe.length}

✆ ou você pode entrar em contato com o proprietário para obter mais informações.`
reply(report)
break

case 'informe':
yoi = q
if (args.length < 1) return reply('✳️ Insira o nome da função de erro que ocorre quando o teste!')
if (yoi.length > 200) return reply('O texto excede o limite, o seu pedido foi rejeitado!')
_informe.push(yoi)
fs.writeFileSync('./base de dados/lib/informe.json', JSON.stringify(_informe))
reply(`✅ Obrigado *${pushname}*, Seu relatório foi armazenado no banco de dados`)
break

case 'informes':
if (!isOwner) return reply("Somente meu dono pae")
teks = ` ≡ *RELATÓRIOS*\nA seguir está uma lista de relatórios recebidos na data *${fecha()}* com o número de relatórios *${_informe.length}*\n\n┌───⊷ *LISTA* ⊶\n`
for (let lap of _informe) {
teks += `▢ ${lap}\n`
}
teks  += `└──────────────`
reply(teks.trim())
break

case 'pedido':
case 'solicitar':
yoi = q
if (args.length < 1) return reply('✳️ Insira as funções que deseja no Bot')
if (yoi.length > 200 ) return reply('O texto excede o limite, o seu pedido foi rejeitado!')
_solicitar.push(yoi)
fs.writeFileSync('./base de dados/lib/solicitar.json', JSON.stringify(_solicitar))
reply(`✅ Obrigado *${pushname}*, Sua solicitação foi armazenada no banco de dados.`)
break

case 'solicitações':
if (!isOwner) return reply(ownerB())
teks = ` ≡ *SOLICITAÇÕES*\nA seguir está uma lista de inscrições recebidas na data *${fecha()}* com o número de pedidos *${_solicitar.length}*\n\n┌───⊷ *LISTA* ⊶\n`
for (let req of _solicitar) {
teks += `▢ ${req}\n`
}
teks  += `└──────────────`
reply(teks.trim())
break

//-- NADA A VER

case 'ts':
reply(ts())
break
              
default:
if (body == `${p + comando}`)  {
teks = `${comando}`
reply(`『❗』Comando não encontrado! buscando algo sobre: *${comando}*`)
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `Resultado do comando usado: ${teks}`, thumbnail: null})
console.log('\x1b[1;31m~\x1b[1;37m>', '[', color('CMD', "red"), ']', color('Comando', "yellow"), color(`${p}${comando}`, "yellow"), color('não registrado', "yellow"), color('de', "yellow"), color(pushname, "yellow"))
}
}
}


if (isGroup && !mek.key.fromMe && budy != undefined) {
try { 
anu = await fetchJson(`http://brizas-api.herokuapp.com/ia/simsimi?apikey=brizaloka&text=${budy}`)
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
client.sendMessage(from, `${anu.resultado.resposta}`, text, {quoted: mek})
console.log(anu)
}
} catch {
}
}

if (body == `${p + comando}`)  {
try {
ppimg = await client.getProfilePicture(sender)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let menuAjuda = await getBuffer(ppimg)
var mediaByclient = await client.prepareMessage(from, menuAjuda, MessageType.image, {thumbnail: null})
var qweriioaByclient = mediaByclient.message["ephemeralMessage"] ? mediaByclient.message.ephemeralMessage : mediaByclient
const buttons2 = [{buttonId: `${p}ajuda`, buttonText: {displayText: '👻 MENU ☔'}, type: 1}]
const btn2 = {contentText: `${ll}Olá @${sender.split('@')[0]}...\n\nComando: *${comando}* Não registrado.${ll}`, footerText: `${ll}${tempoByclient}, Macaco. 🐒 ${ll}`, buttons: buttons2, headerType: 4, imageMessage: qweriioaByclient.message.imageMessage}
client.sendMessage(from,  btn2, MessageType.buttonsMessage, {quoted: mek})
console.log('\x1b[1;31m~\x1b[1;37m>', '[', color('CMD', "red"), ']', color('Comando', "yellow"), color(`${p}${comando}`, "yellow"), color('não registrado', "yellow"), color('de', "yellow"), color(pushname, "yellow"))
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("Cannot read property 'conversation' of null") && !e.includes("Cannot read property 'contextInfo' of undefined") && !e.includes("Cannot set property 'mtype' of undefined") && !e.includes("jid is not defined")) {
console.log('Error : %s', color(e, 'red'))
}
}
})
}
starts()