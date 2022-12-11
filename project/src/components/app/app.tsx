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
import { MoviePageType } from '../../types/movie-page.enum';
import { Film } from '../../types/film';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { isCheckedAuth } from '../../common/common-functions';

type Props = {
  myMovies: Film[];
}

const App: FC<Props> = (props) => {
  const { myMovies } = props;
  const isInList = false;

  const { authStatus, isDataLoaded, movies } = useAppSelector((state) => state);

  if (isCheckedAuth(authStatus) || isDataLoaded || movies.length === 0) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={
          <MainPage isInList={isInList} filmCount={myMovies.length}/>
        }
        />
        <Route path={'/login'} element={
          <SignInPage/>
        }
        />
        <Route path={'/mylist'} element={
          <PrivateRoute authStatus={authStatus}>
            <MyListPage myMovies={myMovies}/>
          </PrivateRoute>
        }
        />
        <Route path={'/films/:id'} element={
          <MoviePage filmCount={myMovies.length} moviePageType={MoviePageType.OverviewPage}/>
        }
        />
        <Route path={'/films/:id/review'} element={
          <AddReviewPage/>
        }
        />
        <Route path={'/player/:id'} element={
          <PlayerPage playerName={'Transpotting'}/>
        }
        />
        <Route path="/404" element={
          <PageNotFound/>
        }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
