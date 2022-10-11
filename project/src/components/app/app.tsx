import MainPage from '../../pages/main-page/main-page';
import {MovieCardInfo} from '../../index';

type AppScreenProps = {
  name: string;
  genre: string;
  year: number;
  backgroundPath: string;
  posterPath: string;
  allGenres: string[];
  movies: MovieCardInfo[];
  filmCount: number;
  isInList: boolean;
}

function App(props: AppScreenProps): JSX.Element {
  return MainPage(props);
}

export default App;

