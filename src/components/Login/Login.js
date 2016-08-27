import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import LoginButton from '../LoginButton/LoginButton'

export default class Login extends React.Component{
    render(){
        return (
            <div className='login'>
                <AppBar
                    title="Login"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />

                <div className="grid loginContainer">
                    <LoginButton service="facebook" href="/newUser"></LoginButton>
                    <LoginButton service="google" href="/newUser" ></LoginButton>
                </div>

            </div>
        )
    }
}