import { FC } from 'react';
import { Film } from '../../types/film';

type Props = {
  movie: Film;
}

const Movie: FC<Props> = (props) => {
  const {path, name} = props.movie;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={path} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
};

export default Movie;
