import Logo from "../../components/logo/logo";
import UserBlock from "../../components/user-block/user-block";
import Rating from "../../components/rating/rating";

type AddReviewProps = {
  backgroundPath: string;
  name: string;
  posterPath: string;
}

function AddReviewPage(props: AddReviewProps): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={props.backgroundPath} alt={props.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          {Logo()}

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{props.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          {UserBlock()}
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={props.posterPath} alt={`${props.name} poster`} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {Array.from(Array(10), (_, i) => i+1).reverse().map((rate) => Rating(rate))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text"
                      placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}

export default AddReviewPage;
