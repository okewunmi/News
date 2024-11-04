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
        <h1 className="heading">Latest News</h1>
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
      `https://newsdata.io/api/1/latest?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&country=ng`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      props: {
        news: data.results,
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
