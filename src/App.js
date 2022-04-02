import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import RouteLink from "./RouteLink"
import DataProvider from "./Context"
import Navbar from "./components/Navbar"


function App() {
  return (
    <DataProvider>
      <div className='app'>
        <Router>
          <Navbar />
          <RouteLink />
        </Router>
      </div>
    </DataProvider>
  );

}

export default App;
