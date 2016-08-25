import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import LoginButton from '../LoginButton/LoginButton'



import './Login.scss'

export default class Login extends React.Component<{},{}>{
    render(){
        return (
            <div className='login'>
                <AppBar
                    title="Login"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />

                <div className="grid loginContainer">
                    <LoginButton service="facebook" href="/new"></LoginButton>
                    <LoginButton service="google" href="/new" ></LoginButton>
                </div>

            </div>
        )
    }
}