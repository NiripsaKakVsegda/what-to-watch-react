import { FC, memo } from 'react';

type Props = {
  handleInputChange: (evt: {target: {value: string}}) => void;
  text: string;
}

const ReviewTextarea: FC<Props> = (props) => {
  const { handleInputChange, text } = props;

  return (
    <div className="add-review__text">
      <textarea maxLength={400} minLength={50} onChange={handleInputChange} className="add-review__textarea"
        name="text" id="text" placeholder="Review text" value={text}
      />
      <div className="add-review__submit">
        <button className="add-review__btn" type="submit">Post</button>
      </div>
    </div>
  );
};

export default memo(ReviewTextarea, (prevProps, nextProps) =>
  prevProps.text === nextProps.text);
