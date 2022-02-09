import React from 'react';
import ReactDOM from 'react-dom';
// import {Link, HashRouter as Router, Route, Routes} from 'react-router-dom';
import { Menu } from './components/header/Menu/Menu';
import { MainPage } from './pages/MainPage/ManePage';
import './index.css';


ReactDOM.render(
  <>
    <Menu/>
    <MainPage/>
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