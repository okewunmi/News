"use client";
import React from "react";
import { Inter } from "next/font/google";
import { Content, Wrapper } from "../styles/styles";
import { Card } from "../components/card/index";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ news }) {
  return (
    <Wrapper>
      <Content>
        <div className="head__box">
          <h1 className="heading">Latest News</h1>
          {/* <button disabled>
            <p className="btn_next">Next Page</p>
          </button> */}
        </div>

        <section className="card">
          {news &&
            news.length > 0 &&
            news.map((item, index) => (
              <Card key={index} item={item} index={index} />
            ))}
        </section>
      </Content>
    </Wrapper>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch(
      `https://newsdata.io/api/1/latest?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&country=ng&language=en`
    );

    if (!response.ok) {
      const errorDetail = await response.json(); // Extract error details if available
      throw new Error(
        `Failed to fetch: ${errorDetail.message || response.statusText}`
      );
    }

    const data = await response.json();

    return {
      props: {
        news: data.results || [], // Provide a fallback in case results are undefined
      },
    };
  } catch (error) {
    console.error("Error fetching news:", error);
    return {
      props: {
        news: [],
      },
    };
  }
}

// "use client";
// import React, { useState, useEffect } from "react";
// import { Inter } from "next/font/google";
// import { Content, Wrapper } from "../styles/styles";
// import { Card } from "../components/card/index";
// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch news data on component mount
//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await fetch(
//           `https://newsdata.io/api/1/latest?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&country=ng&language=en`
//         );

//         if (!response.ok) {
//           const errorDetail = await response.json();
//           throw new Error(errorDetail.message || response.statusText);
//         }

//         const data = await response.json();
//         setNews(data.results || []);
//       } catch (error) {
//         console.error("Error fetching news:", error);
//         setError("Failed to load news.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <Wrapper>
//       <Content>
//         <div className="head__box">
//           <h1 className="heading">Latest News</h1>
//         </div>

//         <section className="card">
//           {loading ? (
//             <p>Loading...</p>
//           ) : error ? (
//             <p>{error}</p>
//           ) : news.length > 0 ? (
//             news.map((item, index) => (
//               <Card key={index} item={item} index={index} />
//             ))
//           ) : (
//             <p>No news available.</p>
//           )}
//         </section>
//       </Content>
//     </Wrapper>
//   );
// }
