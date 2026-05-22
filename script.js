// Fungsi ini akan dipanggil ketika tombol di HTML diklik
function hitungNilai() {
    
    // 1. OPERATOR PENUGASAN (=)
    // Mengambil nilai inputan dan menyimpannya ke variabel
    let nilaiTugas = parseFloat(document.getElementById('inputTugas').value);
    let nilaiUjian = parseFloat(document.getElementById('inputUjian').value);
    
    // Validasi input
    if (isNaN(nilaiTugas) || isNaN(nilaiUjian)) {
        alert("Harap masukkan angka yang valid!");
        return;
    }

    // 2. OPERATOR ARITMATIK (+ dan /)
    // Menjumlahkan lalu membagi dua untuk mencari rata-rata
    let nilaiAkhir = (nilaiTugas + nilaiUjian) / 2;

    // OPERATOR PENUGASAN GABUNGAN (+=)
    // Menambahkan bonus 5 poin ke nilaiAkhir
    nilaiAkhir += 5; 

    let status = "";

    // 3. OPERATOR PEMBANDING (>=)
    // Mengecek kelulusan (Batas nilai 75)
    if (nilaiAkhir >= 75) {
        status = "<span style='color: green; font-weight: bold;'>LULUS 🎉</span>"; 
    } else {
        status = "<span style='color: red; font-weight: bold;'>TIDAK LULUS 😢</span>"; 
    }

    // Menampilkan hasil ke layar HTML (DOM Manipulation)
    document.getElementById('hasil').innerHTML = 
        "Nilai Akhir (termasuk bonus 5 poin): <strong>" + nilaiAkhir + "</strong><br>" +
        "Status: " + status;
}