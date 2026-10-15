import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/Layout/MainLayout";
import { Home } from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/about",
          element: <About />,
        },

        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path:"/services",
          element:<Services/>
        }
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}>
        <MainLayout />
      </RouterProvider>
    </div>
  );
}

export default App;
