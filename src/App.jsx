
import Home from './Home';
import './styles.css'
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
function App() {
 


 
  return (
    <div className="App">

      <BrowserRouter>
      <nav>
        <div className="flex1">
        <Link to="/">  <button>      HOME   </button>  </Link>
      <Link to="/Liked-quotes"> <button>LIKED QUOTES</button>
      </Link>  
       <Link to="/Add-quotations"> <button>ADD QUOTATIONS</button> </Link> 
          
        </div>
       
      </nav>

      <Routes>
<Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
   

    </div>
  );
}

export default App;