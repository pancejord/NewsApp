import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const query = gql`
    query myQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        language: "en"
        countries: "us,"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          image
          language
          published_at
          source
          title
          url
          author
          category
          country
          description
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  const res = await fetch(
    "https://greatbarrington.stepzen.net/api/gilded-saola/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? {revalidate: 0} : {revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  const newsResponse = await res.json();
  const news = sortNewsByImage(newsResponse.data.myQuery);

  return news;
};

export default fetchNews;
