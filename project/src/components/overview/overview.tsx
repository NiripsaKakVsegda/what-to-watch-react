import {MoviePageProps} from "../../pages/movie-page/movie-page";

function Overview(props: MoviePageProps): JSX.Element {
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
        {props.aboutFilm.split('\n').map((part) => <p>{part}</p>)}

        <p className="film-card__director"><strong>{`Director: ${props.director}`}</strong></p>

        <p className="film-card__starring"><strong>{`Starring: ${props.actors.join(', ')}`}</strong></p>
      </div>
    </>
  );
}

export default Overview;
