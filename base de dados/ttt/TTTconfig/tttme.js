const tttme = (pushname, userWins, userDefeats, userTies, userPoints) => {
  return `
ã ðð® Tic Tac Toe ð®ð ã

 â NOME: ${pushname} 
â­â¾â¾â¾â¾â¾â¾â¾â¾â¾â¾â¾â¾â¾â¾â¾â¸
â â£ VitÃ³rias: ${userWins} ð
â â£ Derrotas: ${userDefeats} ð¥
â â£ Empates: ${userTies} ð
â â£ Pontos: ${userPoints} â¨
â°â¾â¾â¾â¾â¾â¾â¾â¾â¾â¾â¾â¾â¾â¾â¾â¸
    `
}

exports.tttme = tttme
