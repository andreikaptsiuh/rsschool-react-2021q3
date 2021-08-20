import React from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../../../shared/interfaces';
import { SearchBar } from './search-bar';
import { ResultBoard } from './result-board';

export const Home: React.FC = () => {
  const isLoad = useSelector((state: IAppState) => state.app.isLoad);

  return (
    <div className="container">
      <div className="home_page">
        <SearchBar />
        {isLoad ? <h2>loading...</h2> : <ResultBoard />}
      </div>
    </div>
  );
};
