import React from 'react';
//css
import './App.css';
//components
import Navigation from './components/Navigation/Navigation';
import Aboutme from './components/Aboutme/Aboutme';
import Hardskill from './components/Hardskill/Hardskill';
import Softskill from './components/Softskill/Softskill';
import Experience from './components/Experience/Experience';
import Works from './components/Works/Works';
//dom
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Navigation/>
        <div className="wrapper-app-content">
          <Route path='/aboutme' component={Aboutme}/>
          <Route path='/hardskill' component={Hardskill}/>
          <Route path='/softskill' component={Softskill}/>
          <Route path='/experience' component={Experience}/>
          <Route path='/works' component={Works}/>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
