// eslint-disable-next-line react/prop-types
const NewsList = ({ news, onSelect }) => {
  return (
    <>
      <div className='news-list'>
        {
          // eslint-disable-next-line react/prop-types
          news.map((article) => {
            return (
              <div onClick={() => onSelect(article.key)} className='news-card' key={article.key}>
                <img src={article.thumb} alt='' />
                <div className='news-detail'>
                  <h2>{article.title}</h2>
                  <p>{article.desc}</p>
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  );
};

export default NewsList;
