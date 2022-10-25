import { FC } from 'react';

type Props = {
  isFooter?: boolean;
}

const Logo: FC<Props> = (props) => {
  const {isFooter} = props;
  const className = isFooter ? 'logo__link logo__link--light' : 'logo__link';
  return (
    <div className="logo">
      <a href="main.html" className={className}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
};

export default Logo;
