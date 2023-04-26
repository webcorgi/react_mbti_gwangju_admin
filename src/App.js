// import logo from './logo.svg';
import { useEffect, useState } from 'react';

import 'css/App.css';
import Home from 'pages/Home';
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
} from 'react-router-dom';
import ScrollTop from 'include/ScrollTop';
import Footer from 'include/Footer';
import Test from 'pages/Test';
import Result from 'pages/Result';
import Intro from 'pages/Intro';
import Types from 'pages/Types';
import Trip from 'pages/Trip';
import Detail from 'pages/Detail';
import TypesAdmin from 'pages/TypesAdmin';
import TripAdmin from 'pages/TripAdmin';
import Chart from 'pages/Chart';
import TestAdmin from 'pages/TestAdmin';


function App() {


  return (
    //  basename={process.env.PUBLIC_URL}
    <BrowserRouter basename={'/react_mbti_gwangju_admin'}>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/test" element={<Test />} />
        <Route path="/test/admin" element={<TestAdmin />} />
        <Route path="/result" element={<Result />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/types" element={<Types />} />
        <Route path="/types/admin" element={<TypesAdmin />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/trip/admin" element={<TripAdmin />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;