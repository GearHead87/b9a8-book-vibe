import { createBrowserRouter } from "react-router-dom";

import MainLayout from '../layouts/MainLayout.jsx';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />
    },
]);