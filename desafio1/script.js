const nome = prompt("Digite seu nome: ");
const xp = Number(prompt("Qual a quantidade de XP você tem atualmente?"));

switch (true) {
  case xp < 1000:
    alert(`O Herói de nome ${nome} está no nível de Ferro`);
    break;

  case xp >= 1001 && xp <= 2000:
    alert(`O Herói de nome ${nome} está no nível de Bronze`);
    break;

  case xp >= 2001 && xp <= 5000:
    alert(`O Herói de nome ${nome} está no nível de Prata`);
    break;

  case xp >= 5001 && xp <= 7000:
    alert(`O Herói de nome ${nome} está no nível de Ouro`);
    break;

  case xp >= 7001 && xp <= 8000:
    alert(`O Herói de nome ${nome} está no nível de Platina`);
    break;

  case xp >= 8001 && xp <= 9000:
    alert(`O Herói de nome ${nome} está no nível de Ascendente`);
    break;

  case xp >= 9001 && xp <= 10000:
    alert(`O Herói de nome ${nome} está no nível de Imortal`);
    break;

  case xp >= 10001:
    alert(`O Herói de nome ${nome} está no nível de Radiante`);
    break;

  default:
    break;
}
