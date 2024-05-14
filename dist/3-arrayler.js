// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// Yaşları tutmak üzere "ages" isminde boş bir array oluşturalım.
// Tür girmeyi unutmayalım.
// Kodu buraya yazalım...
const ages = [];
// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "gameBoard" isminde boş bir array oluşturalım. Bu array, stringlerden oluşan
// iki boyutlu bir array olmalı. Yani array'in içinde array'ler olacak ve bu
// array'lerin içinde string'ler olacak.
// Kodu buraya yazalım...
const gameBoard = [];
const productExample = {
    name: "coffee mug",
    price: 11.50
};
console.log(productExample);
// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
// "getTotal" isminde bir fonksiyon oluşturalım. Bu fonksiyon, bir önceki adımda
// yazdığımız "Product" türünden oluşan bir array alsın ve bu array'in içindeki
// ürünlerin fiyatlarının toplamını dönsün.
// Kodu buraya yazalım...
const getTotal = (products) => {
    let total = 0;
    for (const product of products) {
        total += product.price;
    }
    return total;
};
const products = [
    { name: "coffee mug", price: 11.50 },
    { name: "pc", price: 1000 },
    { name: "laptop", price: 1275 }
];
const totalPrice = getTotal(products);
console.log("Toplam fiyat:", totalPrice);
export {};
//# sourceMappingURL=3-arrayler.js.map