import fetchNews from "@/lib/fetchNews"
import NewsList from "@/components/NewsList"
import { categories } from "@/components/constants"



type Props = {
    params: {category: Category}
}

const NewsCategory = async ({params: {category}}: Props) => {

const news: NewsResponse = await fetchNews(category)

  return (
    <div>
    <h1 className="headerTitle">{category}</h1>
    <NewsList news={news} />
    </div>
  )
}

export default NewsCategory

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category
  }))

}
//prebuilds categories