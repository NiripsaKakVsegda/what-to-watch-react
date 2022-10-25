import { FC } from 'react';
import Logo from '../logo/logo';

const Footer: FC = () => (
  <footer className="page-footer">
    <Logo isFooter/>

    <div className="copyright">
      <p>© 2019 What to watch Ltd.</p>
    </div>
  </footer>
);

export default Footer;
