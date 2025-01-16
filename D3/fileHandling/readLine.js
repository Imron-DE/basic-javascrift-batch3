// modul untuk input ke terminal

const r = require("readLine");

// membuat interface/tampilan  input ke terminal
const inputNama = r.createInterface({
  input: process.stdin, // untuk mengamnil input ddari keyboard user
  output: process.stdout, // untuk menampilkan outpu ke terminal
});

// panggil inputnya
// . question : untuk menampilkan pertanyaan ke user

inputNama.question("Masukan nama =>", (nama) => {
  console.log(`Halo${nama}`); // menampilkan input
  inputNama.close(); // menutup  input
});

// contoh 2 input

inputNama.question("Masukan nama =>", (nama) => {
  console.log(`Halo${nama}`); // menampilkan input
  inputNama.close(); // menutup  input
});
