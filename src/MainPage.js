import React, { Component } from 'react'
import SignInForm from './SignInForm'

export class MainPage extends Component {
    render() {
        return (
            <div>
                <div className="container vh-100">
                    <div className="d-flex justify-content-center align-items-center h-50 " style={{backgroundColor: "#ebf5f2"}}>
                <SignInForm></SignInForm>
                </div>
                </div>
            </div>
        )
    }
}

export default MainPage
