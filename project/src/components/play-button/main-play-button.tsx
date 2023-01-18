import {FC, memo} from "react";
import {Link} from "react-router-dom";

type Props = {
  movieId: string | number;
}

const MainPlayButton: FC<Props> = (props) => {
  const {movieId} = props;
  return (
    <button className="btn btn--play film-card__button" type="button">
      <Link to={`/player/${movieId}`} style={{textDecoration: 'none', color: 'inherit'}}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
    </button>
  );
};

export default MainPlayButton;
