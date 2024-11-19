// utils/fetchNewsData.js
import "dotenv/config";
const API = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export async function fetchNewsData(category) {
  try {
    const response = await fetch(
      `https://newsdata.io/api/1/latest?apikey=${API}&country=ng&category=${category}`
    );
    const data = await response.json();

    // Ensure no undefined values are present in the fetched data
    const sanitizedResults = data.results.map((item) => ({
      creator: item.creator || null,
      description: item.description || null,
      image_url: item.image_url || null,
      link: item.link || null,
      pubDate: item.pubDate || null,
      title: item.title || null,
      source_id: item.source_id || null,
      source_icon: item.source_icon || null,
    }));

    return sanitizedResults;
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error);
    return [];
  }
}
