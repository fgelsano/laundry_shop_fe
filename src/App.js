import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/frontend/Home';
import Register from './components/frontend/auth/Register';
import Login from './components/frontend/auth/Login';
import MainLayout from './layout/admin/MainLayout';
import About from './components/frontend/About';
import Contact from './components/frontend/Contact';



function App() {
  return (

    <div className="App">
      <Router>

        <Switch>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/admin" name="Admin" render={(props) => <MainLayout {...props} /> } />

        </Switch>

      </Router>
    
      
    </div>
  );

}
    


export default App;
