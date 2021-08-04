import React, {
  ChangeEventHandler, Dispatch, FormEventHandler, SetStateAction, useState,
} from 'react';

interface ISearchPanelProps {
  setSearch: Dispatch<SetStateAction<string>>;
}

export const SearchPanel: React.FC<ISearchPanelProps> = ({ setSearch }: ISearchPanelProps) => {
  const [form, setForm] = useState('');

  const searchHandler: ChangeEventHandler<HTMLInputElement> = (event): void => {
    setForm(event.target.value);
  };

  const submitHandler: FormEventHandler = (event): void => {
    event.preventDefault();
    setSearch(form);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        type="text"
        value={form}
        onChange={searchHandler}
      />

      <input className="form_submit" type="submit" value="Submit" />
    </form>
  );
};
