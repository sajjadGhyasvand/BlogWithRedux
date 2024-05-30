import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import MainLayout from "../layouts/MainLayout";
import SingleBlogPage from "../components/SingleBlogPage.jsx";
import CreateBlogForm from "../components/CreateBlogForm.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: (
            <h3 className="text-center">چیزی پیدا نکردیم متاسفانه 🤗 ...</h3>
        ),
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/blogs/:blogId",
                element: <SingleBlogPage />,
            },
            {
                path: "/blogs/create-blog",
                element: <CreateBlogForm />,
            },
        ],
    },
]);
