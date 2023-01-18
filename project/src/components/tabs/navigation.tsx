import { FC, useState } from 'react';
import { MoviePageType } from '../../types/movie-page.enum';
import Overview from './overview/overview';
import Details from './details/details';
import Reviews from './reviews/reviews';
import { Film } from '../../types/film';

type Props = {
  currentMovie: Film;
}

const Navigation: FC<Props> = (props) => {
  const { currentMovie } = props;
  const [pageType, setPageType] = useState(MoviePageType.OverviewPage);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            Object.values(MoviePageType).map((currentPageType) =>
              (
                <li key={currentPageType} className={`film-nav__item${pageType === currentPageType
                  ? ' film-nav__item--active' : ''}`}
                >
                  <div style={{cursor: 'pointer'}} onClick={() => setPageType(currentPageType)}
                    className="film-nav__link"
                  >{currentPageType}
                  </div>
                </li>
              )
            )
          }
        </ul>
      </nav>
      {pageType === MoviePageType.OverviewPage && <Overview movie={currentMovie}/>}
      {pageType === MoviePageType.DetailsPage && <Details movie={currentMovie}/>}
      {pageType === MoviePageType.ReviewsPage && <Reviews/>}
    </div>
  );
};

export default Navigation;

