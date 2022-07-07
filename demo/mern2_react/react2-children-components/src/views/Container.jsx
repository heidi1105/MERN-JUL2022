import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'

export class Container extends Component {
    render() {
        return (
            <fieldset>
                <legend> Container.jsx</legend>
                <fieldset>
                <legend>this.props.children</legend>
                    {this.props.children}
                </fieldset>
                
                <Header />
                <Main />
                <Footer />
            </fieldset>
        )
    }
}

export default Container
