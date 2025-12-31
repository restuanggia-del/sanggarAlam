import { Category } from "@/types";

const URL = `${process.env.PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      const text = await res.text();
      console.error(`[getCategories] Fetch error ${res.status}: ${text}`);
      return [];
    }
    return await res.json();
  } catch (error) {
    console.error('[getCategories] Network error:', error);
    return [];
  }
};

export default getCategories;
