import { useState } from "react"

function Addquotes({setQuotes,quotes}){
    const [addnew, setAddnew] = useState("")
  function add(){
    let newArr= [...quotes,addnew]
    setQuotes(newArr)
  }
    return(
        <div className="homediv page">
      <input type="text" name="" id="" onChange={e=>setAddnew(e.target.value)}/>
      <button className="addbtn" onClick={add}>ADD</button>
        </div>
    )
}

export default Addquotes