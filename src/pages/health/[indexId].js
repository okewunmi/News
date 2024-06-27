// import React, { useState } from "react";
// import Menu from "@/components/MenuBar";

// import { Content, Details, Wrapper, Other } from "@/styles/styles";
// import { FaBookmark } from "react-icons/fa6";
// import { TbArrowForwardUp } from "react-icons/tb";
// import Link from "next/link";

// function NewsDetail({ news, relatedArticles }) {
//   const {
//     creator,
//     description,
//     image_url,
//     link,
//     pubDate,
//     title,
//     source_id,
//     source_icon,
//     source_priority,
//     category,
//   } = news;

//   const currentDate = new Date(pubDate);
//   const day = currentDate.getDate();
//   const month = currentDate.getMonth() + 1;
//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const monthString = monthNames[parseInt(month, 10) - 1];
//   const year = currentDate.getFullYear();
//   const dateFormat = `${day} ${monthString}, ${year} `;

//   const [cart, setCart] = useState([]);
//   const addToCart = (item) => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const updatedCart = [...cart, item];
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     alert("article bookmarked ");
//   };

//   return (
//     <Wrapper>
//       <Menu />

//       <Details className="detail">
//         <img
//           src={image_url ? image_url : source_icon}
//           alt="image"
//           className="image"
//         />

//         <section className="txt__box">
//           <div className="bottom">
//             <div className="bottom__link">
//               <button onClick={() => addToCart(news)}>
//                 <FaBookmark className="btn" />
//               </button>

//               <Link href={link} target="_blank" className="redirectLink">
//                 <TbArrowForwardUp className="btn redirect" />
//               </Link>
//             </div>

//             <div className="bottom__num">
//               <p className="num">{source_priority || 2180221}</p>
//               <p className="people">People</p>
//             </div>
//           </div>

//           <div className="txt">
//             <div className="time">
//               <p className="time__time">
//                 <span>Source: </span> {source_id}
//               </p>
//               <p className="time__date">{dateFormat || "3 March 2023"}</p>
//               <p className="time__time">
//                 <span> By :</span> {creator || "unknown"}
//               </p>
//             </div>
//             <h1 className="head">{title}</h1>
//             <p className="paragraph">{description}</p>
//           </div>
//         </section>
//       </Details>
//       <Other>
//         <h2 className="head">Related on {category}</h2>
//         <section className="list">
//           {relatedArticles && relatedArticles.length > 0 ? (
//             relatedArticles.map((article, index) => {
//               const {
//                 creator,
//                 description,
//                 image_url,
//                 link,
//                 pubDate,
//                 title,
//                 source_id,
//                 source_icon,
//                 source_priority,
//                 category,
//               } = article;
//               return (
//                 <div key={index} className="box">
//                   <div className="box__image">
//                     <img
//                       src={image_url ? image_url : source_icon}
//                       alt="image"
//                       className="image"
//                     />
//                   </div>

//                   <p className="box__date">{dateFormat || "3 March 2023"}</p>
//                   <Link href={`/health/${index}`} key={index}>
//                     <p className="box__title">{title}</p>
//                   </Link>
//                   <p className="box__txt">
//                     {description.slice(0, 120).concat(" ...")}
//                   </p>
//                   <div className="box__bottom">
//                     <div className="num">
//                       <p className="number">{source_priority || 218020}</p>
//                       <p className="people">People View</p>
//                     </div>
//                     <div className="box__link">
//                       <button onClick={() => addToCart(article)}>
//                         <FaBookmark className="btn" />
//                       </button>

//                       <Link href={link}>
//                         <TbArrowForwardUp className="btn redirect" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//           ) : (
//             <p>No related articles available.</p>
//           )}
//         </section>
//       </Other>
//     </Wrapper>
//   );
// }

// export default NewsDetail;

// export async function getStaticPaths() {
//   try {
//     const response = await fetch(
//       `https://newsdata.io/api/1/latest?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&country=ng&category=health`
//     );

//     const data = await response.json();

//     // Check if data.results is an array
//     if (!Array.isArray(data.results)) {
//       throw new Error("Invalid API response structure");
//     }

//     // Create paths for each news article
//     const paths = data.results.map((article, index) => ({
//       params: { indexId: index.toString() },
//     }));

