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

function mediaAritmetica() {
    let soma = 0;
    let positivos = 0;
    let negativos = 0;
    let quantidadeValores = 0;
    let valor = 10;

    while (valor > -8) {
        soma += valor;
        quantidadeValores++
       
        if (valor > 0) {
            positivos++ 
        } else {
            negativos++
        }
        valor -= 1; 
    }

    const media = soma / quantidadeValores;
    const percentualPositivos = (positivos * 100) / quantidadeValores;
    const percentualNegativos = negativos / quantidadeValores * 100;
    alert(`
        quantidade de valores: ${quantidadeValores}
        positivos: ${positivos}
        negativos: ${negativos}
        soma: ${soma}
        percentual de Positivos: ${percentualPositivos.toFixed(2)}%
        percentual de Negativos: ${percentualNegativos.toFixed(2)}%
    `);
}

function quantidadeNosIntervalos() {}

function algoritmoEstruturado() {
    let valores = {
        primeiro: 2,
        segundo: 5,
        terceiro: 7,
        quarto: 8,
        quinto: 11,
        encerramento: 0
    }
    let pares = 0;
    let impares = 0;
    let somaPares = 0;
    let somaImpares = 0;
    let quantidade = 0;
    let soma = 0;
    let mediaPares = 0;
    let mediaImpares = 0;


    for (chave in valores) {
        const valor = valores[chave];
        console.log(`chave do objeto: ${valor}`);

        if (valor === 0) {
            break; 
    }

    quantidade++
    soma += valor

    if (valor % 2 == 0) {
        pares++
        somaPares ++
    } else {
        impares++
    }
    
    let mediaPares = somaPares / pares;
    let mediaGeral = soma / quantidade;

    console.log(`Quantidade de pares: ${pares}`);
    console.log(`Quantidade de ímpares: ${impares}`);
    console.log(`Média dos pares: ${mediaPares}`);
    console.log(`Média geral: ${mediaGeral}`);
    }
}