import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/frontend/Home'
import Register from './components/frontend/auth/Register'
import Login from './components/frontend/auth/Login'
import AdminPrivateRoute from'./AdminPrivateRoute'
import axios from 'axios'
import About from './components/frontend/About';
import Contact from './components/frontend/Contact';


axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

function App() {
  return (

    <div className="App">
      <Router>

        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/login">
            {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Login />}
          </Route>
          <Route path="/register">
            {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Register />}
          </Route>
          {/* <Route path="/admin" name="Admin" render={(props) => <MainLayout {...props} />} /> */}

          <AdminPrivateRoute path="/admin" name="Admin" />

        </Switch>

      </Router>

    </div>

  );
}

export default App;
