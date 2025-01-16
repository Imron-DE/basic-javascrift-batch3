const fs = require("fs");

// SOAL 1
// buat perintah untuk baca file.json bernma employee.json
// yang berisi data JSON dan tampilin semua nama nama karyawan
let data = fs.readFileSync("./employee.json", "utf-8");
data = JSON.parse(data);
let dataBaru = data;
console.log("data employee =>", dataBaru);

// // // SOAL 2
// // // buat perintah untuk nambahin minimal 1 data JSON kedalam file bernama employee.json
// // // readFile & replace pake writeFile

let newData = [
  {
    id: 7,
    nama: "doni",
    age: 27,
    jobDesk: [
      {
        title: "Quality Assurance",
        salary: 9000000,
      },
    ],
    hobby: ["membaca", "menulis"],
  },
];

fs.readFile("./employee.json", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return error;
  }
  let employee = JSON.parse(data);
  employee.push(newData);

  fs.writeFile("./employee.json", JSON.stringify(employee, null, 2), "utf-8", (error) => {
    if (error) {
      console.log(error);
      return error;
    }
    console.log("2.File berhasil disimpan");
  });
});

// // SOAL 3
// // buat perintah untuk mencari karyawan yang usianya diatas atau sama dengan 26
// // dan simpan data nya kedalam file baru bernama karyawan_tuwir.json
// // readfile&writeFile

fs.readFile("./employee.json", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return error;
  }
  let employee = JSON.parse(data);
  const filterData = employee.filter((data) => data.age >= 26);
  fs.writeFile("karyawan_tuwir.json", JSON.stringify(filterData, null, 2), "utf-8", (error) => {
    if (error) {
      console.log(error);
      return error;
    }
    console.log("3.File berhasil disimpan");
  });
});

// // SOAL 4
// // buat perintah untuk menghapus karyawan dengan id=1 dari data employee.json
// // lal simpan perubahan datanya di file baru bernama deleted_data
// // readfile & writefile
fs.readFile("./employee.json", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return error;
  }
  let employee = JSON.parse(data);
  const deletedData = employee.filter((data) => data.id !== 2);
  fs.writeFile("deleted_data.json", JSON.stringify(deletedData, null, 2), "utf-8", (error) => {
    if (error) {
      console.log(error);
      return error;
    }
    console.log("4.File berhasil disimpan");
  });
  fs.writeFile("./employee.json", JSON.stringify(deletedData, null, 2), "utf-8", (error) => {
    if (error) {
      console.log("Gagal menyimpan file employee.json:", error);
      return;
    }
    console.log("4.File employee.json berhasil diperbarui");
  });
});

// // JSON parse buat ngubah array of object jadi JSON
// JSON stringify buat ngubah data json ke string
