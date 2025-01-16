const fs = require("fs");

let carProducts = [
  {
    id: 1,
    name: "ESEMKA SUV 4x4 Hybrid",
    price: null,
    tag: ["Produk Terlaris"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertalite",
      },
      {
        color: "silver",
        transmission: "manual",
        type: "hybrid",
        fuelType: "pertalite",
      },
    ],
    isPreorder: true,
  },
  {
    id: 2,
    name: "BAGATATA Hyper Car V12",
    price: 370000000000,
    tag: ["Produk Terlaris", "Promo"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "engine",
        fuelType: "premium",
      },
      {
        color: "white",
        transmission: "manual",
        type: "engine",
        fuelType: "premium",
      },
    ],
    isPreorder: false,
  },
  {
    id: 3,
    name: "FIRIRIRI F8 Hyper Car Limited Edition",
    price: 4400000000,
    tag: ["Produk Terbaru", "Promo"],
    variant: [
      {
        color: "red",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertalite",
      },
      {
        color: "white",
        transmission: "manual",
        type: "engine",
        fuelType: "pertalite",
      },
    ],
    isPreorder: false,
  },
  {
    id: 4,
    name: "LEMBERGEMBER Revuelto Supercar V12 Plug-In Hybrid",
    price: 7000000000,
    tag: ["Produk Terbaru"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "blue",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "green",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "red",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
    ],
    isPreorder: false,
  },
  {
    id: 5,
    name: "TOYOTA Land Cruiser Prado 4x4",
    price: 250000000,
    tag: ["Produk Terlaris"],
    variant: [
      {
        color: "matte black",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
      {
        color: "army",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
    ],
    isPreorder: false,
  },
  {
    id: 6,
    name: "Wuling YangWang U9 EV",
    price: null,
    tag: ["Produk Terbaru"],
    variant: [
      {
        color: "matte black",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
      {
        color: "navy",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
    ],
    isPreorder: true,
  },
  {
    id: 7,
    name: "Beat Esp 110 Second",
    price: 7500000,
    tag: ["Produk Terlaris", "Bekas"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "navy",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "red",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
    ],
    isPreorder: false,
  },
];

// SOAL :
/** 1
 * Cari dan tampilkan data mobil dengan harga tertinggi dan terendah
 * reduce/math
 */
// Jawab
const hargaTertinggi = Math.max(...carProducts.map((product) => product.price || 0));
const hargaTerendah = Math.min(...carProducts.map((product) => product.price || Infinity));

const mobilTermahal = carProducts.find((product) => product.price === hargaTertinggi);
const mobilTermurah = carProducts.find((product) => product.price === hargaTerendah);

console.log(`1. mobil termahal => ${mobilTermahal.name} dengan harga ${hargaTertinggi}`);
console.log(`1. mobil termurah => ${mobilTermurah.name} dengan harga ${hargaTerendah}`);

/** 2
 * filter dan tampilkan data mobil dengan tag "Promo"
//  */
const mobilPromo = carProducts.filter((product) => product.tag.includes("Promo"));
console.log(
  "2. Mobil dengan tag 'Promo' =>",
  mobilPromo.map((product) => product.name)
);

/** 3
 * Urutkan dan tampilkan mobil dari harga tertinggi ke rendah, jika ada harga yang null, tampilkan diurutan terakhir
 */

const urutanHargaMobil = carProducts.sort((a, b) => {
  if (a.price === null && b.price !== null) return 1;
  if (a.price !== null && b.price === null) return -1;
  return b.price - a.price;
});

console.log("3.urutan harga mobil =>", urutanHargaMobil);
/** 4
 * Kelompokkan mobil-mobil berdasarkan tipe (engine, hybrid, electric) dan tampilkan data mobil berdasarkan kelompoknya
 * output : engine: [{dataMobil}], hybrid: [{dataMobil}], electric: [{dataMObil}]
 */

const mobilKelompok = carProducts.reduce((result, mobil) => {
  const type = mobil.variant[0].type;
  if (!result[type]) result[type] = [];
  result[type].push(mobil);
  return result;
}, {});

console.log("4.mobil kelompok =>", mobilKelompok);

/** 5
 * buat fungsi yang membaca data dari file JSON carProducts.json secara ASYNCHRONOUS,
 * lalu urutkan mobil berdasarkan harga dari tinggi ke rendah,
 * tampilin hasilnya ke file JSON yang sama(carProducts.json)
 */

// jawab

const urutanMobil = (data) => {
  fs.writeFile("carProduct.json", JSON.stringify(data, null, 2), "utf-8", (error) => {
    if (error) {
      console.log(error);
      return error;
    }
    console.log("5.File berhasil disimpan =>");
  });
  fs.readFile("./carProduct.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error);
      return error;
    }
    data = JSON.parse(data);
    console.log("5.Data yang dibaca =>", data);
  });
};

urutanMobil(urutanHargaMobil);

/** 6
 * Buat fungsi untuk menambahkan data mobil baru dari carProducts.json kedalam file "addNewCarProducts.json"
 */
let newDataMobilBaru = [
  {
    id: 9,
    name: "Hyundai Ionic 6",
    price: 500000000,
    tag: ["Produk Terlaris", "Promo"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "engine",
        fuelType: "premium",
      },
      {
        color: "white",
        transmission: "manual",
        type: "engine",
        fuelType: "premium",
      },
    ],
    isPreorder: false,
  },
];

