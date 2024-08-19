import { createRoot } from "react-dom/client";
import Navbar from "./navbar/navbar";
import Cakes from "./cakes/cakes";
import Cookies from "./cookies/cokies";
const root = createRoot(document.getElementById("root"))
import { createBrowserRouter,RouterProvider } from "react-router-dom";
function Home(){
    return <div> 
        <Navbar/>
        <h1>home</h1>
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