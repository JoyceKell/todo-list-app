import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoList from "../components/TodoList";
import PutList from "../components/PutList";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TodoList />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
