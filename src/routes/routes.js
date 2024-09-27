import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from "../components/pages/Home"
import Main from "../components/Main"
import Work_portoflio from "../components/pages/Work_portoflio"
import Media_advertising from "../components/pages/Media_advertising"
import Brand_strategy from "../components/pages/Brand_strategy"
import Design_solutions from "../components/pages/Design_solutions"
import Content_solutions from "../components/pages/Content_solutions"
import Web_development from "../components/pages/Web_development"
import Digital_marketing from "../components/pages/Digital_marketing"
import News_views from "../components/pages/News_views"
import Awards from "../components/pages/Awards"
import Careers from "../components/pages/Careers"
import The_idea_people from "../components/pages/The_idea_people"
import Contact_us from "../components/pages/Contact_us"
import Disclaimer from "../components/pages/Disclaimer"
const router = createBrowserRouter([
  {
    path: "",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>,       
       },
      {
        path: "/work_portoflio",
        element: <Work_portoflio/>,       
       },
       {
        path: "/media_advertising",
        element: <Media_advertising
        />,       
       },
       {
        path: "/brand_strategy",
        element: <Brand_strategy/>,       
       },
       {
        path: "/design_solutions",
        element: <Design_solutions/>,       
       },
       {
        path: "/content_solutions",
        element: <Content_solutions/>,       
       },
       {
        path: "/web_development",
        element: <Web_development/>,       
       },
       {
        path: "/digital_marketing",
        element: <Digital_marketing/>,       
       },
       {
        path: "/news_views",
        element: <News_views/>,       
       },
       {
        path: "/awards",
        element: <Awards/>,       
       },
       {
        path: "/careers",
        element: <Careers/>,       
       },
       {
        path: "/the_idea_people",
        element: <The_idea_people/>,       
       },
       {
        path: "/contact_us",
        element: <Contact_us/>,       
       },
       {
        path: "/disclaimer",
        element: <Disclaimer/>,       
       },
    ],
  },
]);
export default router