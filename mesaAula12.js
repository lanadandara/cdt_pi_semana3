let alice = [23, 82, 46];
let bob = [45, 8, 32];
let participantes = ['alice', 'bob'];

function encontratGanhador(a, b) {
  let pontosPrimeiro = 0;
  let pontosSegundo = 0;
  let ganhador;
  for (let voto = 0; voto < a.length; voto++) {
    if (a[voto] > b[voto]) {
      pontosPrimeiro = pontosPrimeiro + 1;
    } else if (a[voto] < b[voto]) {
      pontosSegundo = pontosSegundo + 1;
    } else {
      pontosPrimeiro = pontosPrimeiro + 0;
      pontosSegundo = pontosSegundo + 0;
    }
  }
  if (pontosPrimeiro > pontosSegundo) {
    ganhador = participantes[0];
  } else if (pontosPrimeiro < pontosSegundo) {
    ganhador = participantes[1];
  } else {
    ganhador = 'empate';
  }
  return ganhador;
}
console.log(encontratGanhador(alice, bob));

// Bônus digitalHouse
function digitalHouse(num1, num2) {
  for (let i = 1; i <= 100; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('Digital House');
    } else if (i % num1 === 0) {
      console.log('Digital');
    } else if (i % num2 === 0) {
      console.log('House');
    } else {
      console.log(i);
    }
  }
}
digitalHouse(2, 3);
