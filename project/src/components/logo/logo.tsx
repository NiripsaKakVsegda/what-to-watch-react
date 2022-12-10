import { FC } from 'react';
import { Link } from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {resetMoviePage} from '../../store/action';

type Props = {
  isFooter?: boolean;
}

const Logo: FC<Props> = (props) => {
  const {isFooter} = props;
  const className = isFooter ? 'logo__link logo__link--light' : 'logo__link';
  const dispatch = useAppDispatch();

  return (
    <div className="logo">
      <Link to={'/'} className={className} onClick={() => dispatch(resetMoviePage())}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

export default Logo;
