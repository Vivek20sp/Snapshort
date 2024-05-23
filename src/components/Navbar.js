import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <>
    <header className="py-3 mb-3 fixed-top border-bottom bg-primary">
        <div className="container-fluid  d-grid gap-3 align-items-center bg-primary" style={{gridTemplateColumns:"1fr 2fr"}}>
            <div className="dropdown">
                <Link to="/" className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-body-emphasis text-decoration-none text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-camera2" style={{fontSize:"30px"}}></i>
                </Link>
                <ul className="dropdown-menu text-small shadow" >
                    <li><Link className="dropdown-item active" to="/" aria-current="page">Overview</Link></li>
                    <li><Link className="dropdown-item" to="/bookmark">BookMark</Link></li>
                    <li><Link className="dropdown-item" to="/newCommingPage">Customers</Link></li>
                    <li><Link className="dropdown-item" to="/CommingSoon">Products</Link></li>
                    <li><Link className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="/newCommingPage">Reports</Link></li>
                    <li><Link className="dropdown-item" to="/newCommingPage">Analytics</Link></li>
                </ul>
            </div>

            <div className="d-flex align-items-center">
                <form className="w-100 me-3 d-flex flex-row gap-2" role="search">
                    <input type="search" className="form-control" placeholder="Search..." aria-label="Search" value={props.message} onChange={props.handleChange}/>
                    <Link to="/newImages"><button type="button" className="btn btn-outline-warning" onClick={props.click}>Submit</button></Link>
                </form>
                <div className="flex-shrink-0 dropdown">
                    <Link to="/" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
                    </Link>
                        <ul className="dropdown-menu text-small shadow">
                            <li><Link className="dropdown-item" to="/">New project...</Link></li>
                            <li><Link className="dropdown-item" to="/">Settings</Link></li>
                            <li><Link className="dropdown-item" to="/">Profile</Link></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><Link className="dropdown-item" to="/">Sign out</Link></li>
                        </ul>
                </div>
            </div>
        </div>
  </header>
    </>
  )
}

export default Navbar
