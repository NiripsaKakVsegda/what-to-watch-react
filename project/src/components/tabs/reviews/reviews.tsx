import { FC } from 'react';
import Review from '../../review/review';
import { UserReview } from '../../../types/user-review';

type Props = {
  movieId: number;
}

const Reviews: FC<Props> = (props) => {
  const { movieId } = props;

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {/*{reviews.map((review) => <Review review={review} key={`review-${review.author}-${review.rating}`}/>)}*/}
      </div>
    </div>
  );
};

export default Reviews;
