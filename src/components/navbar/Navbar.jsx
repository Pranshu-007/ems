import logo from "../../assets/evento.png";
import "./navbar.css";

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <img className="imglogo" src={logo} alt="evento logo" />
                <div className="nav-link">
                    <div className="down">Download Broucher</div>
                    <button className="contact">Contact Us</button>
                </div>
            </div>
        </>
    )
}

export default Navbar