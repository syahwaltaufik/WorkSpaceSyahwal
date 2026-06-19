// Membuat blueprint class
class Mahasiswa {
  constructor(nama, fakultas) {
    this.nama = nama;         // Properti nama
    this.fakultas = fakultas; // Properti fakultas
  }

  // Method (fungsi) di dalam class
  perkenalan() {
    console.log(`Halo, perkenalkan nama saya ${this.nama} dari fakultas ${this.fakultas}.`);
  }
}

// Bikin objek (instance) dari class Mahasiswa
const mhs1 = new Mahasiswa("Budi", "Ekonomi");

// Panggil method-nya biar muncul di layar
mhs1.perkenalan(); 
// Output: Halo, perkenalkan nama saya Budi dari fakultas Ekonomi.