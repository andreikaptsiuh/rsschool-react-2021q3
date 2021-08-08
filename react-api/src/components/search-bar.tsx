import React, {
  ChangeEventHandler, Dispatch, FormEventHandler, SetStateAction, useState,
} from 'react';
import { ISearch } from '../shared/interfaces';

interface ISearchBarProps {
  setSearch: Dispatch<SetStateAction<ISearch>>;
}

export const SearchBar: React.FC<ISearchBarProps> = ({ setSearch }: ISearchBarProps) => {
  const [form, setForm] = useState('');
  const [sort, setSort] = useState('publishedAt');
  const [size, setSize] = useState(5);

  const searchHandler: ChangeEventHandler<HTMLInputElement> = (event): void => {
    setForm(event.target.value);
  };

  const submitHandler: FormEventHandler = (event): void => {
    event.preventDefault();
    setSearch({ search: form, sort, size });

    setForm('');
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
      </div>
    </div>
  );
};
