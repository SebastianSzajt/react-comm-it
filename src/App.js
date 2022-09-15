import Navbar from "./Navbar"
import home from "./pages/home"
import info from "./pages/info"
import login from "./pages/login"
import prediction from "./pages/prediction"
import schedule from "./pages/schedule"
import { Route, Routes} from "react-router-dom" 


function App(){
    return(
        <>
        <Navbar />
        <div className="containter">
            <Routes>
                <Route path="/" element={<home />} />
                <Route path="/prediction" element={<prediction />} />
                <Route path="/info" element={<info />} />
                <Route path="/schedule" element={<schedule />} />
                <Route path="/login" element={<login />} />
            </Routes>
        </div>
        </>
    )
}
export default App