"use client";

import MenuBar from "../../components/MenuBar/index";

import { Content, Wrapper } from "../../styles/styles";
import { FaBookmark } from "react-icons/fa6";
import { TbArrowForwardUp } from "react-icons/tb";
import Link from "next/link";

import image from "../../../public/image.jpeg";
import Image from "next/image";

export default function index({ news }) {
  // const [data, setData] = useState([]);

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
                source: { name },
                author,
                title,
                url,
                urlToImage,
                description,
                publishedAt,
              } = item;

              const currentDate = new Date(publishedAt);
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
                <Link href={`home/${index}`}>
                  <div className="box" key={index}>
                    {/* <img
                      src={urlToImage || image}
                      alt="bg-image"
                      className="image"
                    /> */}
                    <figcaption>
                      <div className="time">
                        <p className="time__time">Source: {name}</p>
                        <p className="time__date">
                          {dateFormat || "3 March 2023"}
                        </p>
                      </div>

                      <p className="head">
                        {title || "Five easy way how you can travel cheap"}
                      </p>
                      <p className="txt">
                        {description.slice(0, 150).concat("...") ||
                          "happy ending and up to somethinghappy ending and up to somethinghappyending and up to somethinghappy ending and"}
                      </p>
                      <div className="bottom">
                        <div className="bottom__num">
                          <p className="num">2102</p>
                          <p className="people">People</p>
                        </div>
                        <div className="bottom__link">
                          <button>
                            <FaBookmark className="btn" />
                          </button>

                          <Link href="#">
                            <TbArrowForwardUp className="btn redirect" />
                          </Link>
                        </div>
                      </div>
                    </figcaption>
                  </div>
                </Link>
              );
            })}
        </section>
      </Content>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=nigeria&pageSize=24&apiKey=2f1de88abc15435a9d26cb175a34a7e7"
  );
  const data = await response.json();

  return {
    props: {
      news: data.articles,
    },
  };
}
