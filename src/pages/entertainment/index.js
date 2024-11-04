"use client";
import React from "react";
import { Inter } from "next/font/google";
import { Content, Wrapper } from "../../styles/styles";
import { Card } from "@/components/card";
import { fetchNewsData } from "../../../utils/fetchNews";
// Import the reusable function

const inter = Inter({ subsets: ["latin"] });

export default function BusinessPage({ entertainmentNews }) {
  return (
    <Wrapper>
      <Content>
        <h1 className="heading">Entertainment News</h1>
        <section className="card">
          {entertainmentNews &&
            entertainmentNews.length > 0 &&
            entertainmentNews.map((item, index) => (
              <Card
                key={index}
                item={item}
                index={index}
                basePath="entertainment"
              />
            ))}
        </section>
      </Content>
    </Wrapper>
  );
}

// Reuse `fetchNewsData` with the category argument
export async function getStaticProps() {
  const entertainmentNews = await fetchNewsData("entertainment");

  return {
    props: {
      entertainmentNews,
    },
  };
}
