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

  const message = `
Halo Sanggar Alam 👋
Saya ingin konsultasi.

Produk: ${product}
Kategori: ${category}
${url ? `Link: ${url}` : ""}

Lokasi proyek:
Perkiraan ukuran:
Catatan tambahan:
`;

  return `https://wa.me/${telp}?text=${encodeURIComponent(message)}`;
};
