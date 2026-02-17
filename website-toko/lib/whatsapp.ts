export const createWhatsAppLink = ({
  product = "Belum ditentukan",
  category = "Umum",
  url = "",
}: {
  product?: string;
  category?: string;
  url?: string;
}) => {
  const telp = process.env.NEXT_PUBLIC_TELP ?? "";

  if (!telp) return "#";

  const message = `Halo Sanggar Alam 👋

Saya ingin konsultasi terkait layanan berikut:

📌 Produk: ${product}
📂 Kategori: ${category}
${url ? `🔗 Referensi produk: ${url}` : ""}

Detail proyek:
📍 Lokasi:
📏 Perkiraan ukuran:
📝 Deskripsi tambahan:

Mohon informasi estimasi biaya dan proses pengerjaan.
Terima kasih.`;

  return `https://wa.me/${telp}?text=${encodeURIComponent(message)}`;
};
