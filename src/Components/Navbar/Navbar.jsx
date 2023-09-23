import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-5">
        <div>
           <h1 className="uppercase font-semibold">Mobile World</h1> 
        </div>
        <div className="flex space-x-3">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-green-400 p-3"
                : "p-3 bg-violet-400"
            }
          >
            <button>Home</button>
          </NavLink>
          <NavLink
            to="/favourite"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-green-400 p-3"
                : "p-3 bg-violet-400"
            }
          >
            <button>Favourite</button>
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-green-400 p-3"
                : "p-3 bg-violet-400"
            }
          >
            <button>Log in</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
