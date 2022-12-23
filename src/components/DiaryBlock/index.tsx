import { useState } from 'react';
import { useDispatch } from 'react-redux';

import classNames from 'classnames';

import { addItem } from '../../redux/cart/slice';
import { CartItem } from '../../redux/cart/types';

type DiaryBlockProps = {
  id: number;
  title: string;
  price: number;
  imagePath: string;
  imageChange: string;
  sizes: number[];
  types: number[];
};

export const DiaryBlock: React.FC<DiaryBlockProps> = ({
  id,
  title,
  price,
  imagePath,
  imageChange,
  sizes,
  types,
}) => {
  const dispatch = useDispatch();

  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const onSelectSize = (index: number) => {
    setActiveSize(index);
  };
  const onSelectType = (index: number) => {
    setActiveType(index);
  };

  const typeName = ['B6', 'A5'];
  const sizeName = ['60', '90', '120'];

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imagePath,
      type: typeName[activeType],
      size: sizeName[activeSize],
      count: 0,
      newId: '0',
    };
    dispatch(addItem(item));
  };

  return (
    <div className="diary-block">
      <div className="change-photos">
        <div className="change-photo">
          <img width={232} height={290} src={imagePath} alt="planner" />
        </div>
        <div className="change-photo">
          <img width={232} height={290} src={imageChange} alt="planner" />
        </div>
      </div>
      <h4 className="diary-block__title">{title}</h4>
      <div className="diary-block__selector">
        <ul>
          {typeName.map((typeId, i) => (
            <li
              key={i}
              onClick={() => onSelectType(i)}
              className={classNames({
                active: activeType === i,
                disabled: !types.includes(i),
              })}
            >
              {typeId}
            </li>
          ))}
        </ul>
        <ul>
          {sizeName.map((obj, i) => (
            <li
              key={i}
              onClick={() => onSelectSize(i)}
              className={classNames({
                active: activeSize === i,
                disabled: !sizes.includes(i),
              })}
            >
              {obj} p.
            </li>
          ))}
        </ul>
      </div>
      <div className="diary-block__bottom">
        <div className="diary-block__price">{price} $</div>
        <div onClick={onClickAdd} className="button button--outline outline">
          <span>Add</span>
        </div>
      </div>
    </div>
  );
};
