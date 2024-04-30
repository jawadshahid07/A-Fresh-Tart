import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "./elements/Button";
import { useEffect, useState } from "react";


export const Header = ({ cartCount }) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isNavbarActive, setIsNavbarActive] = useState(false);

    const handleLogout = () => {
        sessionStorage.removeItem('Auth token');
        sessionStorage.removeItem('User Id');
        window.dispatchEvent(new Event("storage"))
        navigate("/");
    }

    useEffect(() => {
        const checkAuthToken = () => {
            const token = sessionStorage.getItem('Auth token');
            if (token) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        }

        window.addEventListener('storage', checkAuthToken);

        return () => {
            window.removeEventListener('storage', checkAuthToken);
        }
    }, [])

    const toggleNavbar = () => {
        setIsNavbarActive(!isNavbarActive);
    };

    return (
        <header className="header">
            <div className="logoContent">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo"/>
                </Link>
                <h1 className="logoName">A Fresh Tart </h1>
            </div>
            <nav className={`navbar ${isNavbarActive ? 'active' : ''}`}>
                <Link to="/" >Home</Link>
                <Link to="/menu" >Menu</Link>
                <Link to="/" >Blogs</Link>
                <Link to="/" >Contact</Link>
                {
                    isLoggedIn ? 
                    <Button onClick={handleLogout}>Log Out</Button> : 
                    (
                        <>
                            <Link to="/login">Log In</Link>
                            <Link to="/register">Sign Up</Link>
                        </>
                    )
                }
            </nav>

            <div className="icon">
                <Link to="/cart" className="relative">
                    <i className="fas fa-shopping-cart" id="search"></i>
                    {cartCount > 0 && (
                        <div className="absolute top-0 right-0 bg-cyan-400 text-white rounded-full w-6 h-6 flex items-center justify-center">
                            {cartCount}
                        </div>
                    )}
                </Link>

                <i className="fas fa-bars" id="menu-bar" onClick={toggleNavbar}></i>
            </div>
        </header>
    )
}