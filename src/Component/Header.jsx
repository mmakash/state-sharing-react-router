import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav style={{ display: "flex", gap: "2rem" }}>
            <Link to="/">Home</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;