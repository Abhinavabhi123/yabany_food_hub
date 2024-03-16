import { Routes,Route } from "react-router-dom"
import { HomePage } from "../Pages"

export default function UserRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
  )
}
