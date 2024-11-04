// export const fetchNews = async (category) => {
//   try {
//     const response = await fetch(
//       `https://newsdata.io/api/1/latest?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&country=ng&category=${category}`
//     );

//     if (!response.ok) {
//       throw new Error(`Failed to fetch: ${response.statusText}`);
//     }

//     const data = await response.json();

//     // Sanitize the data to avoid undefined values
//     return data.results.map((item) => ({
//       creator: item.creator || null,
//       description: item.description || null,
//       image_url: item.image_url || null,
//       link: item.link || null,
//       pubDate: item.pubDate || null,
//       title: item.title || null,
//       source_id: item.source_id || null,
//       source_icon: item.source_icon || null,
//     }));
//   } catch (error) {
//     console.error("Error fetching news:", error);
//     return [];
//   }
// };

// utils/fetchNewsData.js

export async function fetchNewsData(category) {
  try {
    const response = await fetch(
      `https://newsdata.io/api/1/latest?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&country=ng&category=${category}`
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

// pages/science/index.js

// "use client";
// import React from "react";
// import { Content, Wrapper } from "../../styles/styles";
// import Card from "@/components/card";
// import { fetchNewsData } from "../../utils/fetchNewsData";

// export default function SciencePage({ scienceNews }) {
//   return (
//     <Wrapper>
//       <Content>
//         <h1 className="heading">Science News</h1>
//         <section className="card">
//           {scienceNews &&
//             scienceNews.length > 0 &&
//             scienceNews.map((item, index) => (
//               <Card key={index} item={item} index={index} />
//             ))}
//         </section>
//       </Content>
//     </Wrapper>
//   );
// }

// export async function getStaticProps() {
//   const scienceNews = await fetchNewsData("science");

//   return {
//     props: {
//       scienceNews,
//     },
//   };
// }
