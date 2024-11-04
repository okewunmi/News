"use client";
import React from "react";
import { Inter } from "next/font/google";
import { Content, Wrapper } from "../../styles/styles";
import { Card } from "@/components/card";
import { fetchNewsData } from "../../../utils/fetchNews";
// Import the reusable function

const inter = Inter({ subsets: ["latin"] });

export default function BusinessPage({ crimeNews }) {
  return (
    <Wrapper>
      <Content>
        <h1 className="heading">Crime News</h1>
        <section className="card">
          {crimeNews &&
            crimeNews.length > 0 &&
            crimeNews.map((item, index) => (
              <Card key={index} item={item} index={index} basePath="crime" />
            ))}
        </section>
      </Content>
    </Wrapper>
  );
}

// Reuse `fetchNewsData` with the category argument
export async function getStaticProps() {
  const crimeNews = await fetchNewsData("crime");

  return {
    props: {
      crimeNews,
    },
  };
}
