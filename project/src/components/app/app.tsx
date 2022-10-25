import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MoviePage from '../../pages/movie-page/movie-page';
import PrivateRoute from '../private-route/private-route';
import MyListPage from '../../pages/my-list-page/my-list-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { AppRoute } from '../../types/app-route.enum';
import { AuthStatus } from '../../types/auth-status.enum';
import { Films } from '../../types/const';
import { MoviePageType } from '../../types/movie-page.enum';

const App: FC = () => {
  const currentMovie = Films[0];
  const myMovies = Films.slice(0, 10);
  const isInList = false;
  const moviePageType = MoviePageType.OverviewPage;
  const playerName = 'Transpotting';
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={
          <MainPage isInList={isInList} filmCount={myMovies.length} allMovies={Films} movie={currentMovie}/>
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
          <MoviePage movie={currentMovie} filmCount={myMovies.length} moviePageType={moviePageType}/>
        }
        />
        <Route path={AppRoute.AddReview} element={
          <AddReviewPage movie={currentMovie}/>
        }
        />
        <Route path={AppRoute.Player} element={
          <PlayerPage movie={currentMovie} playerName={playerName}/>
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
