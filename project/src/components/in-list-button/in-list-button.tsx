import { FC, memo } from 'react';

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
  filmCardCount: number;
}

const InListButton: FC<Props> = (props) => {
  const { isInList, filmCardCount } = props;
  const buttonType = isInList ? inList : add;

  return (
    <button className="btn btn--list film-card__button" type="button">
      <svg viewBox={`0 0 ${buttonType.width} ${buttonType.height}`} width={buttonType.width} height={buttonType.height}>
        <use xlinkHref={buttonType.href}></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{filmCardCount}</span>
    </button>
  );
};

export default InListButton;
