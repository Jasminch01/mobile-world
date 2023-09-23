import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import PhonesDetails from "../Components/PhonesDetails/PhonesDetails";
import Favourite from "../Components/Favourite/Favourite";
import Login from "../Components/Login/Login";

const Router = createBrowserRouter([
    {
        path : '/',
        element : <Layout></Layout>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : ()=> fetch('/phones.json')
            },
            {
                path : '/phones-details/:id',
                element : <PhonesDetails></PhonesDetails>,
                loader : ()=> fetch('/phones.json')
            },
            {
                path : '/favourite',
                element : <Favourite></Favourite>
            },
            {
                path : '/login',
                element : <Login></Login>
            }
        ]
    }
])

export default Router;