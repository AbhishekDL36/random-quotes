 import React, { useEffect, useState } from "react";

 
 function Home({getLikedQuotation}) {
  const [quotes,setQuotes]=  useState([])
  const [word,setWord] = useState("")

  const [likedQuotes,setLikedQuotes] = useState(Array(quotes.length).fill(false))
    const [likedQuotations,setLikedQuotations] = useState([])
  
  const handleLike= (index)=>{
    const updatedLikes= [...likedQuotes]
    updatedLikes[index] = !updatedLikes[index]
    setLikedQuotes(updatedLikes)
    // let val=[]

   let likedQuotation=  quotes.filter((quote,index)=>{
        return updatedLikes[index]
    })
setLikedQuotations(likedQuotation)
getLikedQuotation(likedQuotations)
    console.log(likedQuotation)
  }

  useEffect(()=>{
    localStorage.setItem('storeLiked',JSON.stringify(likedQuotations))
  },[likedQuotations])

  
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
   
  },[])
 
  
   return (
     <div className="homediv" >
      
 <h1 className="heading">QUOTATIONS</h1>
 <input type="text" onChange={e=>setWord(e.target.value)} placeholder="type the word "/>
 {
 
   quotes.length>0? ( <div>
     {
       word.length>0?   <p className="quotations">Quotations with : {word} </p>
 
       : <p></p>
     }
     {quotes.map((quote,index)=>( 
     <p key={index} className="quotes">{quote} 
     <button onClick={() => handleLike(index)}>
                {likedQuotes[index] ? "❤️" : "𖹭"}
              </button>
     
     </p>
   )) }
   </div>
   ):<p>Loading...</p>
 }
     </div>
   );
 }
 
 export default React.memo(Home) ;