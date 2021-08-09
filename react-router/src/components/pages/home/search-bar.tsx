import React, {
  ChangeEventHandler, Dispatch, FormEventHandler, SetStateAction, useState,
} from 'react';
import { ISearch } from '../../../shared/interfaces';

interface ISearchBarProps {
  setSearch: Dispatch<SetStateAction<ISearch>>;
  pages: number;
}

export const SearchBar: React.FC<ISearchBarProps> = ({ setSearch, pages }: ISearchBarProps) => {
  const [form, setForm] = useState('');
  const [sort, setSort] = useState('publishedAt');
  const [size, setSize] = useState(5);
  const [page, setPage] = useState(1);

  const searchHandler: ChangeEventHandler<HTMLInputElement> = (event): void => {
    setForm(event.target.value);
  };

  const submitHandler: FormEventHandler = (event): void => {
    event.preventDefault();
    setSearch({
      search: form, sort, size, page,
    });
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
        />

        <input className="form_submit" type="submit" value="Search" />
      </form>

      <div className="search_settings">
        <label htmlFor="sort">
          Sort by:
          <select
            className="sort-select"
            name="sort"
            value={sort}
            onChange={sortHandler}
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
