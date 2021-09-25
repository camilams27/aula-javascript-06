// 1)Criar 3 variáveis:
// a)A primeira variável deverá conter o seu nome. 
// b)A segunda variável deverá conter a sua idade.
// c)Converter a segunda variável para string.
// d)A terceira variável deverá conter a concatenação das duas variáveis anteriores.
// e)Exibir no console a terceira variável.
// f)Exibir no console o tamanho da terceira variável.
function questao1(){
    let nome = "Camila ", idade = 19, eu = nome+idade;
    idade.toString();
    console.log(eu);
    console.log("Tamanho da terceira variável: "+eu.length);
}
// console.log(questao1());

// 2)Criar 2 variáveis:
// a)A primeira variável deverá conter o valor 17.
// b)A segunda variável deverá conter o valor 28.
// c)Converter os valores das duas variáveis
// d)Exibir no console a terceira variável.
function questao2(){
    let valor1 = 17, valor2 = 28;
    String(valor1);
    JSON.stringify(valor2);
    let valor3 = valor1+valor2;
    console.log(typeof(valor3));
}
// console.log(questao2());
