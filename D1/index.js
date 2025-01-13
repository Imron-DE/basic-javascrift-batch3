// let a, b, c;
// console.log("====================");
// console.log("=====NAMA KLEAN=====");
// console.log("====================");
// console.log("X = ", a);
// console.log("Y = ", b);
// console.log("Z = ", c);
// console.log("Penjumlahan = ");
// console.log("Pengurangan = ");
// console.log("Perkalian = ");
// console.log("Pembagian = ");
// console.log("Modulus = ");
// console.log("Jumlah-kali-bagi = a + b * c / c");
// console.log("Total = ");
// console.log("====================");

// jawab
let a = 10;
let b = 5;
let c = 2;
console.log("====================");
console.log("=====Imron Rosadi=====");
console.log("====================");
console.log("X = ", a);
console.log("Y = ", b);
console.log("Z = ", c);
let penjumlahan = a + b;
console.log(penjumlahan);
let pengurangan = a - b;
console.log(pengurangan);
let perkalian = a * b;
console.log(perkalian);
let modulus = a % b;
console.log(modulus);
let jumlahkalibagi = (a * b) / c;
console.log(jumlahkalibagi);
let Total = a + b + c;
console.log(Total);

// Soal 2 : Hitung berapa detik dalam 30Hari menggunakan operator matematika
// jawab
let second = 30 * 24 * 60 * 60;
console.log(second);

/* Soal 3 : cari hobby didalam data yang dikirim dari parameter user
jika objek user atau properti hobby tidak ditemukan maka return "Hobby tidak ada" */
function findUserHobby(user) {
  return user.hobby ? user.hobby : "Hobby tidak ada";
}
let user1 = {
  nama: "Kipli Gans",
  age: 60,
  hobby: ["Bermain", "Futsal"],
};
let user2 = {
  nama: "Fitri Cans",
  age: 65,
};
console.log(findUserHobby(user1));
console.log(findUserHobby(user2));

// LOGIC
/** Soal 4 : buat logic swicth case untuk menampilkan nama hari pake bahasa inggris berdasarkan input angka 1-7
 * Jika angka yang dimasukkan diluar rentang tersebut, maka tampilkan pesan "Input tidak valid"
 */
// jawaban
let day = 8;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Input tidak valid");
}

// /** Soal 5 : buat logic if yang menentukan status kelulusan orang berdasarkan nilai yang didapat
//  * jika nilai lebih dari atau sama dengan 80, maka status nya "Anda lulus dengan sangat baik",
//  * jika nilai lebih dari atau sama dengan 70, DAN kurang dari 80, maka statusnya "Lulus dengan baik",
//  * jika nilai lebih dari atau sama dengan 60, DAN kurang dari 70, maka statusnya "Lulus"
//  * jika nilai kurang dari 60, maka statusnya "tidak lulus"

let nilai = 80;
if (nilai >= 80) {
  console.log("Anda lulus dengan sangat baik");
} else if (nilai >= 70 && nilai < 80) {
  console.log("Lulus dengan baik");
} else if (nilai >= 60 && nilai < 70) {
  console.log("Lulus");
} else {
  console.log("Tidak lulus");
}

/** soal 6 :
 * buat logic untuk menentukan nilai rata-rata siswa dengan menghitung nilai rata-rata dari 3 mapel (mtk,fisika,kimia)
 * jika nilai yang dimasukan tidak valid (di luar rentang 0-100 ),maka status nya "nilai tidak valid"
 * jika nilai rata-rata lebih besar atau sama dengan 80, maka status nya "selamat anda lulus dengan baik"
 * jika nilai rata-rata lebih kecil dari 80 dan lebih besar atau sama dengan 60,maka statusnya "anda lulus"
 * jika nilai rata-rata lebih kecil dari 60,maka statusnya "anda tidak lulus"
 */

// jawaban soal 6
let nilairata = 20;
if (nilairata > 0 && nilairata > 100) {
  console.log("nilai tidak valid");
} else if (nilairata >= 80) {
  console.log("selamat anda lulus dengan baik");
} else if (nilairata <= 80 && nilairata >= 60) {
  console.log("selamat anda lulus dengan baik");
} else {
  console.log("anda tidak lulus");
}