//     return {
//       paths,
//       fallback: false,
//     };
//   } catch (error) {
//     console.error("Error fetching paths:", error);
//     return {
//       paths: [],
//       fallback: false,
//     };
//   }
// }

// export async function getStaticProps({ params }) {
//   try {
//     const response = await fetch(
//       `https://newsdata.io/api/1/latest?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&country=ng&category=health`
//     );
//     const data = await response.json();

//     if (!Array.isArray(data.results)) {
//       throw new Error("Invalid API response structure");
//     }

//     const news = data.results[parseInt(params.indexId)];
//     const relatedArticles = data.results.filter(
//       (_, index) => index !== parseInt(params.indexId)
//     );

//     return {
//       props: {
//         news,
//         relatedArticles,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching news:", error);
//     return {
//       props: {
//         news: null,
//         relatedArticles: [],
//       },
//     };
//   }
// }

import React, { useState, useEffect } from "react";
import Menu from "@/components/MenuBar";
import { Content, Details, Wrapper, Other } from "@/styles/styles";
import { FaBookmark } from "react-icons/fa6";
import { TbArrowForwardUp } from "react-icons/tb";
import Link from "next/link";

function NewsDetail({ news, relatedArticles }) {
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

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Article bookmarked");
  };

  return (
    <Wrapper>
      <Menu />
      <Details className="detail">
        <img
          src={image_url ? image_url : source_icon}
          alt="image"
          className="image"
        />
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
              <p className="num">{source_priority || 2180221}</p>
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
                <span> By :</span> {creator || "unknown"}
              </p>
            </div>
            <h1 className="head">{title}</h1>
            <p className="paragraph">{description}</p>
          </div>
        </section>
      </Details>
      <Other>
        <h2 className="head">Related on {category}</h2>
        <section className="list">
          {relatedArticles && relatedArticles.length > 0 ? (
            relatedArticles.map((article, index) => {
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

              const articleDate = new Date(pubDate);
              const articleDay = articleDate.getDate();
              const articleMonth = articleDate.getMonth() + 1;
              const articleYear = articleDate.getFullYear();
              const articleMonthString = monthNames[articleMonth - 1];
              const articleDateFormat = `${articleDay} ${articleMonthString}, ${articleYear}`;

              return (
                <div key={index} className="box">
                  <div className="box__image">
                    <img
                      src={image_url ? image_url : source_icon}
                      alt="image"
                      className="image"
                    />
                  </div>
                  <p className="box__date">
                    {articleDateFormat || "3 March 2023"}
                  </p>
                  <Link href={`/health/${index}`} key={index}>
                    <p className="box__title">{title}</p>
                  </Link>
                  <p className="box__txt">
                    {description.slice(0, 120).concat(" ...")}
                  </p>
                  <div className="box__bottom">
                    <div className="num">
                      <p className="number">{source_priority || 218020}</p>
                      <p className="people">People View</p>
                    </div>
                    <div className="box__link">
                      <button onClick={() => addToCart(article)}>
                        <FaBookmark className="btn" />
                      </button>
                      <Link href={link}>
                        <TbArrowForwardUp className="btn redirect" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No related articles available.</p>
          )}
        </section>
      </Other>
    </Wrapper>
  );
}

export default NewsDetail;

export async function getStaticPaths() {
  try {
    const response = await fetch(
      `https://newsdata.io/api/1/latest?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&country=ng&category=health`
    );
    const data = await response.json();

    // Check if data.results is an array
    if (!Array.isArray(data.results)) {
      throw new Error("Invalid API response structure");
    }

    // Create paths for each news article
    const paths = data.results.map((article, index) => ({
      params: { indexId: index.toString() },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching paths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const response = await fetch(
      `https://newsdata.io/api/1/latest?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&country=ng&category=health`
    );
    const data = await response.json();

    if (!Array.isArray(data.results)) {
      throw new Error("Invalid API response structure");
    }

    const news = data.results[parseInt(params.indexId)];
    const relatedArticles = data.results.filter(
      (_, index) => index !== parseInt(params.indexId)
    );

    return {
      props: {
        news,
        relatedArticles,
      },
    };
  } catch (error) {
    console.error("Error fetching news:", error);
    return {
      props: {
        news: null,
        relatedArticles: [],
      },
    };
  }
}
