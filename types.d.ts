type Category = 'general' | 'business' | 'entertainment' | 'health' | 'science' | 'sports' | 'technology';


type NewsResponse = {
    pagination: Pagination;
    data: Article[];
}


type Article = {
    author: string | null;
    category: string
    country: string
    description: string
    image: string
    language: string
    published_at: DateTime
    source: string
    title: string
    url: string
  }
  
  type Pagination = {
    count: Int;
    limit: Int;
    offset: Int;
    total: Int;
  }
  