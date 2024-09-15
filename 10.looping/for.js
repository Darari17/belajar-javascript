// loop -> if condition yang berulang selama condition masih true

// segment 1 -> dieksekusi satu kali sebelum loop jalan
// segment 2 -> condition
// segment 3 -> dieksekusi di akhir setipa iterasi atau pengulangan.

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // berhentiin loop
    // continue; // skip iterasi sekarang
  }
  console.log(`${i}. masuk loop`);
}

// jika ada looping di dalam looping, maka looping terdalam harus selesai dahulu.
