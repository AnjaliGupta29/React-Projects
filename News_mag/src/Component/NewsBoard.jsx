// import { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";

// const NewsBoard = () => {

//     const [articles, setArticles] = useState([]);

//     useEffect(()=>{
//         const url = " https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}"
//         fetch(url).then(response => response.json()).then(data => setArticles(data.articles))
//     },[])
//   return (
//     <div>
//         <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
//         {articles.map((news, index) => {
//             return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />

//         })
//         }
           
            
//     </div>
//   )
// }

// export default NewsBoard;


import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        return response.json();
      })
      .then((data) => setArticles(data.articles || []))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p className="text-center">No news available</p>
      )}
    </div>
  );
};

export default NewsBoard;
