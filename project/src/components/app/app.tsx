import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MoviePage, { MoviePageType } from '../../pages/movie-page/movie-page';
import PrivateRoute from '../private-route/private-route';
import MyListPage from '../../pages/my-list-page/my-list-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { Const } from '../../types/const';
import { getRating, getRatingString } from '../../common/rating-functions';
import { AppRoute } from '../../types/app-route.enum';
import { AuthStatus } from '../../types/auth-status.enum';

const App: FC = () => {
  const {backgroundPath, posterPath, name, genre, year, filmCount, similarMovies, isInList, director, actors,
    duration, reviewsInfo, aboutFilm, playerName, movies, myMovies} = Const;
  const rating = getRating(reviewsInfo);
  const ratingLevel = getRatingString(rating);
  const ratingCount = reviewsInfo.length;
  const moviePageType = MoviePageType.OverviewPage;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={
          <MainPage name={name} genre={genre} year={year} backgroundPath={backgroundPath}
            posterPath={posterPath} movies={movies} filmCount={filmCount}
          />
        }
        />
        <Route path={AppRoute.Login} element={
          <SignInPage/>
        }
        />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authStatus={AuthStatus.NoAuth}>
            <MyListPage myMovies={myMovies}/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={
          <MoviePage backgroundPath={backgroundPath} posterPath={posterPath} name={name} genre={genre} year={year}
            filmCount={filmCount} similarMovies={similarMovies} isInList={isInList}
            moviePageType={moviePageType} director={director} actors={actors}
            duration={duration} reviewsInfo={reviewsInfo} rating={rating}
            ratingLevel={ratingLevel} ratingCount={ratingCount} aboutFilm={aboutFilm}
          />
        }
        />
        <Route path={AppRoute.AddReview} element={
          <AddReviewPage backgroundPath={backgroundPath} name={name} posterPath={posterPath}/>
        }
        />
        <Route path={AppRoute.Player} element={
          <PlayerPage posterPath={posterPath} playerName={playerName} duration={duration}/>
        }
        />
        <Route path="*" element={
          <PageNotFound/>
        }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
