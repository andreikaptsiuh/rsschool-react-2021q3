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
    country: '',
    sex: false,
    notifications: false,
  });
  const [valid, setValid] = useState(false);

  const validation = (): boolean => {
    const values = Object.values(form);
    let res = true;
    values.forEach((key) => {
      if (key === '') res = false;
    });
    return res;
  };

  const formHandler: ChangeEventHandler<HTMLInputElement> = (event): void => {
    if (event.target.name === 'notifications') {
      setForm({
        ...form,
        [event.target.name]: !form.notifications,
      });
      return;
    }
    if (event.target.name === 'sex') {
      setForm({
        ...form,
        [event.target.name]: !form.sex,
      });
      return;
    }
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const formHandlerSelect: ChangeEventHandler<HTMLSelectElement> = (event): void => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const clearForm = (): void => {
    setValid(false);
    setForm({
      name: '',
      surname: '',
      birthday: '',
      country: 'Belarus',
      sex: false,
      notifications: false,
    });
  };

  const showFinish = () : void => alert('Form has been submit!');

  const submitHandler: FormEventHandler = (event): void => {
    event.preventDefault();
    if (validation()) {
      setUsers((state: User[]) => [...state, form]);
      clearForm();
      showFinish();
    } else {
      setValid(true);
    }
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
          <option>Select your country</option>
          <option value="Belarus">Belarus</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Germany">Germany</option>
          <option value="USA">USA</option>
        </select>
      </label>

      <div className="switch_container">
        Male
        <label className="switch">
          <input
            type="checkbox"
            name="sex"
            checked={form.sex}
            onChange={formHandler}
          />
          <span className="slider" />
        </label>
        Female
      </div>

      <label className="form_label__checkbox" htmlFor="notifications">
        I want to receive notifications
        <input
          type="checkbox"
          name="notifications"
          checked={form.notifications}
          onChange={formHandler}
        />
      </label>

      <p className={valid ? 'invalid' : 'valid'}>*Fill in all the fields</p>

      <input className="form_submit" type="submit" value="Submit" />
    </form>
  );
};
