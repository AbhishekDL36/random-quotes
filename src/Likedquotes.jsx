function LikedQuotes({liked}){
    console.log(liked)
    return(
        <div className="homediv">
        {
            liked.length>0? liked.map((likedquote)=>{
                return <p>{likedquote}</p>
            })
            : <p>no liked quotation</p>
        }
        </div>
    )
}

export default LikedQuotes