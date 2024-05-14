// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// "highScore" isminde bir değişken oluşturalım. Bu değişken, bir sayı veya
// boolean değer alabilsin.
// Kodu buraya yazalım...
let highScore;
highScore = 5;
highScore = true;
// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "stuff" isminde boş bir array oluşturalım. Bu array, sayılardan veya stringlerden
// oluşabilsin. Ancak sayılar ve string'ler bu array'in içinde bir arada olamasın. 
// Yani ya sayı array'i olabilsin, ya da string array'i olabilsin.
// Kodu buraya yazalım...
const Stuff = [2, 7];
const mySkill = "Expert";
// "colors" isminde boş bir array oluşturalım. Bu array, yukarıda oluşturduğumuz iki 
// türden oluşabilsin. Yani bu array'in içinde hem RGB renkler, hem de HSL renkler 
// bulunabilsin.
// Kodu buraya yazalım...
const colors = [];
// **********************************************
// ******************* BÖLÜM 6 ******************
// **********************************************
// "greet" isminde bir fonksiyon oluşturalım. Bu fonksiyon, parametre olarak:
// - string
// veya
// - string'lerden oluşan array
// alabilsin. Eğer fonksiyona bir string girilirse (isim string'i), fonksiyon bu
// string için "Merhaba, İSİM" şeklinde bir string yazdırsın. Eğer fonksiyona bir
// array girilirse, fonksiyon bu array'in her bir string elemanı için ayrı ayrı
// "Merhaba, İSİM" şeklinde bir string yazdırsın.
// Kodu buraya yazalım...
const greet = (name) => {
    if (typeof name === "string") {
        console.log(`merhaba ${name}`);
    }
    else {
        name.forEach((name) => {
            console.log(`merhaba ${name}`);
        });
    }
};
const test = ["a", "b", "c"];
greet("Emre");
greet(test);
export {};
//# sourceMappingURL=4-unionlar.js.map