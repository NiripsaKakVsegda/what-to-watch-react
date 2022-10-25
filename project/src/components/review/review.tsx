import { FC } from 'react';
import { Comment } from '../../types/comment';

type Props = {
  review: Comment;
}

const Review: FC<Props> = (props) => {
  const {text, author, date, rating} = props.review;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime="2016-12-24">{date.toLocaleString('en-US',
            {month: 'long', year: 'numeric', day: 'numeric'})}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

export default Review;
