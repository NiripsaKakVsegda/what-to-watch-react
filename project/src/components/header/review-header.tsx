import { FC } from 'react';
import { Link } from 'react-router-dom';
import { APIRoute } from '../../types/api-route.enum';

type Props = {
  id: string;
  name: string;
}

const ReviewHeader: FC<Props> = (props) => {
  const { id, name } = props;

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={APIRoute.Films} className="breadcrumbs__link">{name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link to={`${APIRoute.Films}/${id}/review`} className="breadcrumbs__link">Add review</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ReviewHeader;
