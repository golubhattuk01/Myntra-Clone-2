import { FaRegUserCircle } from "react-icons/fa";
import { LuBaggageClaim } from "react-icons/lu";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const bagList = useSelector((store) => store.bagitem);
  return (
    <header>
      <div className="logo_container">
        <Link to="/Myntra-Clone-2/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <span className="material-symbols-outlined action_icon">
            <FaRegUserCircle />
          </span>
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <span className="material-symbols-outlined action_icon">
            <FaHeartCirclePlus />
          </span>
          <span className="action_name">Wishlist</span>
        </div>

        <Link to="/Myntra-Clone-2/bag" className="action_container">
          <span className="material-symbols-outlined action_icon">
            <LuBaggageClaim />
          </span>
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bagList.length}</span>
        </Link>
      </div>
    </header>
  );
};
export default Header;