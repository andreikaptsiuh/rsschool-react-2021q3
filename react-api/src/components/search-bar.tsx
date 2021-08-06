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

  const searchHandler: ChangeEventHandler<HTMLInputElement> = (event): void => {
    setForm(event.target.value);
  };

  const submitHandler: FormEventHandler = (event): void => {
    event.preventDefault();
    setSearch({ search: form, sort });

    setForm('');
  };

  const sortHandler: ChangeEventHandler<HTMLSelectElement> = (event): void => {
    setSort(event.target.value as string);
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
        <label>
          Sort by:
          <select
            className="sort-select"
            value={sort}
            onChange={sortHandler}
          >
            <option value="publishedAt">PublishedAt</option>
            <option value="relevancy">Relevancy</option>
            <option value="popular">Popular</option>
          </select>
        </label>
      </div>
    </div>
  );
};
