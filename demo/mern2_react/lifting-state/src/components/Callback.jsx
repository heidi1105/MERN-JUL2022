import React from 'react'

const Callback = (props) => {
    const reminders =[
        "Check typo", "Sleep well", "Drink more water", "Do not add pineapple on a pizza"
    ]

    return (
        <div>
            {
                reminders.map((reminder, i)=>(
                    <button key={i} onClick={e=>props.parentFunction(reminder)}> Message {i+1}</button>
                ))
            }
        </div>
    )
}

export default Callback
