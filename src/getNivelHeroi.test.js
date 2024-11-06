const getNivelHeroi = require('./index.js'); 

describe('Testando os níveis do herói com base no XP', () => {
    test('Deve retornar nível de Ferro para XP igual a 1000', () => {
        expect(getNivelHeroi('Homem Aranha', 1000)).toBe('O Herói de nome Homem Aranha está no nível de Ferro');
    });

    test('Deve retornar nível de Bronze para XP entre 1001 e 2000', () => {
        expect(getNivelHeroi('Homem Aranha', 1500)).toBe('O Herói de nome Homem Aranha está no nível de Bronze');
    });

    test('Deve retornar nível de Prata para XP entre 2001 e 5000', () => {
        expect(getNivelHeroi('Homem Aranha', 3000)).toBe('O Herói de nome Homem Aranha está no nível de Prata');
    });

    test('Deve retornar nível de Ouro para XP entre 5001 e 7000', () => {
        expect(getNivelHeroi('Homem Aranha', 6000)).toBe('O Herói de nome Homem Aranha está no nível de Ouro');
    });

    test('Deve retornar nível de Platina para XP entre 7001 e 8000', () => {
        expect(getNivelHeroi('Homem Aranha', 7500)).toBe('O Herói de nome Homem Aranha está no nível de Platina');
    });

    test('Deve retornar nível de Ascendente para XP entre 8001 e 9000', () => {
        expect(getNivelHeroi('Homem Aranha', 8500)).toBe('O Herói de nome Homem Aranha está no nível de Ascendente');
    });

    test('Deve retornar nível de Imortal para XP entre 9001 e 10000', () => {
        expect(getNivelHeroi('Homem Aranha', 9500)).toBe('O Herói de nome Homem Aranha está no nível de Imortal');
    });

    test('Deve retornar nível de Radiante para XP maior que 10000', () => {
        expect(getNivelHeroi('Homem Aranha', 11000)).toBe('O Herói de nome Homem Aranha está no nível de Radiante');
    });

    test('Deve retornar mensagem de XP insuficiente para XP menor que 1000', () => {
        expect(getNivelHeroi('Homem Aranha', 500)).toBe('O heroi de nome Homem Aranha está com XP insuficiente para receber alguma classificação.');
    });
});
