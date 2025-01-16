// Menampilkan Bilangan Genap
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log("i =>", i);
  }
}

// Jumlahkan Bilangan
let total = 0;
for (let j = 0; j <= 100; j++) {
  total += j;
}
console.log(total);

// Membalikkan Kata
const word = "javascript";
let reversedWord = "";

for (let k = word.length - 1; k >= 0; k--) {
  reversedWord += word[k];
}

console.log("membaliikan kata=>", reversedWord);
