import React from 'react';
import Router from './Router';
import Navbar from './layouts/navbar/Navbar'
import Footer from './layouts/footer/Footer'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Router></Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
