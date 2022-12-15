import { FC, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { addCommentAction, fetchMovieCommentsAction } from '../../store/api-actions';
import { redirectToRoute } from '../../store/action';

type Props = {
  movieId: string;
}

const Form: FC<Props> = (props) => {
  const { movieId } = props;
  const [rateInfo, setRateInfo] = useState({
    rating: null,
    text: null
  });

  const dispatch = useAppDispatch();

  const handleInputChange = (evt: { target: { name: string; value: number | string } }) => {
    const {name, value} = evt.target;
    setRateInfo({...rateInfo, [name]: value});
  };

  const handleOnSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const { rating, text } = rateInfo;
    if (rating && text) {
      dispatch(addCommentAction({rating: rating, comment: text, movieId: parseInt(movieId, 10)}));
      dispatch(fetchMovieCommentsAction({movieId: parseInt(movieId, 10)}));
      dispatch(redirectToRoute(`/films/${movieId}`));
    }
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleOnSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {Array.from(Array(10), (_, i) => i + 1).reverse().map((rate) =>
            (
              <>
                <input onChange={handleInputChange} className="rating__input" id={`star-${rate}`} type="radio" name="rating" value={rate.toString()}/>
                <label className="rating__label" htmlFor={`star-${rate}`}>`Rating ${rate}`</label>
              </>
            ))}
        </div>
      </div>
      <div className="add-review__text">
        <textarea onChange={handleInputChange} className="add-review__textarea" name="text" id="text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
