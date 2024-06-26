"use client";
import React, { useState, useEffect } from "react";
import MenuBar from "../components/MenuBar/index";
import { Inter } from "next/font/google";
import { Content, Wrapper } from "../styles/styles";
import { FaBookmark } from "react-icons/fa6";
import { TbArrowForwardUp } from "react-icons/tb";

import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import image from "../../public/image.jpeg";
import Image from "next/image";

export default function Home({ news }) {
  const [cart, setCart] = useState([]);

  // const [data, setData] = useState([]);
  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("article bookmarked ");
  };

  return (
    <Wrapper>
      <MenuBar />
      <Content>
        <h1 className="heading">Latest News</h1>

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
                  <img
                    src={image_url ? image_url : source_icon}
                    width={400}
                    height={600}
                    alt="bg-image"
                    className="image"
                  />
                  <figcaption>
                    <div className="time">
                      {/* <p className="time__time">Source: {name}</p> */}
                      <p className="time__time">soruce: {source_id}</p>
                      <p className="time__date">
                        {pubDate ? dateFormat : "3 March 2023"}
                      </p>
                    </div>

                    <p className="head">
                      <Link href={`/${index}`}>
                        {title
                          ? title
                          : "Five easy way how you can travel cheap"}
                      </Link>
                    </p>
                    <p className="txt">
                      {description
                        ? description.slice(0, 90).concat(" ...")
                        : "happy ending and up to somethinghappy ending and up to somethinghappyending and up to somethinghappy ending and"}
                    </p>
                    <div className="bottom">
                      <div className="bottom__num">
                        <p className="num">2102</p>
                        <p className="people">People</p>
                      </div>
                      <div className="bottom__link">
                        <button onClick={() => addToCart(item)}>
                          <FaBookmark className="btn" />
                        </button>

                        <Link href={link}>
                          <TbArrowForwardUp className="btn redirect" />
                        </Link>
                      </div>
                    </div>
                  </figcaption>
                </div>
              );
            })}
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
