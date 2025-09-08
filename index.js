function rankGames(wins, defeat) {
    let resultRank = wins - defeat
    let rank = ""

if (resultRank < 10) {
    rank = "Ferro"
}
else if (resultRank >= 11 && resultRank <= 20) {
    rank = "Bronze"
}
else if (resultRank >= 21 && resultRank <= 50) {
    rank = "Prata"
}
else if (resultRank >= 51 && resultRank <= 80) {
    rank = "Ouro"
}
else if (resultRank >= 81 && resultRank <= 90) {
    rank = "Diamante"
}
else if (resultRank >= 91 && resultRank <= 100) {
    rank = "Lendário"
}
else if (resultRank >= 101 ) {
    rank = "Imortal"
}

    return `O Herói tem de saldo de ${resultRank} vitória(s) e está no nível de ${rank}`
}

console.log(rankGames(26,5))