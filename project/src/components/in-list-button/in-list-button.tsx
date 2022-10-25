import { FC } from 'react';

const inList = {
  href: '#in-list',
  width: 18,
  height: 14
};

const add = {
  href: '#add',
  width: 19,
  height: 20
};

type Props = {
  isInList?: boolean;
}

const InListButton: FC<Props> = (props) => {
  const { isInList } = props;
  const buttonType = isInList ? inList : add;

  return (
    <svg viewBox={`0 0 ${buttonType.width} ${buttonType.height}`} width={buttonType.width} height={buttonType.height}>
      <use xlinkHref={buttonType.href}></use>
    </svg>
  );
};

export default InListButton;
