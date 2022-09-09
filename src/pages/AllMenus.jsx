import React from "react";
import { useSelector } from "react-redux";
import Orders from "../components/menu/Orders";
import Menus from "../components/menu/Menus";
import MenuTop from "../components/menu/MenuTop";

const AllMenus = () => {
  const showorder = useSelector((state) => state.menu.showOrder);
  return (
    <>
      <MenuTop />
      <Menus />
      {showorder && <Orders />}
    </>
  );
};

export default AllMenus;
