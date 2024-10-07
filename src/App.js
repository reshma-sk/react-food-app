import React,{lazy,Suspense} from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from './components/Login';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { RestaurantShimmer } from './components/Shimmer';
import "../index.css"

const About = lazy(() => import("./components/About"));
const Body = lazy(() => import("./components/Body"));

const AppLayOut = ()=>{
    return(    
        <div className="app">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut/>,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<RestaurantShimmer/>}>
            <Body/>
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