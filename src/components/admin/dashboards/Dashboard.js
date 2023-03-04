import React from 'react'
import { Link } from 'react-router-dom';


function Dashboard() {
  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Dashboard</h1>
      {/* <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">New Orders</li>
      </ol> */}
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="card bg-primary text-white mb-4">
            <div className="card-body">0</div>
            <div className="card-body">New Orders</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link className="small text-white stretched-link" to="#">View Details</Link>
              <div className="small text-white"><i className="fas fa-angle-right"></i></div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-warning text-white mb-4">
            <div className="card-body">0</div>
            <div className="card-body">In Progress</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link className="small text-white stretched-link" to="#">View Details</Link>
              <div className="small text-white"><i className="fas fa-angle-right"></i></div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-success text-white mb-4">
            <div className="card-body">0</div>
            <div className="card-body">Completed</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link className="small text-white stretched-link" to="#">View Details</Link>
              <div className="small text-white"><i className="fas fa-angle-right"></i></div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-danger text-white mb-4">
            <div className="card-body">0</div>
            <div className="card-body">Daily Sales</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <Link className="small text-white stretched-link" to="#">View Details</Link>
              <div className="small text-white"><i className="fas fa-angle-right"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
}

      export default Dashboard
