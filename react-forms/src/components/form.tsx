import React, {
  ChangeEventHandler, Dispatch, FormEventHandler, SetStateAction, useState,
} from 'react';
import { User } from '../shared/types';

interface IFormProps {
  setUsers: Dispatch<SetStateAction<User[]>>
}

export const Form: React.FC<IFormProps> = ({ setUsers }: IFormProps) => {
  const [form, setForm] = useState<User>({
    name: '',
    surname: '',
    birthday: '',
    country: 'Belarus',
    notifications: false,
  });

  const formHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.name === 'notifications') {
      setForm({
        ...form,
        [event.target.name]: !form.notifications,
      });
      return;
    }
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const formHandlerSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler: FormEventHandler = (event): void => {
    event.preventDefault();
    setUsers((state: User[]) => [...state, form]);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <label className="form_label" htmlFor="name">
        Name:
        <input
          className="form_input"
          type="text"
          name="name"
          value={form.name}
          onChange={formHandler}
        />
      </label>

      <label className="form_label" htmlFor="surname">
        Surname:
        <input
          className="form_input"
          type="text"
          name="surname"
          value={form.surname}
          onChange={formHandler}
        />
      </label>

      <label className="form_label" htmlFor="birthday">
        Birthday:
        <input
          className="form_input"
          type="date"
          name="birthday"
          value={form.birthday}
          onChange={formHandler}
        />
      </label>

      <label className="form_label" htmlFor="country">
        Country:
        <select
          className="form_input"
          name="country"
          value={form.country}
          onChange={formHandlerSelect}
        >
          <option value="Belarus">Belarus</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Germany">Germany</option>
          <option value="USA">USA</option>
        </select>
      </label>

      <label className="form_label__checkbox" htmlFor="notifications">
        I want to receive notifications
        <input type="checkbox" name="notifications" checked={form.notifications} onChange={formHandler} />
      </label>

      <input className="form_submit" type="submit" value="Submit" />
    </form>
  );
};
