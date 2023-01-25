import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <h1>Main Page</h1>
          <a href="http://localhost:3001/">
            Go to Second Page
          </a>
        </>
      ),
    },
    {
      path: "http://localhost:3001/",
      element: <h1>Second Fake Page</h1>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
