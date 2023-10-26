import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../ContextAPI/CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <ul className="nav">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <h4>Home</h4>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <h4>Cart <span>({cart.length})</span></h4>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
