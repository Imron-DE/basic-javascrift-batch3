// data objek
const person = {
  nama: "Danu",
  umur: 30,
  pekerjaan: "fullstack developer",
  alamat: {
    jalan: "Jl. Raya no.123",
    kota: "Tanggerang Selatan",
    negara: " Indonesia",
  },
  hobi: ["olahraga", "Musik", "Membaca"],
};

// cara akses nilai dalam objek menggunakan titik.
console.log("nama :", person.nama);
console.log("kota asal :", person.alamat.kota);

// cara akses data array dalam objek
console.log("hobi:", person.hobi[1]);

// cara mengubah nilai dalam objek
person.umur = 25;
console.log(person);

// cara menambahkan field baru dalam objek
person.isMarried = false;
console.log(person);

// menghapus field dalam objek
delete person.alamat.jalan;
console.log(person);

// cara akses data objek menggunakan destructuring assignment
const { nama, umur, pekerjaan } = person;
console.log(nama);
console.log(umur);
console.log(pekerjaan);
