import "../Header/Header.css"
import logoimage from "../../assets/img/new-logo.jpg"
import dropdownimg from "../../assets/img/down-arrow.png"

function Header() {
    return (
        <>
        <header>
            <nav className="d-flex justify-content-around align-items-center">
                <div className="d-flex align-items-center">
                <img src={logoimage} className="logo-image" />
                <h5 className="menu-margin">Fresh Food</h5>
                </div>
                <div>
                    <ul className="d-flex list-style menu-margin">
                        <li className="li-margin">Home</li>
                        <li className="li-margin">Menu</li>
                        <li className="li-margin">Our Services</li>
                        <li className="li-margin">About</li>
                        <li className="li-margin">Contact
                        <img src={dropdownimg} className="drop-down"/></li>
                    </ul>
                </div>
                <div className="d-flex">
                    <div className="li-margin-2">
                        <button className="login-button">Login</button>
                    </div>
                    <div className="li-margin-2">
                        <button className="login-button">Sign Up</button>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header