import { FC } from 'react';
import Review from '../../review/review';
import { useAppSelector } from '../../../hooks';

const Reviews: FC = () => {
  const { comments } = useAppSelector((state) => state);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {
          comments.map((comment) =>
            <Review review={comment} key={`review-${comment.user.name}-${comment.rating}`}/>
          )
        }
      </div>
    </div>
  );
};

export default Reviews;
