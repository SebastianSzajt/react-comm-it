import Navbar from "./Navbar"
import Home from "./pages/Home"
import Prediction from "./pages/Prediction"
import Info from "./pages/Info"
import Schedule from "./pages/Schedule"
import Login from "./pages/Login"
import { Route, Routes} from "react-router-dom" 





function App(){
    return(
        <>
        <Navbar />
        <div className="containter">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Prediction" element={<Prediction />} />
                <Route path="/Info" element={<Info />} />
                <Route path="/Schedule" element={<Schedule />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </div>
        </>
    )
}
export default App