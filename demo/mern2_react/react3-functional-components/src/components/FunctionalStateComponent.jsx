// 1. import useState
import React, {useState} from 'react'
// variable that will keep changing: useState


const FunctionalStateComponent = () => {
    // 2. instantiate useState
    const [count, setCount] = useState(0); 
    const [likes, setLikes] = useState(100);

    const addLikes =()=>{
        setLikes(likes+1)
    }

  return (
    <fieldset>
        <legend> FunctionaStateComponent.jsx</legend>
        <button onClick={()=>setCount(count+1)}> Add Count</button>
        <button onClick={addLikes}> Add Likes</button>

    
        <h1> Count: {count}</h1>
        <h1> Likes: {likes} </h1>

    </fieldset>
  )
}

export default FunctionalStateComponent