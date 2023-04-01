import { createBrowserRouter } from "react-router-dom";
import Home from "../../page/Home";
import User from "../../page/User";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Home />
            </>
        ),
    },
    {
        path: "/user",
        element: (
            <>
                <User />
            </>
        ),
    },
]);

export default router;
