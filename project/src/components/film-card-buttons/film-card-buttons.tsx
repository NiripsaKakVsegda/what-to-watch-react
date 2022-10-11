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

function FilmCardButtons(filmCardCount: number, isInList = false, addReview = false): JSX.Element {
  const buttonType = isInList ? inList : add;
  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list film-card__button" type="button">
        <svg viewBox={`0 0 ${buttonType.width} ${buttonType.height}`} width={buttonType.width} height={buttonType.height}>
          <use xlinkHref={buttonType.href}></use>
        </svg>
        <span>My list</span>
        <span className="film-card__count">{filmCardCount}</span>
      </button>
      {addReview ? <a href="add-review.html" className="btn film-card__button">Add review</a> : null}
    </div>
  );
}

export default FilmCardButtons;