const createNewCar = (oldData, newData) => {
  fs.readFile("./carProduct.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error);
      return error;
    }
    oldData = JSON.parse(data);
    oldData.push(newData);
    fs.writeFile("addNewCarProducts.json", JSON.stringify(oldData, null, 2), "utf-8", (error) => {
      if (error) {
        console.log(error);
        return error;
      }
      console.log("6.File berhasil disimpan =>");
    });
  });
};

createNewCar(carProducts, newDataMobilBaru);

/** 7
 * buat fungsi ASYNCHRONOUS yang mengambil produk mobil dengan harga tertinggi dan terendah,
 * lalu hitung selisih harganya.
 */

const findPriceDifference = async () => {
  try {
    const data = await fs.promises.readFile("./carProduct.json", "utf-8");
    const carProducts = JSON.parse(data);

    const prices = carProducts.map((product) => product.price).filter((price) => price !== null);
    const highestPrice = Math.max(...prices);
    const lowestPrice = Math.min(...prices);

    console.log("7.Selisih harga tertinggi dan terendah adalah:", highestPrice - lowestPrice);
  } catch (error) {
    console.error("Error:", error);
  }
};

findPriceDifference();

/** 8
 * buat fungsi yang mencari mobil dengan varian warna terbanyak.
 */

const membuatWarnaMobil = (data) => {
  try {
    let result = data.map((data) => {
      return {
        nama: data.name,
        variant: data.variant.length,
      };
    });
    const sortedResult = result.sort((a, b) => b.variant - a.variant);
    const carWithMostVariants = sortedResult[0];
    return carWithMostVariants;
  } catch (error) {
    console.error("Error:", error);
  }
};
let getWarna = membuatWarnaMobil(carProducts);

console.log("8.membuat warna mobil", getWarna);

/** 9
 * buat fungsi untuk mencari mobil yang tidak preorder
//  */
const carNoPreorder = (data) => {
  try {
    return data.filter((data) => !data.preorder);
  } catch (error) {
    console.error("Error:", error);
  }
};
let getNoPreorder = carNoPreorder(carProducts);

console.log("9.mobil yang tidak preorder", getNoPreorder);
/** 10
 * buat looping untuk menampilkan SEGITIGA SAMA KAKI
 */

const pyramid = (n) => {
  for (let baris = 1; baris <= n; baris++) {
    let ruang = "";
    for (let kolom = 1; kolom <= 3 * n - 1; kolom++) {
      kolom >= n + 1 - baris && kolom <= n - 1 + baris ? (ruang += "*") : (ruang += " ");
    }
    console.log(ruang);
  }
};
pyramid(10);

/** BONUS FREE 1 SOAL */
/** 11
 * Buat CRUD(Create, Read, Update, Delete) data dari data employee yang sebelumnya dipelajarin
 * HANYA GUNAKAN ARRAY METHOD!
 */
