export const artikels = [
    {
        title: "Hosting & Domain",
        slug: "hosting-domain",
        date: "28 Juni 2026",
        category: "teknologi",
        description: "Panduan Hosting & Domain dari dasar.",
        content: `Membangun eksistensi digital sering kali dianalogikan seperti mendirikan bangunan fisik. Sebelum Anda memikirkan seberapa estetis desain interior atau seberapa canggih sistem di dalamnya, Anda memerlukan tanah untuk berpijak dan alamat agar orang lain bisa berkunjung. Dalam dunia web, dua komponen mendasar ini disebut Hosting dan Domain.

### 1. Domain: Alamat Rumah Anda di Internet

Secara teknis, setiap server di internet diidentifikasi melalui deretan angka rumit yang disebut IP Address (contoh: 192.168.1.1). Karena memori manusia tidak dirancang untuk mengingat angka-angka tersebut, diciptakanlah Domain Name System (DNS). Domain (seperti vivideditorial.com) bertindak sebagai penunjuk arah yang ramah pengguna, mengubah koordinat digital yang rumit menjadi sebuah identitas atau brand yang mudah diingat.

### 2. Hosting: Ruang Fisik Penyimpanan Data

Jika domain adalah alamatnya, maka hosting adalah kapling tanah dan bangunan fisiknya. Hosting adalah komputer server khusus yang menyala 24 jam tanpa henti untuk menyimpan semua berkas website Anda—mulai dari kode HTML, CSS, JavaScript, gambar, hingga database. Tanpa hosting, website Anda hanya akan menjadi proyek lokal di komputer Anda yang tidak bisa diakses oleh dunia luar.

### Jenis-Jenis Hosting yang Perlu Diketahui:

* Shared Hosting: Seperti menyewa kamar di sebuah apartemen. Anda berbagi fasilitas server dengan pengguna lain. Cocok untuk pemula dan website skala kecil.
* VPS (Virtual Private Server): Anda mendapatkan ruang khusus yang terisolasi dengan sumber daya mandiri. Seperti menyewa rumah town-house.
* Cloud Hosting: Menggunakan jaringan server yang saling terhubung untuk menjamin performa dan waktu aktif (uptime) yang maksimal.

Memahami kombinasi keduanya adalah langkah awal mutlak sebelum Anda melangkah ke tahap pengembangan web yang lebih kompleks.`

    },
    {
        title: "Next Js Website",
        slug: "nextjs-website",
        date: "28 Juni 2026",
        category: "teknologi",
        description: "Belajar membuat REST API.",
        content: `Next.js telah berevolusi jauh dari sekadar framework React untuk rendering sisi server (SSR). Di era Next.js modern dengan App Router, framework ini bertindak sebagai full-stack arsitek yang perkasa. Salah satu fitur paling kuat yang dimilikinya adalah kemampuan untuk membuat backend internal yang efisien melalui Route Handlers untuk menyajikan REST API.

### Mengapa Membuat REST API di Next.js?

Dahulu, desainer web harus membangun server terpisah (misalnya menggunakan Node.js/Express atau Laravel) untuk menangani data backend, kemudian menghubungkannya ke frontend React. Next.js memangkas arsitektur tersebut. Anda dapat mengelola visual frontend sekaligus jalur data (API) dalam satu proyek yang sama (monorepo), menghemat waktu konfigurasi dan deployment.

### Langkah Dasar Membuat Route Handler (REST API)

Di dalam struktur App Router, Anda cukup membuat file bernama route.ts atau route.js di dalam folder API Anda. Berikut adalah contoh restrukturisasi endpoint GET untuk mengambil data secara dinamis:

// app/api/v1/posts/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const data = [
    { id: 1, title: "Belajar Hosting Dasar", status: "published" },
    { id: 2, title: "Eksplorasi Next.js API", status: "draft" }
  ];
  
  return NextResponse.json({ success: true, data });
}

### Mendukung Berbagai Metode HTTP

REST API yang baik memanfaatkan metode HTTP secara semantik. Di Next.js, Anda tinggal mengekspor fungsi sesuai nama metodenya:

* GET: Untuk mengambil atau membaca data.
* POST: Untuk mengirim dan membuat data baru (misal: form registrasi/newsletter).
* PUT / PATCH: Untuk memperbarui data yang sudah ada.
* DELETE: Untuk menghapus data.

Dengan menguasai pembuatan REST API di Next.js, Anda siap membangun aplikasi web yang dinamis, interaktif, dan memiliki skalabilitas tinggi.`
    },
    {
        title: "Tips Digital Marketing",
        slug: "tips-digital-marketing",
        date: "28 Juni 2026",
        category: "bisnis",
        description: "Cara meningkatkan penjualan.",
        content: "..."
    },

];