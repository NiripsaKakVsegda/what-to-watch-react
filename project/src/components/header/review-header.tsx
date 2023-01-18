import {FC} from "react";
import {Link} from "react-router-dom";

type Props = {
  id: string;
  name: string;
}

const ReviewHeader: FC<Props> = (props) => {
  const {id, name} = props;
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link to={`/films/${id}/review`} className="breadcrumbs__link">Add review</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ReviewHeader;
