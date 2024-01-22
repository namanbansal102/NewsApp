import React,{useEffect,useContext} from 'react'
import { Link,useLocation } from 'react-router-dom'
import noteContext from '../notes/noteContext'


export default function Navbar() {
  let location=useLocation()
  let a=useContext(noteContext)
  useEffect(() => {
    let mypath=location.pathname
    console.log(location);
  }, [location])
  
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">NewsMonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/science"?"active":""}`} aria-current="page" to="/science">{a.State.name}</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/technology"?"active":""}`} to="/technology">Technology</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/health"?"active":""}`} to="/health">Health</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className={`nav-link dropdown-toggle ${location.pathname==="/health"?"active":""}`} to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            General
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/business">Business</Link></li>
            <li><Link className="dropdown-item" to="/entertainment">entertainment</Link></li>
            <li><Link className="dropdown-item" to="/">General</Link></li>
            <li><hr className="dropdown-divider"/></li>
            
          </ul>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav></>
  )
}
