import { FC } from 'react';

type Props = {
  handleInputChange: (evt: {target: {value: string}}) => void;
  rate: number;
}

const Star: FC<Props> = (props) => {
  const { handleInputChange, rate } = props;
  return (
    <>
      <input onChange={handleInputChange} className="rating__input" id={`star-${rate}`} type="radio" name="rating" value={rate.toString()}/>
      <label className="rating__label" htmlFor={`star-${rate}`}>`Rating ${rate}`</label>
    </>
  );
};

export default Star;
