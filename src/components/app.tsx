import React, { useState } from 'react';
import { Form } from './form';
import { CardsBoard } from './cards-board';
import { User } from '../shared/types';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[] | null>([]);

  return (
    <>
      <Form setUsers={setUsers} />
      <CardsBoard users={users} />
    </>
  );
};

export default App;
