import { FC } from 'react';
import { Link } from 'react-router-dom';

const PageNotFound: FC = () => (
  <>
    <h1>404.<br/><small>Page not found</small></h1>
    <Link to={'/'}>Back to main page</Link>
  </>
);

export default PageNotFound;
