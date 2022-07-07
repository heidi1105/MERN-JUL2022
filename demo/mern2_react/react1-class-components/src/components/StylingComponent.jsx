import React, { Component } from 'react'
// 1. Direct import
import '../stylings/directimport.css'

// 3. css modules
import styles from './StylingComponent.module.css'

// 2.2 inline styles
const inline2 = {
    color: 'white',
    backgroundColor: 'rebeccaPurple'
}

export class StylingComponent extends Component {
  render() {
    // 2.3 inline styles
    const inline3 = {
        color: 'white',
        backgroundColor: 'pink'
    }
    return (
        <div>
            <h1> Styling Component</h1>
            <button className='btn btn-success'> Bootstrap</button>
            <div className='directimport'> 1. Direct import</div>
            <div style={ {color: 'white', backgroundColor: 'teal'} }> 2.1 inline style </div>
            <div style={inline2}> 2.2 inline style </div>
            <div style={inline3}> 2.3 inline style</div>
            <div className={styles.cssmodule}> 3. css modules</div>


        </div>
    )
  }
}

export default StylingComponent