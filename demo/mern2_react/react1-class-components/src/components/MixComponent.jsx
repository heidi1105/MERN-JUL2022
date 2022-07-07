// import React
import React, { Component } from 'react'

// define class
export class MixComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            count : 0,
            likes : 100
        }
    }

    render() {

        const addLikes = () =>{
            this.setState({
                likes: this.state.likes +1
            })
        }

        return (
            <fieldset>
                <legend> MixComponent.jsx</legend>
                <h1> State demo</h1>
                 <p>
                    <button onClick={()=>this.setState({count: this.state.count+1})}> Add count</button>
                    <button onClick={()=>addLikes()}> Add likes</button>
                </p>
                <h1> Count: {this.state.count}</h1>
                <h1> Likes from state: {this.state.likes}</h1>
                <h1> Likes from props: {this.props.likes}</h1>
            </fieldset>
        )
    }
}

// export the class
export default MixComponent

// not COUNT++
// count = count+1


// this.setState({object you want to change & bind})