
import './App.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch
} from "react-router-dom";
import  Header  from './components/Header/Header';
import  Home from './components/Home/home';
import  Footer  from './components/Footer/footer';
import  MoveDetails  from './components/MovieDetails/MoveDetails';
import  PageNotFound  from './components/PageNotFound/PageNotFound';
function App() {
  return (
    <div className="App">

<Router>
<Header></Header>
<div className='container'>

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/movie/:imbdID' element={<MoveDetails/>}/>
<Route path='*' element={<PageNotFound/>}/>
</Routes>
</div>
<Footer/>

</Router>

     
    </div>
  );
}

export default App;
