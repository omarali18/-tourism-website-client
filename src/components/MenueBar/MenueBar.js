import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
// import useAuth from '../../Hooks/useAuth';
import "./MenueBar.css"

const MenueBar = () => {
    const [isMobile, setIsMobile] = useState(false)
    const { user, handleSignOut } = useFirebase()
    return (
        <nav className="navbar">
            <ul className={isMobile ? "nav-links-mobile" : "nav-link-container"}
                onClick={() => setIsMobile(false)}
            >
                <Link to="/home" className="home">
                    <li>Home</li>
                </Link>
                <Link to="/myorder" className="about">
                    <li>My Order</li>
                </Link>
                <Link to="/ManageAllOrders" className="about">
                    <li>Manage All Orders</li>
                </Link>
                <Link to="/AddNewOffer" className="pharmacys">
                    <li>Add A New Offer</li>
                </Link>
                {
                    !user?.email ? <Link to="/login" className="sign-up">
                        <li>Sing In</li>
                    </Link> : <Link to="/home" onClick={handleSignOut} className="sign-up">
                        <li>Sing Out</li>
                    </Link>
                }

            </ul>

            {
                user?.email ? <h3 className="logo"><i className="fas fa-user"></i> {user?.displayName} </h3> : <h3 className="logo">WELCOME</h3>
            }

            <button className="mobile-menu-icon"
                onClick={() => setIsMobile(!isMobile)}
            >
                {
                    isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>
                }
            </button>
        </nav>
    );
};

export default MenueBar;