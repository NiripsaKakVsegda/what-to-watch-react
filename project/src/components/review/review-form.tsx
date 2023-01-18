import { FC, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { addCommentAction, fetchMovieCommentsAction } from '../../store/api-actions';
import { redirectToRoute } from '../../store/action';
import Stars from './stars';
import ReviewTextarea from './review-textarea';
import { APIRoute } from '../../types/api-route.enum';

type Props = {
  movieId: string;
}

const ReviewForm: FC<Props> = (props) => {
  const { movieId } = props;
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');

  const dispatch = useAppDispatch();

  const handleTextChange = (evt: { target: { value: string } }) => {
    const { value } = evt.target;
    setText(value);
  };

  const handleRatingChange = (evt: { target: { value: string } }) => {
    const { value } = evt.target;
    setRating(value);
  };

  const handleOnSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (rating && text) {
      dispatch(addCommentAction({rating: parseInt(rating, 10), comment: text, movieId: parseInt(movieId, 10)}));
      dispatch(fetchMovieCommentsAction({movieId: parseInt(movieId, 10)}));
      dispatch(redirectToRoute(`${APIRoute.Films}/${movieId}`));
    }
  };

  return (
    <form action="src/components/review/review-form#" className="add-review__form" onSubmit={handleOnSubmit}>
      <Stars handleInputChange={handleRatingChange} rate={rating}/>
      <ReviewTextarea handleInputChange={handleTextChange} text={text}/>
    </form>
  );
};

export default ReviewForm;
