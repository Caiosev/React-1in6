import {RouterPages} from './router'
import {BrowserRouter as Router} from 'react-router-dom'

const App = () =>{
  return(
    <Router>
      <RouterPages /> 
    </Router>
  )
}

export default App