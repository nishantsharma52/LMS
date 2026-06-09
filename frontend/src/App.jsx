import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx"
import HeroSaction from "./pages/student/HeroSaction.jsx";
import { RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSaction />
            {/* coures */}
          </>
            ),
      },
      {
        path:"login",
        element:<Login/>
      }
    ],
  },
]);
function App(){
return (
  <main>
    <RouterProvider router={appRouter} />
  </main>
);
}


export default App