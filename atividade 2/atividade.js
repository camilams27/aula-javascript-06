function letraA(){
    let txt = "abcdefghijklm";
    console.log(txt.search("h"));
    return;
}
// console.log(letraA());


function letraB(){
    let txt = "Poso comer bananas o dia todo";
    console.log(txt.slice(txt.search("b"),txt.search(" o")));
    return;
}

// console.log(letraB());


function letraC(){
    let txt = "Olá, mundo";
    console.log(txt.replace("Olá","Bem-vindo"));
    return;
}
// console.log(letraC());


function letraD(){
    let txt = "Olá, mundo";
    console.log(txt.toUpperCase());
    return;
}
// console.log(letraD());

function letraE(){
    let txt = "Olá, mundo";
    console.log(txt.toLowerCase());
    return;
}
// console.log(letraE());

function letraF(){
    let txt = "Poso comer bananas o dia todo";
    console.log(txt.length);
    return;
}
// console.log(letraF());

function letraG(){
    let str1 = "Hello ";
    let str2 = "World!";
    console.log(str1.concat(str2));
    return;
}
// console.log(letraG());

function letraH(){
    let fruits = ["Banana","Orange","Apple","Kiwi"];
    console.log(fruits.sort());
    return;
}
// console.log(letraH());

function letraI(){
    let fruits = ["Banana","Orange","Apple","Kiwi"];
    fruits.shift();
    fruits.pop();
    console.log(fruits);
    return;
}
// console.log(letraI());

function letraJ(){
    let fruits = ["Banana","Orange","Apple"];
    fruits.push("Uva","Caju","Kiwi")
    console.log(fruits);
    return;
}
// console.log(letraJ());

function letraK(){
    let fruits = ["Banana","Orange","Apple"];
    fruits.unshift("Pera","Manga");
    fruits.pop();
    console.log(fruits);
    return;
}
// console.log(letraK());


