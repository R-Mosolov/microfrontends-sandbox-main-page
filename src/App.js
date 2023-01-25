import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const MicroFrontend2 = React.lazy(() => import("app2/App"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <h1>Micro-frontend 1</h1>
        <Link to="/second-page">
          Go to micro-frontend 2
        </Link>
      </>
    ),
  },
  {
    path: "/second-page",
    element: (
      <Suspense fallback={"loading..."}>
        <MicroFrontend2 />
      </Suspense>
    ),
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}


export default App;
