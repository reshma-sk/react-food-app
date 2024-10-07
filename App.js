import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from './src/components/Login';
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { RestaurantShimmer } from './src/components/Shimmer';
import "./index.css"

const About = lazy(() => import("./components/About"));
const Body = lazy(() => import("./components/Body"));

const App = ()=>{
    return(    
        <div className="w-full flex flex-col justify-between items-center mt-[120px] min-h-[calc(100vh-120px)]">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<RestaurantShimmer/>}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1 className="text-3xl font-bold">Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,
      },
    ],
    errorElement: <Error/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/hello",
    element: <h1>Hello, World!!</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)