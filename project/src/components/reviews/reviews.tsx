import Review, {ReviewInfo} from '../review/review';

function Reviews(reviewsInfo: ReviewInfo[]): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviewsInfo.map((review) => Review(review))}
      </div>
    </div>
  );
}

export default Reviews;
