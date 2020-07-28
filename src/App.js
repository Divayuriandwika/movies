import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './pages/Admin'
import AddMovie from './pages/Addmovie'


function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
          <Route exact path='/' component={Admin}/>
          <Route path='/admin' component={AddMovie}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
