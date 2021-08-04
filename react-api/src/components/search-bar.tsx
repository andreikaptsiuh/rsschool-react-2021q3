import React, {
  ChangeEventHandler, Dispatch, FormEventHandler, SetStateAction, useState,
} from 'react';

interface ISearchBarProps {
  setSearch: Dispatch<SetStateAction<string>>;
}

export const SearchBar: React.FC<ISearchBarProps> = ({ setSearch }: ISearchBarProps) => {
  const [form, setForm] = useState('');

  const searchHandler: ChangeEventHandler<HTMLInputElement> = (event): void => {
    setForm(event.target.value);
  };

  const submitHandler: FormEventHandler = (event): void => {
    event.preventDefault();
    setSearch(form);
    setForm('');
  };

  return (
    <form className="search-bar__container" onSubmit={submitHandler}>
      <div className="search-bar__icon" />
      <input
        className="search-bar"
        type="text"
        value={form}
        onChange={searchHandler}
      />

      <input className="form_submit" type="submit" value="Search" />
    </form>
  );
};
