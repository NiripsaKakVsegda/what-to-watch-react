import { FC } from 'react';
import { showMore } from '../../store/action';
import { useAppDispatch } from '../../hooks';

const ShowMore: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => dispatch(showMore())}>Show more</button>
    </div>
  );
};

export default ShowMore;
