import { createBrowserRouter } from "react-router-dom";

// import pages
import Architecture from "../modules/architecture/page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Architecture />
    }
]);

export default router;