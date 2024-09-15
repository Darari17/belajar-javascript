// Buatlah suatu function bernama laptopGpu yang menerima 2 parameter, dimana parameter itu berupa array bernama laptop dan  gpu.  sehingga ketika kode dijalankan akan mencetak output seperti berikut :
// [ '{acer dengan gpu 4050}', '{asus dengan gpu 4060}', '{axioo dengan gpu 4070}',  '{hp dengan gpu 4080}',  '{lenovo dengan gpu 4090}']

let laptop = ["asus", "lenovo", "acer", "hp", "axioo"];
let gpu = [4070, 4090, 4050, 4080, 4060];

const laptopGpu = (laptop, gpu) => {
  laptop.sort();
  gpu.sort();

  let result = laptop.map((item, index) => {
    return `${item} dengan gpu ${gpu[index]}`;
  });

  return result;
};

console.log(laptopGpu(laptop, gpu));
