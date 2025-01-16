// tryCatch buat error Handling

function penjumlahan(a, b) {
  try {
    if (a === 0 || b === 0) {
      throw new Error("Nilai tidak valid");
    }
    return a + b;
  } catch (error) {
    console.log(error);
  }
}

console.log("ok =>", penjumlahan(10, 2));
console.log("error =>", penjumlahan(0, 2));
