import React from 'react';
import ReactDOM from 'react-dom';
// import {Link, HashRouter as Router, Route, Routes} from 'react-router-dom';
import { InfoString } from './components/header/InfoString/InfoString';
import { NavBar } from './components/header/NavBar/NavBar';
import './index.css';


ReactDOM.render(
  <>
  <InfoString/>
  <NavBar/>
  </>
  // <Router>
  //     <Routes>
  //       {/* <Route element={<MainPage/>} path='/'/>
  //       <Route element={<MainPage/>} path='/Home'/>
  //       <Route element={<PrivateRoute><UserActivitiesPage/></PrivateRoute>} path='/Profile'/>
  //       <Route element={<LoginGooglePage/>} path='/Signin'/>
  //       <Route element={<FAQ/>} path='/Faq'/>
  //       <Route path='*' element={<NotFoundPage/>}/> */}
  //     </Routes>
  //   </Router>
  ,
  document.getElementById('root')
)