import { createBrowserRouter } from "react-router-dom";

// import pages
import Architecture from "../modules/architecture/page";
import Sample from "../modules/sample/page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Sample />
    }
]);

export default router;