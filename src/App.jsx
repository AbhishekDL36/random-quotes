

import { useEffect, useState } from 'react';
import Home from './Home';
import './styles.css'
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import LikedQuotes from './Likedquotes';
import AddQuotes from './Add-quotes';
function App() {
 const [liked,setLiked] = useState(() => {
  try {
    const storedLikes = localStorage.getItem("storeLiked");
    return storedLikes ? JSON.parse(storedLikes) : [];
  } catch (error) {
    console.error("Error parsing stored likes:", error);
    return [];
  }
})


function getLikedQuotation(val){
setLiked(val)
console.log("received from home",val)
}

  useEffect(()=>{
     localStorage.setItem('storeLiked',JSON.stringify(liked))
   },[liked])
  return (


<div className="App">


<BrowserRouter>

  <nav className="flex1">
    
      <Link to="/">
        <button>HOME</button>
      </Link>
      <Link to="/Liked-quotes">
        <button>LIKED QUOTES</button>
      </Link>
      <Link to="/Add-quotations">
        <button>ADD QUOTATIONS</button>
      </Link>
   
  </nav>

  <Routes>
    <Route path="/" element={<Home getLikedQuotation={getLikedQuotation} />} />
    <Route path="/Liked-quotes" element={<LikedQuotes liked={liked} />} />
 <Route path='/Add-quotations' element={<AddQuotes/>}/>
  </Routes>

</BrowserRouter>

</div>
)
}



export default App;

