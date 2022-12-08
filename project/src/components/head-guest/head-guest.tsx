import { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';

const HeadGuest: FC = () => (
  <header className="page-header">
    <Logo/>
    <div className="user-block">
      <Link to={'/login'} className="user-block__link">Sign in</Link>
    </div>
  </header>
);

export default HeadGuest;
