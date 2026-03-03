import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header className="header"> 
            <div className="header-container">
                <div className="logo">
                    <Link to="/">Bear Coffee</Link>
                </div>
                <nav className="nav-links">
                    <Link to='/AboutUs'>About Us</Link>
                    <Link to='/Order'> Order Here</Link>
                    <Link to='/FAQ'>FAQ</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;