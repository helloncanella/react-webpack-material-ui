import * as React from 'react';
import AppBar from 'material-ui/AppBar';

export default class Login extends React.Component<{},{}>{
    render(){
        return (
            <AppBar
                title="Login"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        )
    }
}