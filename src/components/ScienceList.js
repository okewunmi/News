"use client";
import "dotenv/config";
import React from "react";

import { Inter } from "next/font/google";
import { List } from "../styles/styles";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
const API = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export default function Lists({ news }) {
  // const [data, setData] = useState([]);

  return (
    <List>
      <h1 className="heading">Related News</h1>

      <section className="card">
        {news &&
          news.length > 0 &&
          news.map((item, index) => {
            const {
              creator,
              description,
              image_url,
              link,
              pubDate,
              title,
              source_id,
              source_icon,
            } = item;

            const currentDate = new Date(pubDate);
            const day = currentDate.getDate();
            const month = currentDate.getMonth() + 1;
            const monthNames = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ];
            const monthString = monthNames[parseInt(month, 10) - 1];
            const year = currentDate.getFullYear();
            const dateFormat = `${day}, ${monthString} ${year} `;

            return (
              <div className="box" key={index}>
                <figcaption>
                  <div className="time"></div>

                  <p className="head">
                    <Link href={`/${index}`}>
                      {title ? title : "Five easy way how you can travel cheap"}
                    </Link>
                  </p>
                  <p className="txt">
                    {description
                      ? description.slice(0, 90).concat(" ...")
                      : "happy ending and up to somethinghappy ending and up to somethinghappyending and up to somethinghappy ending and"}
                  </p>
                </figcaption>
              </div>
            );
          })}
      </section>
    </List>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch(
      "https://newsdata.io/api/1/latest?apikey=${API}&country=ng&category=science"
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
