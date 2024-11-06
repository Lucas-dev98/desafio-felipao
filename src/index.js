function getNivelHeroi(nome_heroi, xp_heroi) {
    if (xp_heroi === 1000) {
        return `O Herói de nome ${nome_heroi} está no nível de Ferro`;
    } else if (xp_heroi >= 1001 && xp_heroi <= 2000) {
        return `O Herói de nome ${nome_heroi} está no nível de Bronze`;
    } else if (xp_heroi >= 2001 && xp_heroi <= 5000) {
        return `O Herói de nome ${nome_heroi} está no nível de Prata`;
    } else if (xp_heroi >= 5001 && xp_heroi <= 7000) {
        return `O Herói de nome ${nome_heroi} está no nível de Ouro`;
    } else if (xp_heroi >= 7001 && xp_heroi <= 8000) {
        return `O Herói de nome ${nome_heroi} está no nível de Platina`;
    } else if (xp_heroi >= 8001 && xp_heroi <= 9000) {
        return `O Herói de nome ${nome_heroi} está no nível de Ascendente`;
    } else if (xp_heroi >= 9001 && xp_heroi <= 10000) {
        return `O Herói de nome ${nome_heroi} está no nível de Imortal`;
    } else if (xp_heroi >= 10001) {
        return `O Herói de nome ${nome_heroi} está no nível de Radiante`;
    } else {
        return `O heroi de nome ${nome_heroi} está com XP insuficiente para receber alguma classificação.`;
    }
}

module.exports = getNivelHeroi;