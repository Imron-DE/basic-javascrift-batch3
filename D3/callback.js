// Callback : fungsi yang dikirim sebagai argumen / parameter ke fungsi lain
// atau fungsi yang memnaggil fungsi lain

// fungsi callback

function printLog(data) {
  console.log("callback data =>", data);
}

// fungsi yang dipanggil fungsi callback
const penjumlahan = (a, b) => {
  return a + b;
};

printLog(penjumlahan(1, 2));
