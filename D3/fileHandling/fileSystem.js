// di node js ada modul yang berfungsi untuk file handling
// salah satunya modul fs(file system) untuk membua/baca= file

// import modulnya
const fs = require("fs");

// Create : menulis file menggunakan .writeFile("filePath", "isi file ", encoding return)
fs.writeFile("./tetxFile.txt", "Hallo, aku adalah seorang junior programer ", "utf-8", (error) => {
  if (error) {
    console.log(error);
    return error;
  }
  console.log("File berhasil disimpan");
});

// .apppendFile("filePath", "isiFile", encoding , return)
let dataDariAPI = " yang ganteng \n aku sedang mencari pekerjaan yang baru";
fs.appendFile("./tetxFile.txt", dataDariAPI, "utf-8", (error) => {
  if (error) {
    console.log(error);
    return error;
  }
  console.log("File berhasil diedit");
});

// .readFile("flePath", "isiFile",encoding,return) : untuk membaca file
fs.readFile("./tetxFile.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return error;
  }
  console.log("Data yang dibaca =>", data);
});

// .unlink ("filePath",return) : untuk menghapus file
fs.unlink("./delete.txt", (error) => {
  if (error) {
    console.log(error);
    return error;
  }
  console.log("Data dihapus");
});
