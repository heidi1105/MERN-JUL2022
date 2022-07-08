import React, {useState} from 'react'

const MessageForm = (props) => {
    const [msg, setMsg] = useState("")

    const submitHandler=(e)=>{
        e.preventDefault();
        props.onNewMessage(msg) // passing message from child to parent
        setMsg("")
    }

    return (
        <fieldset>
            <legend> MessageForm.jsx</legend>
            <h1> Message Form</h1>
            <form onSubmit={submitHandler}>
                <textarea
                    rows="4"
                    cols="50"
                    placeholder="Enter your message here"
                    onChange={(e) => setMsg(e.target.value) }
                    value={msg}
                ></textarea>
                <button> Send Message</button>
            </form>
        </fieldset>
    )
}

export default MessageForm
