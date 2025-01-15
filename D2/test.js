// Array Manipulation
const employee = [
  {
    id: 1,
    nama: "Danu",
    age: 25,
    jobDesk: [{ title: "frontend", salary: 12000000 }],
    hobby: ["membaca", "menulis"],
  },
  {
    id: 2,
    nama: "Dani",
    age: 26,
    jobDesk: [{ title: "frontend", salary: 2000000 }],
    hobby: ["membaca", "menulis"],
  },
  {
    id: 3,
    nama: "Dina",
    age: 27,
    jobDesk: [{ title: "backend", salary: 3000000 }],
    hobby: ["membaca"],
  },
  {
    id: 4,
    nama: "deni",
    age: 25,
    jobDesk: [{ title: "backend", salary: 4000000 }],
    hobby: ["membaca"],
  },
  {
    id: 5,
    nama: "Dian",
    age: 27,
    jobDesk: [{ title: "frontend", salary: 8000000 }],
    hobby: ["membaca"],
  },
];

/* Cari karyawan yang mempunyai hobi "menulis" dan usia nya diatas 25 tahun pake .find dan .includes */

const hobbykaryawan = employee.find((data) => {
  return data.hobby.includes("menulis") && data.age > 25;
});
console.log("1.Karyawan yang suka menulis dan usianya diatas 25 tahun:", hobbykaryawan);

/* Tampilkan data karyawan yang bekerja sebagai "backend" dan punya gaji lebih dari 3 jt .filter dan .some */

const karyawanBackend = employee.filter((data) => {
  return data.jobDesk.some((job) => job.title === "backend" && job.salary > 3000000);
});

console.log("2.Karyawan yang bekerja sebagai backend dan gaji lebih dari 3jt:", karyawanBackend);

/* tampilkan nama karyawan yang punya satu hobby pake .filter, .map, .lenght */

const karyawanHobby = employee
  .filter((data) => {
    return data.hobby.length === 1;
  })
  .map((data) => {
    return data.nama;
  });
console.log("3.Karyawan yang memiliki satu hobby:", karyawanHobby);

/* cari nama karyawan yang posisinya "frontend" dengan gaji tertinggi,lalu return nama karyawannya pake .filter, .some, .reduce, .find  */

const karyawanTertinggi = employee
  .filter((data) => {
    return data.jobDesk.some((job) => job.title === "frontend");
  })
  .reduce((highest, current) => {
    return highest.jobDesk[0].salary < current.jobDesk[0].salary ? current : highest;
  }).nama;
console.log("4.Karyawan frontend dengan gaji tertinggi adalah:", karyawanTertinggi);

// Math
// cari nilai tertinggi dari 3 siswa menggunakan math object

let siswa1 = 49;
let siswa2 = 70;
let siswa3 = 80;

const nilaiTertinggi = Math.max(siswa1, siswa2, siswa3);

console.log("5.nilai tertinggi adalah =>", nilaiTertinggi);

// cari selisih gaji tertinggi dan terendah dari data employee menggunakan math filter, math metode, spreadoperator, map.floor

let gajiTertinggi = Math.max(...employee.map((data) => Math.max(...data.jobDesk.map((job) => job.salary))));
let gajiTerendah = Math.min(...employee.map((data) => Math.min(...data.jobDesk.map((job) => job.salary))));
console.log("6.selisih gaji tertinggi dan terendah adalah =>", gajiTertinggi - gajiTerendah);

// kombinasi

// hitung total gaji semua karyawan setelah dipotong 12% pake reduce dan math.floor

const totalGaji = employee.reduce((total, current) => {
  return (
    total +
    current.jobDesk.reduce((totalJob, currentJob) => {
      return totalJob + Math.floor(currentJob.salary * 0.12);
    }, 0)
  );
}, 0);
console.log("7.total gaji semua karyawan setelah dipotong 12% adalah =>", totalGaji);

// tamplkan semua karyawan yang memiliki hobi terbanyak dengan map , math.max,filter & lenght.output [danu dani]

const karyawanHobiTerbanyak = employee
  .map((data) => {
    return { nama: data.nama, hobi: data.hobby.length };
  })
  .filter((data) => data.hobi === Math.max(...employee.map((data) => data.hobby.length)))
  .map((data) => data.nama);

console.log("Karyawan yang memiliki hobi terbanyak adalah =>", karyawanHobiTerbanyak);
