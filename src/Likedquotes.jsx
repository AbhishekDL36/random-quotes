import { useEffect, useState } from "react"

function LikedQuotes(){
    let [val,setVal] = useState([])
  let array= localStorage.getItem('storeLiked')
  console.log("localstorage-------------------------",JSON.parse(array))
  useEffect(()=>{
let arr= JSON.parse(array)
setVal(arr)
  },[array])
console.log(val)
    return(
        <div className="homediv">
            hi
        {
            val.length>0? val.map((likedquote)=>{
                return <p>{likedquote}</p>
            })
            : <p>no liked quotation</p>
        }
        </div>
    )
}

export default LikedQuotes