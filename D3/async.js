/*   secara default bahasa pemrograman dieksekusi secara berurut (syncronus) dari a-z dari 1-100. Asyncronous : teknik eksekusi kode sacara paralel tanpa harus mengunggu eksekusi program lain selesai artinya fungsi yang dibuat menggunakan teknik asyncronous kaan bersamaan dijalankan dengna code lain
 */

// Fungsi biasa

function getDataFromServer() {
  // promise adalah sebuah objek yang mewakili hasil dari operasi asyncronous
  return new Promise(function (resolve, reject) {
    let data = { id: 1, name: "danu", job: "Fullstack" };
    if (data) {
      resolve(data);
    } else {
      reject("data  tidak tersedia");
    }
  });
}

console.log(getDataFromServer());

// Async

async function fetchData() {
  // blok tryCatch : eror handling untuk menangani error jika data gagal diambil
  try {
    // await : kata kunci dalam async untuk menunggu hasil dari sebuah promise
    const getData = await getDataFromServer();
    console.log("data yang diterima =>", getData);
  } catch (error) {
    // paarameter error : error yang akan di tammpilkan jika terjadi kegagalan
    console.log("terjadi kesalahan saat mengambil data", error);
  }
}

fetchData();

// contoh llain
async function fetchUserData(userId) {
  try {
    console.log("get data from api =>");
    // tampung data yang diambil dari variable.response
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    console.log("response =>", response);
    // error handlinng untuk cek apakah response sudah sesuai ( kode 200 - 500++)
    // cek apaka statusnya ok/succes kode 200
    if (response.ok !== 200) {
      throw new Error(`HTTP error! status: ${response.status} ${response.statusText} `);
    }

    // konversi responnya ke format JSON
    let user = await response.json();
    // tampilkan datanya
    console.log("Data user by id", user);
  } catch (error) {
    // tampilkan error
    console.log("error => ", error);
  }
}

fetchUserData(10);
