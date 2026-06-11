import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx"
import HeroSaction from "./pages/student/HeroSaction.jsx";
import { RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import Courses from "./pages/student/Courses.jsx";
import MyLearning from "./pages/student/myLearning.jsx";
import Profile from "./pages/student/Profile.jsx";

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
           <Courses/>
          </>
            ),
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"my-learning",
        element:<MyLearning/>
      },
      {
        path:"profile",
        element:<Profile/>
      },
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