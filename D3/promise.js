// Promise : objek yang mewakili hasil dari asyncronous

function dataFromServer() {
  return new Promise(function (resolve, reject) {
    let data = [1, 2, 3, 4];
    if (data) {
      resolve(data);
    } else {
      reject("data tidak aya");
    }
  });
}

console.log(dataFromServer());

dataFromServer()
  // .then untuk menangani hasil ketika promise terpenuhi atau data berhasil diambil
  // fungsi result : function yang dieksekusi dengan nilai yang diberikan dari resolve ketika promise berhasil
  .then((result) => {
    console.log("get data", result);
  })
  .catch((err) => {
    // .catch buat nampilin error ketika promise gagal diambil
    console.log("gagal", err);
  });

console.log("== PARAREL PROMISE ==");

// data pertama
function getFirstData() {
  return new Promise((resolve, reject) => {
    let data = "1";
    if (data) {
      resolve(data);
    } else {
      reject("data tidak ditemukan ");
    }
  });
}

// data kedua
function getSecondData() {
  return new Promise((resolve, reject) => {
    let data = "2";
    if (data) {
      resolve(data);
    } else {
      reject("data tidak ditemukan ");
    }
  });
}

// ambil semua data sekaligus

function getAllData() {
  // promise.all : untuk menjalankan pemanggilan beberapa  api sekaligus
  return Promise.all([getFirstData(), getSecondData]);
}

getAllData()
  .then((result) => {
    console.log("all data =>", result); // result jika semua data berhasil dipanaggil
  })
  .catch((err) => {
    console.log("error data =>", err); // error kalo ada salah satu saja yang error (semua error)
  });
