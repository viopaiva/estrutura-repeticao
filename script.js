function somaImpares() {
    let soma = 0;

    for (let i = 1; i <=500; i++) {
        if(i % 2 !== 0 && i % 3 === 0) {
             soma += i;
        }
    }
        alert("A soma dos números ímpares e múltiplos de 3 no conjunto de 1 a 500 é: " + soma);  
}

function menorEMaiorAltura() {
    const quantidadeAlturas = 15;
    let alturas = [1.80, 1.75, 1.52, 1.60, 1.55, 1.70, 2.03, 1.73, 1.68, 1.93, 1.78, 1.59, 1.62, 1.61, 1.65];

    let menor = alturas[0]; //1.80 => 1.75 => 1,52
    let maior = alturas[0];

    for (let altura of alturas) {
        if (altura < menor) {
            menor = altura;
          
        }

        if (altura > maior) {
            maior = altura;
        }
    }
   alert(`
    A quantidade de alturas percorridas é: ${quantidadeAlturas}
    A maior altura é: ${maior} 
    A menor altura é: ${menor}
    `);
}
