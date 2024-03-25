import { createBrowserRouter } from "react-router-dom";

import MainLayout from '../layouts/MainLayout.jsx';
import ListedBooks from "../pages/ListedBooks.jsx";
import PagesToRead from "../pages/PagesToRead.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
              path: "ListedBook",
              element: <ListedBooks></ListedBooks>,
            },
            {
              path: "PagesToRead",
              element: <PagesToRead></PagesToRead>,
            },
          ],
    },
]);