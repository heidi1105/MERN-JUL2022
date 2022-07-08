// import React
import React, { Component } from 'react'

// define class
export class ClassStateComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            count : 0,
            likes : 100
        }
    }

    render() {
        const alert2 = (message) => {
            alert(message)
        }

        const addLikes = () =>{
            this.setState({
                likes: this.state.likes +1
            })
        }

        return (
            <fieldset>
                <legend> StateComponent.jsx</legend>
                <h1> State demo</h1>
                <button onClick={() => alert("Hi")}> Alert me!</button> | 
                <button onClick={() => alert2("alert message")}> Alert test 2</button>
                <p>
                    <button onClick={()=>this.setState({count: this.state.count+1})}> Add count</button>
                    <button onClick={()=>addLikes()}> Add likes</button>
                </p>
                <h1> Count: {this.state.count}</h1>
                <h1> Likes: {this.state.likes}</h1>

            </fieldset>
        )
    }
}

// export the class
export default ClassStateComponent

// not COUNT++
// count = count+1


// this.setState({object you want to change & bind})