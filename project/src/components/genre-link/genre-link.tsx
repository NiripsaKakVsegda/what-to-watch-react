function GenreLink(genre: string): JSX.Element {
  return (
    <li className="catalog__genres-item">
      <a href="#" className="catalog__genres-link">{genre}</a>
    </li>
  );
}

export default GenreLink;
