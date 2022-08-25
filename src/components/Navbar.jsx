import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlineMenu } from "react-icons/ai";
import home2 from "../images/hot_drinks/forhome2.webp";
import { menuActions } from "../state/menu-slice";
import { FaCartArrowDown } from "react-icons/fa";
import { navbarActions } from "../state/navbar-slice";

const Navbar = () => {
  const dispatch = useDispatch();
  const links = useSelector((state) => state.navbar.links);
  const orders = useSelector((state) => state.menu.orders);
  console.log(orders)
  return (
    <nav className="nav">
      <div className="image">
        <img className="logo" src={home2} alt="logo" />
      </div>
      <div className="my_links">
        {links.map((link) => {
          const { id, name, route } = link;
          return (
            <ul className="links" key={id}>
              <li>
                <Link to={route}>{name}</Link>
              </li>
            </ul>
          );
        })}
        {orders.length > 0 && (
          <div
            className="order-cart"
            onClick={() => dispatch(menuActions.showOrder())}
          >
            <FaCartArrowDown
              className="cart-icon"
              style={{ fontSize: "30px" }}
            />
            <p> {orders.length}</p>
          </div>
        )}
        <div className="menu">
          <AiOutlineMenu
            className="icon"
            onClick={() => dispatch(navbarActions.openNavbar())}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
