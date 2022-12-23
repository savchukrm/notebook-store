import React, { useEffect } from 'react';
import { useState, useRef } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { useDispatch } from 'react-redux';
import { setSort } from '../redux/filter/slice';

type SortItem = {
  name: string;
  sortBy: string;
};

export const list: SortItem[] = [
  {
    name: 'newest',
    sortBy: '',
  },
  {
    name: 'lewest price',
    sortBy: 'price',
  },
  {
    name: 'highest price',
    sortBy: 'price&order=desc',
  },
];

export const Sort: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeSort, setActiveSort] = useState('newest');

  const sortRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const onClickListItem = (obj: SortItem) => {
    dispatch(setSort(obj.sortBy));

    setActiveSort(obj.name);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as MouseEvent & {
        path: Node[];
      };

      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <b>sort by</b>
        <span onClick={() => setOpen(!open)}>{activeSort}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((value, i) => (
              <li
                key={uuidv4()}
                onClick={() => onClickListItem(value)}
                className={value.name === activeSort ? 'active' : ''}
              >
                {value.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
