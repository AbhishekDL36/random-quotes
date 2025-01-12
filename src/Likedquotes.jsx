import { useEffect, useState } from "react"

function LikedQuotes(){
    let [val,setVal] = useState([])
  let array= localStorage.getItem('storeLiked')
  console.log("localstorage-------------------------",array)
  useEffect(()=>{
let arr= JSON.parse(array)
setVal(arr)

  },[array])

  function removeLiked(index){
console.log(index)
let arr= [...val]
arr.splice(index,1)
setVal(arr)

  }
console.log("val------------------------------",val)
    return(
        <div className="homediv page">
            <h1 className="heading">YOUR LIKED QUOTES</h1>
      <div >
      {
            val.length>0? val.map((likedquote,index)=>{
                return <p key={index} className="quotes1">{likedquote}
                <button className="rembtn" onClick={()=>removeLiked(index)}>(remove)</button>
                </p>
            })
            : <p>no liked quotation</p>
        }
        </div>  
        </div>
    )
}

export default LikedQuotes