import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'
import routes from '../../routes/routes'
import Sidebar from './Sidebar';
import '../../assets/admin/css/styles.css'
import '../../assets/admin/js/scripts'
import 'bootstrap/dist/js/bootstrap.bundle.js'




const MainLayout = () => {



  return (
    <div className='sb-nav-fixed'>
      <Navbar />

      <div id='layoutSidenav'>
        <div id='layoutSidenav_nav'>
          <Sidebar />
        </div>
        <div id='layoutSidenav_content'>
          <main>

            <Switch>
              {routes.map((route, idx) => {
                return (
                  route.component && (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={(props) => (
                        <route.component {...props} />
                      )}
                    />
                  )
                )
              })}
              <Redirect from="/admin" to="/admin/dashboard" />
            </Switch>

          </main>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default MainLayout
