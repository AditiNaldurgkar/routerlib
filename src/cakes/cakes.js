import Navbar from "../navbar/navbar";
import img1 from "./cakeimg1.jpeg";
import img2 from "./cakeimg2.jpeg";
const imgstyle = {
    borderRadius: "5px",
    height : "200px",
    width : "300px",
    margin : "10px",
}
function Cakes(){
    return <div>
        <Navbar/>
        <h1>Cakes</h1>
        <img src={img1} style={imgstyle}/>
        <img src={img2} style={imgstyle}/>
    </div>
}
export default Cakes