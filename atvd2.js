function questao1(hatch, sedans, motocicletas, caminhonetes){
    var carro = prompt("Qual carro que comprar?");
    if (carro == "hatch"){
      console.log("Compra efetuada com sucesso");
    }
    else if (carro == "sedan"){
      console.log("Tem certeza que não prefere este modelo?");
    }
    else if (carro == "motocicleta"){
      console.log("Tem certeza que não prefere este modelo?");
    }
    else if (carro == "caminhonete"){
      console.log("Tem certeza que não prefere este modelo?");
    }
    else {
      console.log("Não trabalhamos com este tipo de automóvel aqui");
    }
  }
  
  function questao2(a,b,c){
    if ((a == b) && (b == c) && (c == a)){
      console.log("O triângulo é equilátero!");
    }
    else if ((a !== b) && (b !== c) && (c !== a)){
      console.log("O triângulo é escaleno!");
    }
    else {
      console.log("O triângulo é isósceles!");
    }
  }
  
  function questao3(numero){
    if (numero >= 0){
      console.log("O número é positivo!")
    }
    else {
      console.log("O número é negativo!")
    }
  }