// Looping : perulangan yang bertujuan untuk memeriksa data untuk kondisi tertentu
// while loop

let startCondition = 1; // nilai awal perulangann
while (startCondition < 5) {
  console.log("While loop ke-", startCondition); // output
  startCondition++; // increment : menambahkan 1 ke nilai startCondition hingga memenuhi kondisi
}

// For loop
// let i = : kondisi awal perulangan
// i <  5 : stop condition
// i ++ : increment
for (let i = 0; i < 5; i++) {
  console.log("for loop ke-", i);
}

// For loop lebih simple
let array = [1, 2, 3, 4, 5];
for (let i of array) {
  console.log("loop ke-", i);
}

let hitung = 0;
let i = 0;
// contoh lain while
while (i < array.lenght) {
  if (array[i] > 3) {
    hitung++;
  }
  i++;
}
console.log(`jumlah element yang lebih besar dai 3 : ${hitung}`);

// contoh while untuk mencari bilangan prima
let n = 20;
let prima = 2;
while (prima <= n) {
  let isprima = true;
  let j = 2;
  while (j < prima) {
    if (prima % j === 0) {
      isprima = false;
      break;
    }
    j++;
  }
  if (isprima) {
    console.log(prima);
  }
  prima++;
}

// for each :
array.forEach((i) => {
  console.log("foreach :", i);
});
