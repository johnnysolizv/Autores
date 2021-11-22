import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Main from '../src/views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
    <Router>
      <Main path="autores/"/>
      <Detail path="autores/:id" />
      <Update path="autores/:id/edit"/>
    </Router>
  </div>
  );
}
export default App;
