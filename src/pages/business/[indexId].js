import React from "react";
import { Wrapper, Other } from "@/styles/styles";
import { CardDetail } from "@/components/card";
import { Card2 } from "@/components/card/index";
import "dotenv/config";
const API = process.env.NEXT_PUBLIC_NEWS_API_KEY;
function NewsDetail({ news, relatedArticles }) {
  return (
    <Wrapper>
      <CardDetail news={news} />
      <Other>
        <h2 className="head">Related on {news.category}</h2>
        <section className="list">
          {relatedArticles && relatedArticles.length > 0 ? (
            relatedArticles.map((article, index) => (
              <Card2
                article={article}
                index={index}
                basePath="business"
                key={index}
              />
            ))
          ) : (
            <p>No related articles available.</p>
          )}
        </section>
      </Other>
    </Wrapper>
  );
}

export default NewsDetail;

export async function getStaticPaths() {
  try {
    const response = await fetch(
      `https://newsdata.io/api/1/latest?apikey=${API}&country=ng&category=business`
    );
    const data = await response.json();

    if (!Array.isArray(data.results)) {
      throw new Error("Invalid API response structure");
    }

    const paths = data.results.map((article, index) => ({
      params: { indexId: index.toString() },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching paths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const response = await fetch(
      `https://newsdata.io/api/1/latest?apikey=${API}&country=ng&category=business`
    );
    const data = await response.json();

    if (!Array.isArray(data.results)) {
      throw new Error("Invalid API response structure");
    }

    const news = data.results[parseInt(params.indexId)];
    const relatedArticles = data.results.filter(
      (_, index) => index !== parseInt(params.indexId)
    );

    return {
      props: {
        news,
        relatedArticles,
      },
    };
  } catch (error) {
    console.error("Error fetching news:", error);
    return {
      props: {
        news: null,
        relatedArticles: [],
      },
    };
  }
}
