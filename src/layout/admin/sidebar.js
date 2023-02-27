import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
   
      <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <Link className="nav-link" to="/admin/dashboard">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </Link>
                            <Link className="nav-link" to="/admin/order">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Orders
                            </Link>
                            <Link className="nav-link" to="/admin/customers">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Customers
                            </Link>

                            <Link className="nav-link collapsed" to="/admin/reports" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Reports
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link className="nav-link" to="/admin/sales">Sales</Link>
                                        <Link className="nav-link" to="/admin/expenditures">Expenditures</Link>
                                    </nav>
                                </div>

                            <Link className="nav-link collapsed" to="/admin/sms" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                SMS
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link className="nav-link" to="/admin/newSMS">New SMS</Link>
                                        <Link className="nav-link" to="/admin/loadBalance">SMS Load Balance</Link>
                                    </nav>
                                </div>

                           <Link className="nav-link collapsed" to="/admin/reviews" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Reviews
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link className="nav-link" to="/admin/chart">Chart</Link>
                                        <Link className="nav-link" to="/admin/reviews">Respond & Hide</Link>
                                    </nav>
                                </div>

                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>
           
        </div>

  )
}

export default Sidebar
