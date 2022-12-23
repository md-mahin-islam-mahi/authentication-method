import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import ResetPassword from "../Components/ResetPassword/ResetPassword";
import Signup from "../Components/Signup/Signup";
import Main from "../Layout/Main";

    const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/reset-password",
                element: <ResetPassword />
            }
        ]
    }
]);
export default router;