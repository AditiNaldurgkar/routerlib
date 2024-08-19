import Navbar from "../navbar/navbar";
import img from "./cookie1.jpeg"
const imgstyle = {
    borderRadius: "5px",
    height : "200px",
    width : "300px"
}
function Cookies(){

    return <div>
        <Navbar/>
        <h1>cookies</h1>
        <img src={img} style={imgstyle}/>
    </div>
}
export default Cookies