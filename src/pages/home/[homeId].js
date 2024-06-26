import React from "react";

function Post({ news }) {
  return (
    <div>
      <h1>{news.title}</h1>
      <p>{news.description}</p>
    </div>
  );
}

export default Post;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=nigeria&pageSize=24&apiKey=2f1de88abc15435a9d26cb175a34a7e7/${params.homeId}`
  );
  const data = await response.json();

  return {
    props: {
      news: data.articles,
    },
  };
}
