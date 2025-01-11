import { useEffect, useState } from "react";
import './styles.css'

function App() {
 const [quotes,setQuotes]=  useState([])
 const [word,setWord] = useState("")
 useEffect(()=>{
 async function getQuotes(){
  let values= await fetch('https://dummyjson.com/quotes') 
  let res= await values.json()
 
  console.log(res.quotes)
  let val=[]
  
    for(let i=0; i<res.quotes.length;i++){
      val.push(res.quotes[i].quote)
    }
    setQuotes(val)
    if(word.trim() != ""){
    let newArray=  val.filter((value)=>{
        return value.toLowerCase().includes(word.toLowerCase())
      })
      setQuotes(newArray)
    }
 
 


  }

  getQuotes()
  
 },[quotes])

 
  return (
    <div className="App">
<h1 className="heading">QUOTES YOU LIKE</h1>
<input type="text" onChange={e=>setWord(e.target.value)} placeholder="type the word "/>
{

  quotes.length>0? ( <div>
    {
      word.length>0?   <p>quotations with :{word} </p>

      : <p></p>
    }
    {quotes.map((quote,index)=>( 
    <p key={index}>{quote}</p>
  )) }
  </div>
  ):<p>Loading...</p>
}
    </div>
  );
}

export default App;
