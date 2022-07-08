

const FunctionalPropsComponent = (props) =>{
    const {episodes, hashtags, isRecommended} = props

    return (
        <fieldset>
            <legend> FunctionalPropsComponent.jsx</legend>
            <h1> Title: {props.title}</h1>
            <h3> Total episodes : {episodes}</h3>
            <h3> Recommended? {isRecommended?"Yes":"No"} </h3>
            <h3> Hashtags: </h3>
            <ul>
            {
                hashtags.map((eachTag, i)=>{
                    return(
                        <li key={i}> {eachTag}</li>
                    )
                })
            }
            </ul>

        </fieldset>
    )
}

export default FunctionalPropsComponent