"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBookmark } from "react-icons/fa6";
import { TbArrowForwardUp } from "react-icons/tb";
import Link from "next/link";
import { Content, Details, Wrapper, Other } from "@/styles/styles";

const CardWrapper = styled.div`
  width: 23rem;
  /* height: 26rem; */
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1.3rem;
  padding-bottom: 0.5rem;
  border: 1px solid #ccee;
  padding: 0.9rem;
  border-radius: 0.7rem;

  .__image {
    width: 100%;
    height: 10rem;

    .image {
      width: 100%;
      height: 100%;
      border-radius: 0.6rem;
      border: 1px solid #ccee;
    }
  }
  .__title {
    font-size: 0.95rem;
    font-weight: bold;
    line-height: 1.3;
    color: #000;
  }
  .__txt {
    font-size: 0.8rem;
    color: gray;
    text-align: justify;
    font-weight: 600;
  }
  .__date {
    font-size: 0.8rem;
    color: gray;
    font-weight: bold;
  }

  .__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;

    .num {
      display: flex;
      flex-direction: column;
      font-size: 1rem;

      .number {
        font-weight: bold;
      }
      .people {
        color: gray;
        font-weight: 500;
      }
    }
  }
  /* &__link {
        display: flex;
        gap: 0.5rem;
      } */
  &__link {
    gap: 0.5rem;
    display: flex;
    align-items: center;

    button,
    .redirectLink {
      padding: 0.5rem;
      border-radius: 100%;

      &:hover {
        color: red;
      }
    }
  }
`;

const Image = styled.img`
  border-radius: 1rem;
  width: 400px;
  height: 200px;
  border: 1px solid #cccc;
  object-fit: cover;
`;

const FigCaption = styled.figcaption`
  width: 21rem;
  height: 17rem;
  background: white;
  color: #000;
  transform: translateY(-3rem);
  border-radius: 1.2rem;
  padding: 1rem 1.2rem;
  box-shadow: 5px 5px 5px #ebeae5;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Card = ({ item, index, basePath = "" }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("article bookmarked ");
  };

  const {
    description,
    image_url,
    link,
    pubDate,
    title,
    source_id,
    source_icon,
    source_priority,
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
  const monthString = monthNames[month - 1];
  const year = currentDate.getFullYear();
  const dateFormat = `${day}, ${monthString} ${year}`;

  return (
    <CardWrapper>
      <Image src={image_url ? image_url : source_icon} alt="bg-image" />
      <FigCaption>
        <div className="time">
          {/* <p className="time__time">Source: {name}</p> */}
          <p className="time__time">soruce: {source_id}</p>
          <p className="time__date">{pubDate ? dateFormat : "3 March 2023"}</p>
        </div>

        <p className="head">
          {/* <Link href={`/${index}`}>
            {title ? title : "Five easy way how you can travel cheap"}
          </Link> */}
          <Link href={`${basePath}/${index}`} key={index}>
            {title || "No title available"}
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
      </FigCaption>
    </CardWrapper>
  );
};

const Card2 = ({ article, index, basePath = "" }) => {
  const {
    creator,
    description,
    image_url,
    link,
    pubDate,
    title,
    source_id,
    source_icon,
    source_priority,
    category,
  } = article;

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
  const monthString = monthNames[month - 1];
  const year = currentDate.getFullYear();
  const dateFormat = `${day} ${monthString}, ${year}`;

  return (
    <Box key={index}>
      <div className="__image">
        <img src={image_url || source_icon} alt="image" className="image" />
      </div>
      <p className="__date">{dateFormat || "3 March 2023"}</p>
      {/* <Link href={`/${index}`} key={index}>
        <p className="__title">{title}</p>
      </Link> */}
      <Link className="__title" href={`${basePath}/${index}`} key={index}>
        {title || "No title available"}
      </Link>
      <p className="__txt">{description.slice(0, 120).concat(" ...")}</p>
      <div className="__bottom">
        <div className="num">
          <p className="number">{source_priority || 21802}</p>
          <p className="people">People View</p>
        </div>
        <div className="__link">
          <button onClick={() => addToCart(article)}>
            <FaBookmark className="btn" />
          </button>
          <Link href={link}>
            <TbArrowForwardUp className="btn redirect" />
          </Link>
        </div>
      </div>
    </Box>
  );
};

const CardDetail = ({ news }) => {
  const [cart, setCart] = useState([]);
  const {
    creator,
    description,
    image_url,
    link,
    pubDate,
    title,
    source_id,
    source_icon,
    source_priority,
    category,
  } = news;

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
  const monthString = monthNames[month - 1];
  const year = currentDate.getFullYear();
  const dateFormat = `${day} ${monthString}, ${year}`;

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Article bookmarked");
  };

  return (
    <Details className="detail">
      <img src={image_url || source_icon} alt="image" className="image" />
      <section className="txt__box">
        <div className="bottom">
          <div className="bottom__link">
            <button onClick={() => addToCart(news)}>
              <FaBookmark className="btn" />
            </button>
            <Link href={link} target="_blank" className="redirectLink">
              <TbArrowForwardUp className="btn redirect" />
            </Link>
          </div>
          <div className="bottom__num">
            <p className="num">{source_priority || 21802}</p>
            <p className="people">People</p>
          </div>
        </div>
        <div className="txt">
          <div className="time">
            <p className="time__time">
              <span>Source: </span> {source_id}
            </p>
            <p className="time__date">{dateFormat || "3 March 2023"}</p>
            <p className="time__time">
              <span>By:</span> {creator || "unknown"}
            </p>
          </div>
          <h1 className="head">{title}</h1>
          <p className="paragraph">{description}</p>
        </div>
      </section>
    </Details>
  );
};

export { Card, Card2, CardDetail };
