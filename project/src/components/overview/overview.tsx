export type OverviewProps = {
  rating: number;
  ratingLevel: string;
  ratingCount: number;
  aboutFilm: string;
  director: string;
  actors: string[];
}

function Overview(props: OverviewProps): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{props.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{props.ratingLevel}</span>
          <span className="film-rating__count">{`${props.ratingCount} ratings`}</span>
        </p>
      </div>
      <div className="film-card__text">
        {<p>{props.aboutFilm}</p>}

        <p className="film-card__director"><strong>{`Director: ${props.director}`}</strong></p>

        <p className="film-card__starring"><strong>{`Starring: ${props.actors.join(', ')}`}</strong></p>
      </div>
    </>
  );
}

export default Overview;
