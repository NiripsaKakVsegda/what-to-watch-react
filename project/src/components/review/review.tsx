export type ReviewInfo = {
  text: string;
  author: string;
  date: Date;
  rating: number;
}

function Review(reviewInfo: ReviewInfo): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{reviewInfo.text}</p>

        <footer className="review__details">
          <cite className="review__author">{reviewInfo.author}</cite>
          <time className="review__date" dateTime="2016-12-24">{reviewInfo.date.toLocaleString('en-US', {month: 'long', year: 'numeric', day: 'numeric'})}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{reviewInfo.rating}</div>
    </div>
  );
}

export default Review;
