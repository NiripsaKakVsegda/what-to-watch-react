import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/film';

type Props = {
  movie: Film;
}

const Movie: FC<Props> = (props) => {
  const { movie } = props;
  const { path, name, id } = movie;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={path} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
};

export default Movie;
