import { createRoot } from "react-dom/client";
import Navbar from "./navbar/navbar";
import Cakes from "./cakes/cakes";
import Cookies from "./cookies/cokies";
import img from "./cake shop-pana.png";
const root = createRoot(document.getElementById("root"))
import { createBrowserRouter,RouterProvider } from "react-router-dom";
const imgstyle = {
    borderRadius: "5px",
    height : "400px",
    width : "500px"
}
function Home(){
    return <div> 
        <Navbar/>
        <h1>Welcome to our own cakes inn</h1>
        <img src={img} style={imgstyle}/>
    </div>
}
const router=createBrowserRouter([{
    path:"/",
    element: <Home/>},
   { path:"/cakes",
    element: <Cakes/>
},{
    path :"/cookies",
    element :<Cookies/>
}

]
)
root.render(<RouterProvider router={router}/>)