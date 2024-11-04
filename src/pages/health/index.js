"use client";
import React from "react";
import { Inter } from "next/font/google";
import { Content, Wrapper } from "../../styles/styles";
import { Card } from "@/components/card";
import { fetchNewsData } from "../../../utils/fetchNews";
// Import the reusable function

const inter = Inter({ subsets: ["latin"] });

export default function BusinessPage({ healthNews }) {
  return (
    <Wrapper>
      <Content>
        <h1 className="heading">Health News</h1>
        <section className="card">
          {healthNews &&
            healthNews.length > 0 &&
            healthNews.map((item, index) => (
              <Card key={index} item={item} index={index} basePath="health" />
            ))}
        </section>
      </Content>
    </Wrapper>
  );
}

// Reuse `fetchNewsData` with the category argument
export async function getStaticProps() {
  const healthNews = await fetchNewsData("health");

  return {
    props: {
      healthNews,
    },
  };
}
