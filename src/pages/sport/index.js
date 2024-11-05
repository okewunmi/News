"use client";
import React from "react";
import { Inter } from "next/font/google";
import { Content, Wrapper } from "../../styles/styles";
import { Card } from "@/components/card";
import { fetchNewsData } from "../../../utils/fetchNews";
// Import the reusable function

const inter = Inter({ subsets: ["latin"] });

export default function BusinessPage({ sportNews }) {
  return (
    <Wrapper>
      <Content>
        <h1 className="heading">Sports News</h1>
        <section className="card">
          {sportNews &&
            sportNews.length > 0 &&
            sportNews.map((item, index) => (
              <Card key={index} item={item} index={index} basePath="sport" />
            ))}
        </section>
      </Content>
    </Wrapper>
  );
}

// Reuse `fetchNewsData` with the category argument
export async function getStaticProps() {
  const sportNews = await fetchNewsData("sports");

  return {
    props: {
      sportNews,
    },
  };
}
