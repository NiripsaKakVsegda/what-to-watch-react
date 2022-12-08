import { FC, useState } from 'react';

const Form: FC = () => {
  const [rateInfo, setRateInfo] = useState({
    rating: 0,
    text: ''
  });

  const handleInputChange = (evt: { target: { name: string; value: number | string } }) => {
    const {name, value} = evt.target;
    setRateInfo({...rateInfo, [name]: value});
  };

  return (
    <form action="#" className="add-review__form">
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
        <textarea onChange={handleInputChange} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
