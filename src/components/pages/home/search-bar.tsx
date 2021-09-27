import React, {
  ChangeEventHandler, FormEventHandler, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../../shared/interfaces';
import { setLoad } from '../../../shared/store/appReducer';
import { fetchNews } from '../../../shared/store/asyncActions';

export const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const pages = useSelector((state: IAppState) => state.app.cards.totalResults);

  const [form, setForm] = useState('');
  const [sort, setSort] = useState('publishedAt');
  const [size, setSize] = useState(5);
  const [page, setPage] = useState(1);

  const searchHandler: ChangeEventHandler<HTMLInputElement> = (event): void => {
    setForm(event.target.value);
  };

  const submitHandler: FormEventHandler = (event): void => {
    event.preventDefault();

    dispatch(setLoad(true));
    dispatch(fetchNews({
      search: form, sort, size, page,
    }));
  };

  const sortHandler: ChangeEventHandler<HTMLSelectElement> = (event): void => {
    setSort(event.target.value as string);
  };

  const sizeHandler: ChangeEventHandler<HTMLInputElement> = (event): void => {
    let value = +event.target.value;
    value = value > 15 ? 15 : value;
    value = value < 3 ? 3 : value;

    setSize(value);
  };

  const pageHandler: ChangeEventHandler<HTMLInputElement> = (event): void => {
    const value = +event.target.value;
    setPage(value);
  };

  return (
    <div className="search-bar_container">
      <form className="search-bar_form" onSubmit={submitHandler}>
        <div className="search-bar__icon" />
        <input
          className="search-bar"
          type="text"
          value={form}
          onChange={searchHandler}
          data-testid="search-bar"
        />

        <input className="form_submit" type="submit" value="Search" data-testid="form_submit" />
      </form>

      <div className="search_settings">
        <label htmlFor="sort">
          Sort by:
          <select
            className="sort-select"
            name="sort"
            value={sort}
            onChange={sortHandler}
            data-testid="sort-select"
          >
            <option value="publishedAt">PublishedAt</option>
            <option value="relevancy">Relevancy</option>
            <option value="popular">Popular</option>
          </select>
        </label>

        <label htmlFor="size">
          Page size:
          <input
            type="number"
            className="search-size"
            name="size"
            min="3"
            max="15"
            value={size}
            onChange={sizeHandler}
          />
        </label>

        <label htmlFor="page">
          Page:
          <input
            type="number"
            className="search-page"
            name="page"
            min="1"
            value={page}
            onChange={pageHandler}
          />
        </label>

        <div className="search-pages">
          {' '}
          All pages:
          {' '}
          {pages}
        </div>
      </div>
    </div>
  );
};
