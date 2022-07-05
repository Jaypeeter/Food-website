import Chocolate from "./Chocolate";
import Cupcake from "./Cupcake"
import Fruits from "./Fruits"
import Doughnuts from "./Doughnuts"

import {Routes, Route} from 'react-router-dom'

export default function App(){




  return(
    <div>
      <Routes>
        <Route path="/" element={<Chocolate/>}></Route>
        <Route path="/cupcake" element={<Cupcake/>}></Route>
        <Route path="/fruits" element={<Fruits/>}></Route>
        <Route path="/doughnuts" element={<Doughnuts/>}></Route>
      </Routes>
    </div>
  )
}