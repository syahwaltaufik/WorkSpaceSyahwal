// Nama file: classinheritance.js

// 1. Class Induk (Parent Class)
class Mahasiswa {
  constructor(nama, universitas) {
    this.nama = nama;
    this.universitas = universitas;
  }

  // Method dari class induk
  perkenalan() {
    console.log(`Halo, saya ${this.nama} dari ${this.universitas}.`);
  }
}

// 2. Class Turunan (Child Class) - Mewarisi class Mahasiswa
class MahasiswaIT extends Mahasiswa {
  constructor(nama, universitas, programStudi) {
    // super() memanggil constructor dari class Mahasiswa
    super(nama, universitas); 
    this.programStudi = programStudi;
  }

  // Method khusus untuk class MahasiswaIT
  ngoding() {
    console.log(`${this.nama} anak ${this.programStudi} lagi sibuk bikin aplikasi web...`);
  }
}

// ==========================================
// BAGIAN EKSEKUSI (TESTING KODE)
// ==========================================

// Membuat instance dari class MahasiswaIT
const mhs = new MahasiswaIT("Syahwal", "Universitas Pamulang", "Teknik Informatika");

// Memanggil method dari class induk
mhs.perkenalan(); 
// Output: Halo, saya Syahwal dari Universitas Pamulang.

// Memanggil method dari class turunan
mhs.ngoding();
// Output: Syahwal anak Teknik Informatika lagi sibuk bikin aplikasi web...