export const SERVICES = [
  {
    id: "residential",
    illustration: "house",
    eyebrow: "Hunian",
    title: "Konstruksi Rumah & Kos-Kosan",
    description:
      "Dari rumah tinggal satu lantai hingga bangunan kos multi-unit, kami menangani perencanaan, struktur, hingga finishing dengan pengawasan mutu di setiap tahap.",
    detail:
      "Cocok untuk pemilik lahan pribadi maupun investor kos-kosan yang butuh kepastian jadwal dan anggaran. Tim kami menyusun gambar kerja dan RAB secara rinci sejak awal, sehingga tidak ada biaya tersembunyi di tengah jalan.",
    tags: ["Rumah Tinggal", "Renovasi", "Kos-Kosan", "RAB & Perencanaan"],
  },
  {
    id: "commercial",
    illustration: "warehouse",
    eyebrow: "Komersial",
    title: "Konstruksi Gudang & Ruko",
    description:
      "Gudang penyimpanan, ruko, dan fasilitas komersial dirancang untuk efisiensi ruang dan daya tahan jangka panjang, dikerjakan sesuai linimasa operasional bisnis Anda.",
    detail:
      "Struktur direncanakan mempertimbangkan beban operasional harian dan kemudahan akses kendaraan. Kami terbiasa bekerja dengan tenggat yang selaras dengan jadwal buka bisnis, agar aktivitas Anda tidak tertunda.",
    tags: ["Gudang", "Ruko", "Struktur Baja", "Fondasi Beton"],
  },
  {
    id: "industrial",
    illustration: "hangar",
    eyebrow: "Industrial",
    title: "Konstruksi Hangar & Fasilitas Berat",
    description:
      "Bentang lebar dan beban berat menuntut presisi struktural. Tim kami berpengalaman membangun hangar dan fasilitas industri sesuai standar keselamatan kerja.",
    detail:
      "Perhitungan struktur baja bentang lebar dilakukan oleh tim perencana berpengalaman, dengan pengawasan K3 ketat di setiap fase pengerjaan untuk proyek berskala industri.",
    tags: ["Hangar", "Bentang Lebar", "Baja Berat", "K3 Konstruksi"],
  },
];

export const BUILD_PROCESS = [
  {
    title: "Konsultasi & Survei",
    description: "Diskusi kebutuhan Anda dan survei lokasi langsung oleh tim kami.",
  },
  {
    title: "Perencanaan & RAB",
    description: "Penyusunan gambar kerja, struktur, dan rencana anggaran biaya yang transparan.",
  },
  {
    title: "Konstruksi & Pengawasan",
    description: "Pengerjaan di lapangan diawasi tim pengawas mutu di setiap tahap.",
  },
  {
    title: "Serah Terima & Garansi",
    description: "Serah terima kunci dengan masa garansi struktur dan finishing.",
  },
];

export const PROJECT_TYPE_OPTIONS = [...SERVICES.map((service) => service.title), "Lainnya"];
