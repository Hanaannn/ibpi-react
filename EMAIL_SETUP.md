# Menyambungkan Form Kontak ke Email (EmailJS)

Form kontak sudah siap kirim email, tinggal disambungkan ke akun EmailJS kamu.
Prosesnya ± 10 menit, gratis untuk 200 email/bulan.

Kenapa EmailJS? Karena situs ini React + Vite murni tanpa server backend,
EmailJS memungkinkan kirim email langsung dari browser tanpa perlu bikin API
sendiri.

## 1. Buat akun & sambungkan Gmail

1. Daftar di https://www.emailjs.com (gratis).
2. Di dashboard, buka **Email Services** → **Add New Service** → pilih **Gmail**.
3. Login/izinkan dengan akun **jerylitmanen@gmail.com** (akun inilah yang
   nantinya jadi pengirim & penerima).
4. Catat **Service ID** yang muncul (contoh: `service_abc1234`).

## 2. Buat template untuk pesan masuk (wajib)

1. Buka **Email Templates** → **Create New Template**.
2. **Paling penting:** di field **"To Email"** pada pengaturan template,
   isi manual dengan `jerylitmanen@gmail.com`.
   → Ini sengaja dikunci di sini (bukan dikirim dari kode React), supaya
   alamat tujuan tidak bisa diubah orang lain lewat browser.
3. Isi field **"Reply To"** dengan `{{reply_to}}` — supaya saat kamu klik
   "Reply" di Gmail, otomatis membalas ke email pengunjung, bukan ke EmailJS.
4. Isi body template, contoh:

   ```
   Subject: Pesan baru dari website — {{from_name}}

   Nama: {{from_name}}
   Email: {{from_email}}
   WhatsApp: {{phone}}
   Jenis Proyek: {{project_type}}

   Pesan:
   {{message}}
   ```

5. Simpan, lalu catat **Template ID** (contoh: `template_xyz789`).

## 3. Buat template auto-reply (opsional, tapi direkomendasikan)

1. Buat template baru lagi.
2. Kali ini **"To Email"** diisi `{{from_email}}` (alamat pengunjung yang isi form).
3. Body contoh:

   ```
   Subject: Terima kasih sudah menghubungi Inti Bangun Perkasa Indonesia

   Halo {{from_name}},

   Terima kasih sudah menghubungi kami. Tim kami akan meninjau kebutuhan
   proyek Anda dan membalas dalam 1–2 hari kerja.

   Salam,
   Inti Bangun Perkasa Indonesia
   ```

4. Catat **Template ID** kedua ini.

## 4. Ambil Public Key

1. Buka **Account** → **General** di dashboard EmailJS.
2. Catat **Public Key**.

## 5. Isi environment variables

1. Copy `.env.example` menjadi `.env.local` di root project.
2. Isi dengan nilai yang sudah dicatat:

   ```
   VITE_EMAILJS_SERVICE_ID=service_abc1234
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_autoreply123
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   ```

   (`VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID` boleh dikosongkan kalau tidak mau
   pakai auto-reply — form tetap jalan normal, cuma tanpa balasan otomatis.)

3. Jalankan `npm run dev` lagi supaya env var terbaca, lalu coba isi & kirim
   form dari halaman Kontak.

## 6. Deploy ke Vercel

Env var di `.env.local` tidak ikut ter-upload/ter-commit (sudah di-gitignore).
Jadi di Vercel, tambahkan manual:

1. Buka project di Vercel dashboard → **Settings** → **Environment Variables**.
2. Tambahkan keempat variable di atas (persis nama & isinya).
3. Redeploy.

## Cara kerja proteksi spam (honeypot)

Form punya satu field tersembunyi bernama `company` yang tidak terlihat
manusia (disembunyikan dengan CSS, bukan `display:none` — supaya bot yang
membaca HTML tetap "tertipu" mengisinya). Kalau field itu terisi saat
submit, form akan berpura-pura sukses tanpa benar-benar mengirim email.
Tidak perlu konfigurasi tambahan, sudah aktif otomatis.
