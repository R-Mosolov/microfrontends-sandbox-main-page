import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <h1>Main Page</h1>
          <Link to="/second-page">
            Go to Second Page
          </Link>
        </>
      ),
    },
    {
      path: "/second-page",
      element: <h1>Second Page</h1>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
