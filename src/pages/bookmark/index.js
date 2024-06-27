import Menu from "@/components/MenuBar";
import { Content, Wrapper } from "@/styles/styles";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { TbArrowForwardUp } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const index = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <Wrapper>
      <Menu />
      <Content>
        <h1 className="heading">Bookmarked Articles</h1>

        <section className="card">
          {cart.map((item, index) => {
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
                      {title ? title : "Five easy way how you can travel cheap"}
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
                      <button onClick={() => removeFromCart(index)}>
                        <MdDelete className="btn" />
                      </button>

                      <Link href="#">
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
};

export default index;
