// penjelasan array secara detail

let myArray = [1, 2, 3, 4, 5];

// cara akses data dalam array berdasarkan indeksnya
let nilaiPertama = (myArray = [0]);
let nilaiKedua = (myArray = [1]);
// dst

console.log("nilai pertama array :", nilaiPertama);
console.log(`nilai kedua array : ${nilaiKedua}`);

// mengubah nilai array pada indeks tertentu
myArray[2] = 6;
console.log(`Array setelah diubah : ${myArray}`);

// Array methode : metode yang digunakan untuk memanipulasi array

// . push : methode yang digunakan untuk memanipulasi array
myArray.push(7); // menambahkan nilai 7 kebaris akhir
console.log("push : ", myArray);

// .shift : methode array untuk  menghapus data pertama dari array
myArray.shift();
console.log("shift :", myArray);

// .unshift : methode array untuk  menambahkan data ke awal array
myArray.unshift(1, 2);
console.log("shift :", myArray);

// .pop : methode array untuk menghapus data terkait array
let nilaiTerakhir = myArray.pop();
console.log("pop :", nilaiTerakhir);
console.log("popped array : ", myArray);

// .splice methode array untuk menyisipkan data kedalam array
myArray.splice(2, 0, 3);
console.log("splice :", myArray);

// .slice methode untuk memotong data dalam array
myArray.slice(4, 1);
console.log("slice :", myArray);

// .sort methode array untuk mengurutkan data(ascending) dalam array
myArray.sort();
console.log("sort :", myArray);

// .reverse methode array untuk mengurutkan data(descending) dalam array
myArray.reverse();
console.log("reverse :", myArray);

// .indexOf  methode array untuk mencari Index data dalam array
let nilaiCari = 3;
let indexNilai = myArray.indexOf(nilaiCari);

if (indexNilai === nilaiCari) {
  console.log(`Nilai ${nilaiCari} ditemukan pada index: ${indexNilai}`);
} else {
  console.log(`Nilai ${nilaiCari} tidak ditemukan dalam array `);
}

/// .concat : methode untuk menggabungkan 2 array
let arrayLain = [7, 8, 9];
let gabungArray = myArray.concat(arrayLain);
console.log("concat:", gabungArray);

// .foreach methode array untuk melakukan iterasi atau perulangan pada array
myArray.forEach((i) => {
  console.log("forEach:", i);
});

// .toString : methode array untuk mengubah data array menjadi string
console.log("tostring:", myArray.toString());

// .tolocalestring : methode array untuk mengubah array menjadi string dengan format lokal
const price = [1000, 2000, 3000];
const arrayToLocaleString = price.toLocaleString({
  style: "currency",
  currency: "IDR",
});
console.log("tolocalstring", arrayToLocaleString);

// .reduce : methode array untuk mengakumulasi nilai array ke dalam satu hasil akhir (mentotalkan data array)
const sum = myArray.reduce((accumulator, currentvalue) => {
  console.log(accumulator);
  console.log(currentvalue);

  return accumulator + currentvalue;
}, 0);
console.log("reduce:", sum);

// Manipulasi data array object

const datasiswa = [
  {
    id: 1,
    name: "Danu",
    age: 25,
    hobby: ["Membaca", "Menulis"],
  },
  {
    id: 2,
    name: "Dani",
    age: 26,
    hobby: ["Membaca", "Menggambar"],
  },
  {
    id: 3,
    name: "Dina",
    age: 27,
    hobby: ["Memasak", "Menangis"],
  },
  {
    id: 4,
    name: "Deni",
    age: 28,
    hobby: ["Gaming", "Menyanyi"],
  },
  {
    id: 5,
    name: "Doni",
    age: 28,
    hobby: ["Menari", "Menyanyi"],
  },
];

// contoh lain forEach
const forEachDataSiswa = datasiswa.forEach((data) => {
  console.log("forEach dataSiswa :", data.name, data.age <= 26);
});

// .map : methode array untuk mengubah setiap element array menjadi nilai baru atau mapping data tertentu
const getNameFromDataSiswa = datasiswa.map((item) => {
  return item.name;
});

// .filter : methode array untuk memfilter data array berdasarkan kondisi tertentu
const filterDataSiswa = datasiswa.filter((item) => {
  return item.age >= 27;
});

console.log("filter :", filterDataSiswa);

// .find : methode array untuk mencari data dalam array
const findDataSiswa = datasiswa.find((data) => {
  return data.name === "Dina";
});

// .lenght methode array untuk menghitung panjang / jumlah data dalam array
let lenghtDataSiswa = datasiswa.lenght;
console.log("lenght:", lenghtDataSiswa);

// .every : methode methode array untuk melakukan pengecekan apakah semua elemen dalam array memenuhi suatu kriteria
const everyDataSiswa = datasiswa.every((item) => {
  return item.age === 25;
});
console.log("every:", everyDataSiswa);