/** soal 7 : buat logic untuk menentukan jenis bilangan positif (positif,negatif, atau nol)
 * dari nilai yang dimasukan oleh user dengan menggunakan ternary operator
 * output yang diharapkan : ("Angka 7 adalah bilangan positif")
 *
 */
// jawab
let inputBilangan = -1;
let jenisBilangan = inputBilangan > 0 ? "positif" : inputBilangan < 0 ? "negatif" : "nol";
console.log(`Angka ${inputBilangan} adalah bilangan ${jenisBilangan}`);

/** Soal 8 : nested if
 * buat program untuk menghitung total harga pembelian barang pake nested if
 * jika total harga sama dengan 0 maka tampilkan pesan "harga tidak valid"
 * jika total pembelian melebihi 1 juta , maka berika diskon sebesar 10%,
 *  sedangkan jika total pembelian melebihi 500 ribu maka diberikan diskon sebesar 5%. jika dibawah 500 ribu tidak dibesrikan diskon.
 * tampilkan pesan berikut:
 * "Anda membeli <jumlahBarang> <namaBarang> dengan harga <hargaBarang> per-<namaBarang>,Total harga sebelum diskon = <totalHarga>"
 * lalu cek jika diskon maka tampilkan "selamat! anda mendapatkan diskon sebesar <diskon>%.Harga setelah diskon = <hargasetelahDiskon> jika tidak dapat diskon, tampilkan pesan anda belum dapat diskon, harga total = <hargaSetelahDiskon>"
 *
 */
// jawab

let barang = "sabun";
let harga = 2000;
let jumlah = 2;
let totalHarga = harga * jumlah;
let diskon = 0;
let hargasetelahDiskon = totalHarga;
if (totalHarga > 1000000) {
  diskon = 10;
  hargasetelahDiskon = totalHarga - totalHarga * (diskon / 100);
} else if (totalHarga > 500000) {
  diskon = 5;
  hargasetelahDiskon = totalHarga - totalHarga * (diskon / 100);
}
console.log(`Anda membeli ${jumlah} ${barang} dengan harga ${harga} per-${barang},Total harga sebelum diskon = ${totalHarga}`);
if (diskon > 0) {
  console.log(`Selamat! Anda mendapatkan diskon sebesar ${diskon}%.Harga setelah diskon = ${hargasetelahDiskon}`);
} else {
  console.log(`Anda belum dapat diskon, harga total = ${hargasetelahDiskon}`);
}

//LOOP
/* soal no.9 : for loop
buat program untuk mencari bilangan prima dari 1 - 25 menggunakan for loop
*/
// jawab
let prima = false;
for (index = 2; index <= 25; index++) {
  if (index >= 2) {
    prima = true;

    for (angka = 2; angka < index; angka++) {
      if (index % angka == 0) {
        prima = false;
      }
    }
  }

  if (prima == true) {
    console.log(" " + index + " ");
  }
}

/* soal no.10 : for loop
buat looping untuk menghasilkan nilai rata-rata dari sebuah array bilangan bulat menggunakan function
*/
function hitungRataRata(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

const dataBilanganBulat = [2, 4, 6, 8, 10];
const rataRata = hitungRataRata(dataBilanganBulat);

console.log(rataRata);

/* soal 11  : for loop
Buat function untuk menghitung jumlah huruf kapital pada sebuah string 
 */

function stringKapital(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      count++;
    }
  }
  return count;
}
let string1 = "Hello World";
let string2 = "Kiw,Gimana Kabarnya";
let string3 = "JAVaScRipT";

console.log(stringKapital(string1));
console.log(stringKapital(string2));
console.log(stringKapital(string3));

/* Soal 12 : for loop
Buat fungsi untuk mencari nilai tertinggi dari sebuah array 
 */

/* Soal 13  : for 
buat fungsi untuk membuat piramid (segitiga sama kaki) yang terbuat dari bintang "*" 
dengan jumlah baris parameter yang di tentukan oleh user melalui parameter fungsi 
*/
// jawab

const pyramid = (n) => {
  for (let baris = 1; baris <= n; baris++) {
    let ruang = "";
    for (let kolom = 1; kolom <= 2 * n - 1; kolom++) {
      kolom >= n + 1 - baris && kolom <= n - 1 + baris ? (ruang += "*") : (ruang += " ");
    }
    console.log(ruang);
  }
};
pyramid(5);
