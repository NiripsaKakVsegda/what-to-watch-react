import { FC, memo } from 'react';
import Star from './star';

type Props = {
  handleInputChange: (evt: {target: {value: string}}) => void;
  rate: string;
}

const Stars: FC<Props> = (props) => {
  const { handleInputChange, rate } = props;

  return (
    <div className="rating">
      <p hidden>{`Current rate: ${rate}`}</p>
      <div className="rating__stars">
        {Array.from(Array(10), (_, i) => i + 1).reverse().map((rating) =>
          <Star key={`rate-${rating}`} handleInputChange={handleInputChange} rate={rating}/>)}
      </div>
    </div>
  );
};

export default memo(Stars, (prevProps, nextProps) =>
  prevProps.rate === nextProps.rate);
