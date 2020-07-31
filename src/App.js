import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './pages/Admin'
import AddMovie from './pages/Addmovie'
import EditMovie from './pages/Editmovie'
import User from './pages/User'
import Review from './pages/Userreview'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'


function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
       <Route exact path='/' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/admin' component={Admin}/>
          <Route path='/add' component={AddMovie}/>
          <Route path='/edit/:movieId' component={EditMovie}/>
          <Route path='/user' component={User}/>
          <Route path='/review/:movieId' component={Review}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
