import NewsList from "@/components/NewsList";
import { categories } from "@/components/constants"
import fetchNews from "@/lib/fetchNews"

const HomePage = async () => {

  const news: NewsResponse = await fetchNews(categories.join(","));


  return (
  
  <div>
    <NewsList news={news}/>

  </div>

  )

}

export default HomePage;