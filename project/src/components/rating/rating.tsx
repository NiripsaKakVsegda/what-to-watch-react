import { FC } from 'react';

type Props = {
  rate: number;
}

const Rating: FC<Props> = (props) => {
  const {rate} = props;
  return (
    <>
      <input className="rating__input" id={`star-${rate}`} type="radio" name="rating" value={rate.toString()}/>
      <label className="rating__label" htmlFor={`star-${rate}`}>`Rating ${rate}`</label>
    </>
  );
};

export default Rating;
