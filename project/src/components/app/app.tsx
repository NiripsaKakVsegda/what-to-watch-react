import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import HistoryRouter from '../history-route/history-route';
import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MoviePage from '../../pages/movie-page/movie-page';
import PrivateRoute from '../private-route/private-route';
import MyListPage from '../../pages/my-list-page/my-list-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { isCheckedAuth } from '../../common/common-functions';
import { useAppSelector } from '../../hooks';
import browserHistory from '../../browser-history';
import { APIRoute } from '../../types/api-route.enum';

const App: FC = () => {
  const { authStatus, isMoviesLoading, isPromoMovieLoading, movies, promoMovie } = useAppSelector((state) => state);

  if (isCheckedAuth(authStatus) || isMoviesLoading || isPromoMovieLoading || !movies.length || promoMovie === null) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={APIRoute.Main} element={
          <MainPage/>
        }
        />
        <Route path={APIRoute.Login} element={
          <SignInPage/>
        }
        />
        <Route path={APIRoute.MyList} element={
          <PrivateRoute authStatus={authStatus}>
            <MyListPage/>
          </PrivateRoute>
        }
        />
        <Route path={`${APIRoute.Films}/:id`} element={
          <MoviePage/>
        }
        />
        <Route path={`${APIRoute.Films}/:id/review`} element={
          <PrivateRoute authStatus={authStatus}>
            <AddReviewPage/>
          </PrivateRoute>
        }
        />
        <Route path={`${APIRoute.Player}/:id`} element={
          <PlayerPage/>
        }
        />
        <Route path={APIRoute.Error404} element={
          <PageNotFound/>
        }
        />
        <Route path="/*" element={
          <PageNotFound/>
        }
        />
      </Routes>
    </HistoryRouter>
  );
};

export default App;
