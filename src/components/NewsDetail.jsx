/* eslint-disable react/prop-types */
const NewsDetail = ({ detail, onBack }) => {
  return (
    <>
      <div className='container'>
        <button onClick={onBack} className="back-button">Back</button>
        <div className='news-detail-title'>{detail.title}</div>
        <div className='news-detail-categories'>
          {detail.categories.map((category, index) => (
            <button key={index}>{category}</button>
          ))}
        </div>
        <div className="news-detail-author">{detail.author}</div>
        <div className="news-detail-date">{detail.date}</div>
        <div className='news-detail-content'>
          {detail.content.map((item, index) => {
            return item.startsWith('https') ? (
              <img className='news-detail-img' key={index} width={700} src={item} alt='img' />
            ) : (
              <p className='news-detail-paragraph' key={index}>
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
