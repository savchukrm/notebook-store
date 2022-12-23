import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import qs from 'qs';
import { v4 as uuidv4 } from 'uuid';

import { RootState, useAppDispatch } from '../redux/store';
import { setCategoryId, setCurrentPage } from '../redux/filter/slice';
import { fetchData } from '../redux/items/asynAction';

import {
  Categories,
  Sort,
  DiaryBlock,
  Skeleton,
  Pagination,
} from '../components';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { items, status } = useSelector((state: RootState) => state.data);
  const { sort, categoryId, currentPage } = useSelector(
    (state: RootState) => state.filter
  );

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (num: number) => {
    dispatch(setCurrentPage(num));
  };

  useEffect(() => {
    if (categoryId !== 0) {
      onChangePage(1);
    }
  }, [categoryId]);

  const category = categoryId ? `category=${categoryId}` : ' ';
  const sortPrice = sort ? `&sortBy=${sort}` : ' ';

  const getData = async () => {
    dispatch(
      fetchData({
        category,
        sortPrice,
        currentPage,
      })
    );

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getData();
  }, [category, sortPrice, currentPage]);

  useEffect(() => {
    const queryString = qs.stringify({ currentPage, category, sortPrice });

    navigate(`?${queryString}`);
  }, [category, sortPrice, currentPage, navigate]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoryId={categoryId}
          onChangeCategory={onChangeCategory}
        />
        <Sort />
      </div>
      {status === 'error' ? (
        <div className="content__error">
          <h2>Error</h2>
          <p>
            Unfortunately an error occurred while receiving the information.
            <br />
            Please try again later.
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === 'loading'
            ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj: any) => <DiaryBlock key={uuidv4()} {...obj} />)}
        </div>
      )}

      {categoryId === 0 && <Pagination onChangePage={onChangePage} />}
    </div>
  );
};

export default Home;
