function desafio(){
    let regras = "\n1.tesoura corta papel \n2.papel cobre veneno \n3.pedra esmaga lagarto \n4.lagarto corta Spock \n5.Spock vaporiza tesoura ** \n6.tesoura decapita Spock \n7.lagarto come papel \n8.veneno refuta lagarto; \n9.Spock vaporiza pedra; \n10.veneno esmaga tesoura.";

    regras = regras.replace(/esmaga/gi,"quebra");
    console.log("A palavra - esmaga - foi trocada pela palavra - quebra -. Utilizando replace");

    regras = regras.replace(/lagarto/gi,"tesoura");
    console.log("A palavra - largato - foi trocada pela palavra - tesoura -. Utilizando replace.\n Regra refutável.");

    regras = regras.replace(/spock/gi,"papel");
    console.log("A palavra - Spock - foi trocada pela palavra - papel -. Utilizando replace");

    regras = regras.replace(/vaporiza/gi,"embrulha");
    console.log("A palavra - vaporiza - foi trocada pela palavra - embrulha -. Utilizando replace");

    regras = regras.replace(/cobre/gi,"embrulha");
    console.log("A palavra - cobre - foi trocada pela palavra - embrulha -. Utilizando replace");

    regras = regras.replace(/decapita/gi,"corta");
    console.log("A palavra - decapita - foi trocada pela palavra - corta -. Utilizando replace");

    regras = regras.replace(/come/gi,"corta");
    console.log("A palavra - come - foi trocada pela palavra - corta -. Utilizando replace");

    regras = regras.replace(/veneno/gi,"pedra");
    console.log("A palavra - veneno - foi trocada pela palavra - pedra -. Utilizando replace");

    regras = regras.replace(/refuta/gi,"quebra");
    console.log("A palavra - refuta - foi trocada pela palavra - quebra -. Utilizando replace");

    console.log("\n*-------------------------------------*\n As regras atuais do jogo são: "+regras)
}
console.log(desafio());
