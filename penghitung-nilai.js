// Program Penghitung Nilai Mahasiswa
// Menggunakan Node.js

console.log("================================");
console.log("   PROGRAM PENGHITUNG NILAI");
console.log("       MAHASISWA");
console.log("================================");

// Data mahasiswa
const nama = "Ade Ayu Wandira";
const nim = "24260007";
const mataKuliah = "Aplikasi Berbasis Service";

// Data nilai
const nilaiTugas = 90;
const nilaiUTS = 85;
const nilaiUAS = 88;

// Menghitung nilai akhir
const nilaiAkhir =
    (nilaiTugas * 0.30) +
    (nilaiUTS * 0.30) +
    (nilaiUAS * 0.40);

// Menentukan predikat nilai
let predikat;

if (nilaiAkhir >= 85) {
    predikat = "A";
} else if (nilaiAkhir >= 75) {
    predikat = "B";
} else if (nilaiAkhir >= 65) {
    predikat = "C";
} else if (nilaiAkhir >= 50) {
    predikat = "D";
} else {
    predikat = "E";
}

// Menampilkan data mahasiswa
console.log("\nDATA MAHASISWA");
console.log(`Nama         : ${nama}`);
console.log(`NIM          : ${nim}`);
console.log(`Mata Kuliah  : ${mataKuliah}`);

// Menampilkan nilai
console.log("\nDATA NILAI");
console.log(`Nilai Tugas  : ${nilaiTugas}`);
console.log(`Nilai UTS    : ${nilaiUTS}`);
console.log(`Nilai UAS    : ${nilaiUAS}`);
console.log(`Nilai Akhir  : ${nilaiAkhir}`);
console.log(`Predikat    : ${predikat}`);

console.log("================================");