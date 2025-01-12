import { useState } from "react"

function Addquotes({liked}){
    const [addnew, setAddnew] = useState("")
    console.log(liked)
    return(
        <div className="homediv page">
      <input type="text" name="" id="" onChange={e=>setAddnew(e.target.value)}/>
      <button className="addbtn">ADD</button>
        </div>
    )
}

export default Addquotes