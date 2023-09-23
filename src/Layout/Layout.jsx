import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const Layout = () => {
  return (
    <div>
      <div className="bg-violet-300">
        <Header></Header>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
