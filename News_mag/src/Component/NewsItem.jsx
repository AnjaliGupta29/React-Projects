
const NewsItem = ({ title, description, src, url }) => {
    return (
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
        <img src={src} className="card-img-top" alt="News Image" style={{height : "200px", width:"360" }}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      </div>
    );
  };
  
  export default NewsItem;
  