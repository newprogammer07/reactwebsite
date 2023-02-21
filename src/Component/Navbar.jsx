import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function Navbar() {

	var navigate = useNavigate()
	function logout(){
		localStorage.clear()
		navigate("/login")
	}
  return (
    <>
    <div className="py-1 bg-black  ">
    	<div className="container">
    		<div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
	    		<div className="col-lg-12 d-block">
		    		<div className="row d-flex">
		    			<div className="col-md pr-4 d-flex topper align-items-center">
					    	<div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2"></span></div>
						    <span className="text">+91-9506061859</span>
					    </div>
					    <div className="col-md pr-4 d-flex topper align-items-center">
					    	<div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane"></span></div>
						    <span className="text">dushyantyadav180@email.com</span>
					    </div>
					    <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
						    <span className="text">3-5 Business days delivery &amp; Free Returns</span>
					    </div>
				    </div>
			    </div>
		    </div>
		  </div>
    </div>
    <nav className="navbar navbar-expand-lg ftco_navbar bg-info sticky-top" id="ftco-navbar">
	    <div className="container">
	      <Link className="navbar-brand" to ="/">Eshopper</Link>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
			  <ul className = "navbar-nav ml-auto">
	          <li className = "nav-item active pr-4"><Link to ="/" className = "nav-link">Home</Link></li>
			  {/* <li className = "nav-item dropdown">
        <Link className = "nav-link dropdown-toggle" to ="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Catalog
        </Link>
        <div className = "dropdown-menu bg-warning mt-2" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/shop">Shop</Link>
          <Link className="dropdown-item" to="/single-product">Single Product</Link>
		  <Link className="dropdown-item" to="/cart">Cart</Link>
          <Link className="dropdown-item" to="/cheakout">Cheakout</Link>
        </div>
      </li> */}
	          <li className="nav-item pr-4"><Link to="/about" className="nav-link">About</Link></li>
	          <li className="nav-item pr-4"><Link to="/shop/All" className="nav-link">Shop</Link></li>
	          <li className="nav-item pr-4"><Link to="/contact" className="nav-link">Contact</Link></li>
			  <li className="nav-item pr-4"><Link to="/admin-home" className="nav-link">Admin</Link></li>
	          <li className="nav-item cta cta-colored pr-4"><Link to="/cart" className="nav-link"><span className="icon-shopping_cart"></span>[0]</Link></li>
			  {
				localStorage.getItem("login") ?
				<li className = "nav-item dropdown">
        <Link className = "nav-link dropdown-toggle  " to ="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Dushyant Yadav
        </Link>
        <div className = "dropdown-menu bg-warning mt-2 " aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/profile">Profile</Link>
          <Link className="dropdown-item" to="/cart">Cart</Link>
		  <button className="dropdown-item" onClick={logout}>Logout</button>
        </div>
      </li>:<li className="nav-item pr-4"><Link to="/login" className="nav-link">Login</Link></li>
			  }
	        </ul>
	      </div>
	    </div>
	  </nav>
    </>
  )
}
