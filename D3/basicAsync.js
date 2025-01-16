/*   secara default bahasa pemrograman dieksekusi secara berurut (syncronus) dari a-z dari 1-100. Asyncronous : teknik eksekusi kode sacara paralel tanpa harus mengunggu eksekusi program lain selesai artinya fungsi yang dibuat menggunakan teknik asyncronous kaan bersamaan dijalankan dengna code lain
 */

console.log("=== first bang ===");

function printlog() {
  console.log("=== kedua ===");
}
setTimeout(printlog, 3000);
console.log("=== ketiga ===");

setTimeout(myFunction, 3000);

function myFunction() {
  console.log("hahahaha");
}
