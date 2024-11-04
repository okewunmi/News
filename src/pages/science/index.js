// "use client";
import React from "react";
import { Inter } from "next/font/google";
import { Content, Wrapper } from "../../styles/styles";
import { Card } from "@/components/card";
import { fetchNewsData } from "../../../utils/fetchNews";
// Import the reusable function

const inter = Inter({ subsets: ["latin"] });

export default function BusinessPage({ scienceNews }) {
  return (
    <Wrapper>
      <Content>
        <h1 className="heading">Science News</h1>
        <section className="card">
          {scienceNews &&
            scienceNews.length > 0 &&
            scienceNews.map((item, index) => (
              <Card key={index} item={item} index={index} basePath="science" />
            ))}
        </section>
      </Content>
    </Wrapper>
  );
}

// Reuse `fetchNewsData` with the category argument
export async function getStaticProps() {
  const scienceNews = await fetchNewsData("science");

  return {
    props: {
      scienceNews,
    },
  };
}
