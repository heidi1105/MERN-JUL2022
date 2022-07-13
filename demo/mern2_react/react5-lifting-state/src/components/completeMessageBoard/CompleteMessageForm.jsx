import React, { useState } from 'react'

// 1. create a form (content, receiver, isImportant)
// 2. input --> state

const CompleteMessageForm = (props) => {
    const [content, setContent] = useState("")
    const [receiver, setReceiver] = useState("")
    // option 1: using a default value
    // option 2: option hidden

    const [isImportant, setIsImportant] = useState(true)
    //checkbox does not have e.target.value, it only has e.target.checked

    const handleSubmit =(e)=>{
        e.preventDefault()
        props.onNewMessage({content,  receiver, isImportant})
    }

    return (
        <fieldset>
            <legend> CompleteMessageForm.jsx</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Message Content</label>
                    <input type="text" name="content" value={content} onChange={e => setContent(e.target.value)} />
                </div>

                <div>
                    <label> Receiver</label>
                    <select name="receiver" value={receiver} onChange={e => setReceiver(e.target.value)}>
                        <option hidden >Choose a receiver</option>
                        <option value="Alex Miller"> Alex Miller</option>
                        <option value="Martha Smith"> Martha Smith</option>
                        <option value="Roger Anderson"> Roger Anderson</option>
                    </select>
                </div>

                <div>
                    <label> Important? </label>
                    <input type="checkbox" name="isImportant" checked={isImportant} onChange={e=>setIsImportant(e.target.checked)} />
                </div>

                <button type="submit"> Send</button>
            </form>


        </fieldset>
    )
}

export default CompleteMessageForm