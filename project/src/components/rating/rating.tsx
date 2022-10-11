function Rating(rate: number): JSX.Element {
  return (
    <><input className="rating__input" id={`star-${rate}`} type="radio" name="rating" value={rate.toString()}/><label
      className="rating__label" htmlFor={`star-${rate}`}>Rating 10</label></>
  );
}

export default Rating;
