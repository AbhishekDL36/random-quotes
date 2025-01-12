

import { useState } from 'react';
import Home from './Home';
import './styles.css'
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import LikedQuotes from './Likedquotes';
function App() {
 const [liked,setLiked] = useState([])
function getLikedQuotation(val){
setLiked(val)
}

 
  return (
    <div className="App">
 
      <BrowserRouter>
      <nav>
        <div className="flex1">
        <Link to="/">  <button>      HOME   </button>  </Link>
      <Link to="/Liked-quotes"> <button>LIKED QUOTES</button></Link>  
       <Link to="/Add-quotations"> <button>ADD QUOTATIONS</button> </Link> 
          
        </div>
        </nav>
      
      <Routes>
<Route path='/' element={<Home getLikedQuotation={getLikedQuotation}/>}/>
<Route path='/Liked-quotes' element={<LikedQuotes liked={liked}/>}/>
      </Routes>
      </BrowserRouter>
     


</div>

 
)
}



export default App;

