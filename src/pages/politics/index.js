"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { Content, Wrapper } from "../../styles/styles";
import { FaBookmark } from "react-icons/fa6";
import { TbArrowForwardUp } from "react-icons/tb";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import image from "../../../public/image.jpeg";
import Image from "next/image";

export default function PoliticPage({ scienceNews }) {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("article bookmarked ");
  };

  return (
    <Wrapper>
      <Content>
        <h1 className="heading">Politics News</h1>
      </Content>
    </Wrapper>
  );
}

// export async function getStaticProps() {
//   try {
//     const response = await fetch(
//       "https://newsdata.io/api/1/latest?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&country=ng&category=politics"
//     );
//     const data = await response.json();

//     const sanitizedResults = data.results.map((item) => {
//       return {
//         creator: item.creator || null,
//         description: item.description || null,
//         image_url: item.image_url || null,
//         link: item.link || null,
//         pubDate: item.pubDate || null,
//         title: item.title || null,
//         source_id: item.source_id || null,
//         source_icon: item.source_icon || null,
//       };
//     });

//     return {
//       props: {
//         scienceNews: sanitizedResults,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching science news:", error);
//     return {
//       props: {
//         scienceNews: [],
//       },
//     };
//   }
// }
