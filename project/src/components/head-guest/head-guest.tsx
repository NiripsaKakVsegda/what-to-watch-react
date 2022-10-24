import { FC } from 'react';
import Logo from '../logo/logo';

const HeadGuest: FC = () => (
  <header className="page-header">
    <Logo/>

    <div className="user-block">
      <a href="sign-in.html" className="user-block__link">Sign in</a>
    </div>
  </header>
);

export default HeadGuest;
