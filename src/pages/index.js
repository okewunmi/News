"use client";
import React from "react";
import { Inter } from "next/font/google";
import { Content, Wrapper } from "../styles/styles";
import { Card } from "../components/card/index";
import "dotenv/config";
const API = process.env.NEXT_PUBLIC_NEWS_API_KEY;
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
      `https://newsdata.io/api/1/latest?apikey=${API}&country=ng&language=en`
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
