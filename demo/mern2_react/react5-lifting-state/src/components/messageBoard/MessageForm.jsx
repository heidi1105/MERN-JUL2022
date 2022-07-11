import React, { useState } from 'react'
// each input, create the state variable
const MessageForm = (props) => {
    const [msg, setMsg] = useState("")

    const handleSubmit =(e)=>{
        e.preventDefault()
        props.onNewMessage(msg)
        setMsg("")
    }

    // messageContent, receiver(dropdown menu), isImportant (checkbox) 
    return (
        <fieldset>
            <legend> MessageForm.jsx</legend>
            <form onSubmit={handleSubmit}>
                <h1>Set Message</h1>
                <textarea
                    rows="4"
                    cols="50"
                    placeholder="Enter your message here"
                    onChange={(e) => setMsg(e.target.value)}
                    value={msg}
                ></textarea>
                <input type="submit" value="Send Message" />
            </form>

        </fieldset>
    )
}

export default MessageForm