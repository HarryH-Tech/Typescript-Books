import React, { FC } from 'react';

import AddBook from './components/AddBook';
import Header from './components/Header';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <AddBook />
      </div>
      <div className="book-list"></div>
    </div>
  );
};

export default App;
