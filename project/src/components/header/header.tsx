import { FC } from 'react';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import ReviewHeader from './review-header';

type Props = {
  id?: string;
  name?: string;
}

const Header: FC<Props> = (props) => {
  const { id, name } = props;

  return (
    <header className="page-header film-card__head">
      <Logo/>
      {id && name && <ReviewHeader id={id} name={name}/>}
      <UserBlock/>
    </header>
  );
};

export default Header;
