// "use client";
import React from "react";
import { Inter } from "next/font/google";
import { Content, Wrapper } from "../../styles/styles";
import { Card } from "@/components/card";
import { fetchNewsData } from "../../../utils/fetchNews";
// Import the reusable function

const inter = Inter({ subsets: ["latin"] });

export default function BusinessPage({ businessNews }) {
  return (
    <Wrapper>
      <Content>
        <h1 className="heading">Technology News</h1>
        <section className="card">
          {businessNews &&
            businessNews.length > 0 &&
            businessNews.map((item, index) => (
              <Card
                key={index}
                item={item}
                index={index}
                basePath="technology"
              />
            ))}
        </section>
      </Content>
    </Wrapper>
  );
}

// Reuse `fetchNewsData` with the category argument
export async function getStaticProps() {
  const businessNews = await fetchNewsData("technology");

  return {
    props: {
      businessNews,
    },
  };
}
