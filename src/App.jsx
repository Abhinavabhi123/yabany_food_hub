import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import UserRoute from "./Routes/UserRoute"
import AdminRoute from "./Routes/AdminRoute"

const App = () => {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <Router>
        <Routes>
          <Route path="/*" element={<UserRoute/>}/>
          <Route path="/admin/*" element={<AdminRoute/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App