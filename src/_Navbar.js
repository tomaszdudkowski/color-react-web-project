import "./SCSS/Components/_navbar.scss"

export default function _Navbar() {
    return(
        <div className="navbar">
            <p className="navbar__logo">Logo</p>
            <ul className="navbar__menu">
                <li>Home</li>
                <li>Price</li>
                <li>About Us</li>
            </ul>
        </div>
    )
}