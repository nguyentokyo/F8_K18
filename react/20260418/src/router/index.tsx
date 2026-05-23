import { createBrowserRouter } from "react-router";
import LoginPage from '../Pages/Login'
import HomePage from '../Pages/Home'

const router = createBrowserRouter([
    {
        path: "/Login",
        element: <LoginPage />
    },
    {
        path: "/",
        element: <HomePage />
    },
]);

export default router;




