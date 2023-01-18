import { FC } from 'react';
import { UserReview } from '../../types/user-review';
import { getDate } from "../../common/common-functions";

type Props = {
  review: UserReview;
}

const Review: FC<Props> = (props) => {
  const { comment, user, date, rating } = props.review;
  const stringDate = getDate(date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{stringDate}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
};

export default Review;
