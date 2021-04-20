import React from 'react';
import Header from './Header';
import Market from './Market';
import SeasonControl from './SeasonControl';

function App() {
  return (
    <>
      <div class="container">
        <div class="jumbotron">
          <Header />
        </div>
        <div class="row">
          <div class="col-6">
            <Market />
          </div>
          <div class="col-6">
            <SeasonControl />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;