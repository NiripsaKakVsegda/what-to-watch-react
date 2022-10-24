import { FC } from 'react';
import Review from '../review/review';
import { ReviewInfo } from '../../types/review-info';

type Props = {
  reviews: ReviewInfo[];
}

const Reviews: FC<Props> = (props) => {
  const {reviews} = props;
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => <Review text={review.text} author={review.author} date={review.date} rating={review.rating} key={`review-${review.author}-${review.rating}`}/>)}
      </div>
    </div>
  );
};

export default Reviews;
