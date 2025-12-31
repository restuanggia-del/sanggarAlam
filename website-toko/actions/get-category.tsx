import { Category } from "@/types";

const URL = `${process.env.PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category | null> => {
  const res = await fetch(`${URL}?id=${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.warn("getCategory failed", res.status, text);
    return null;
  }

  try {
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return null;
    return data[0];
  } catch (err) {
    console.warn("getCategory: invalid JSON response", err);
    return null;
  }
};

export default getCategory;
