import { useEffect, useState } from "react"

function LikedQuotes(){
    let [val,setVal] = useState([])
  let array= localStorage.getItem('storeLiked')
  console.log("localstorage-------------------------",array)
  useEffect(()=>{
let arr= JSON.parse(array)
setVal(arr)
  },[array])
console.log("val------------------------------",val)
    return(
        <div className="homediv">
            
        {
            val.length>0? val.map((likedquote,index)=>{
                return <p key={index}>{likedquote}</p>
            })
            : <p>no liked quotation</p>
        }
        </div>
    )
}

export default LikedQuotes