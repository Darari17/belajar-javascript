// -  function infoSaldo  yang menerima parameter object user untuk mengecek apakah terdapat properti saldo pada object user, jika ada akan mengembalikan promise berupa object user, jika tidak ada akan memberikan pesan Gagal mendapatkan info saldo  .

// - function getInfoPengguna yang menerima parameter object user, dan menggunakan async await untuk mengecek data saldo dengan memanggil function infosaldo. apabila success, maka akan mencetak kalimat :

// Nama Park Doe memiliki sisa saldo 3000000

// jika gagal, maka mencetak pesan error yang didapat

const infoSaldo = (user) => {
  return new Promise((resolve, reject) => {
    if (user.saldo) {
      resolve(user);
    } else {
      reject("Gagal mendapatkan info saldo");
    }
  });
};

const getInfoPengguna = async (user) => {
  try {
    const result = await infoSaldo(user);

    console.log(`Nama ${user.name} memiliki sisa saldo ${user.saldo}`);
  } catch (error) {
    console.log(error);
  }
};

user1 = { name: "Park Doe", saldo: 3000000 };
user2 = { name: "Moeldono" };

getInfoPengguna(user1);
getInfoPengguna(user2);
