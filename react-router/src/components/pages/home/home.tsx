import React from 'react';
import { IHomePageProps } from '../../../shared/interfaces';
import { SearchBar } from './search-bar';
import { ResultBoard } from './result-board';

export const Home: React.FC<IHomePageProps> = ({
  setSearch, pages, cards, isLoading,
}: IHomePageProps) => (
  <div className="container">
    <div className="home_page">
      <SearchBar setSearch={setSearch} pages={pages} />
      {isLoading ? <h2>loading...</h2> : <ResultBoard cards={cards} />}
    </div>
  </div>

);
