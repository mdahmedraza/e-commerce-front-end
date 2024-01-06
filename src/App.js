import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
// import Loader from './components/loader/Loader';
// import {Spinner} from './components/loader/Loader';

const App = () => {
  return(
    <React.Fragment>
      <BrowserRouter>
      {/* <Loader /> */}
        <Header />
        {/* <Spinner /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;