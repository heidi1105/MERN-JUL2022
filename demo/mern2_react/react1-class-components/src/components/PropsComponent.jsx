import React, { Component } from 'react'

export class PropsComponent extends Component {
  render() {
    const {title, episodes, isRecommended, hashtags} = this.props
    return (
      <fieldset>
        <legend> PropsComponent.jsx</legend>
        <h1> Title: {this.props.title}</h1>
        <h3> Total episodes : {episodes}</h3>
        <h3> Recommended? {isRecommended?"Yes":"No"} </h3>
        <h3> Hashtags: {hashtags}</h3>
      </fieldset>
    )
  }
}

export default PropsComponent

// props