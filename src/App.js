import React from 'react';
import './App.css';
// import axios from 'axios';
import NoobContextProvider from './contexts/Noob/NoobState';
import Noobs from './components/Noob/Noobs';

const App = () => {
  return (
    <div className="App">
      <NoobContextProvider>
          <h1 className="orange-text">The Noob Lists using Context</h1>
          <Noobs />
        </NoobContextProvider>
    </div>
  );
}

export default App;
