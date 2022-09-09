import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { navbarActions } from "../state/navbar-slice";

const Sidebar = () => {
  const sidebars = useSelector((state) => state.navbar.links);
  const dispatch = useDispatch();
  return (
    <div className="sidebar show">
      <div
        className="sidebar-items"
        onClick={() => dispatch(navbarActions.closeNavbar())}
      >
        {sidebars.map((sidebar) => {
          const { id, name, route } = sidebar;
          return (
            <article key={id}>
              <Link to={route}>{name}</Link>
            </article>
          );
        })}
      </div>
      <IoCloseSharp
        className="sidebar-icon"
        onClick={() => dispatch(navbarActions.closeNavbar())}
      />
    </div>
  );
};

export default Sidebar;
