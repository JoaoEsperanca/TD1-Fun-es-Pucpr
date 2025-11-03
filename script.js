function soma(a, b) {
    return a + b;
  }
  
  function subtracao(a, b) {
    return a - b;
  }
  
  function multiplicacao(a, b) {
    return a * b;
  }
  
  function divisao(a, b) {
    if (b === 0) {
      return "Erro: divisão por zero!";
    }
    return a / b;
  }
  
  console.log("Soma:", soma(10, 5));
  console.log("Subtração:", subtracao(10, 5));
  console.log("Multiplicação:", multiplicacao(10, 5));
  console.log("Divisão:", divisao(10, 5));
  
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const pares = numeros.filter(function(num) {
    return num % 2 === 0;
  });
  
  const media = numeros.reduce((acc, num) => acc + num, 0) / numeros.length;
  
  console.log("Números:", numeros);
  console.log("Números pares:", pares);
  console.log("Média:", media);
  
  function calcular(a, b, operacao) {
    return operacao(a, b);
  }
  
  const resultadoSoma = calcular(5, 7, soma);
  const resultadoMult = calcular(5, 7, multiplicacao);
  
  console.log("Callback - Soma:", resultadoSoma);
  console.log("Callback - Multiplicação:", resultadoMult);
  
  const quadrados = numeros.map(num => num * num);
  console.log("Quadrados:", quadrados);
  