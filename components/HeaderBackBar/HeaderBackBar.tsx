import * as React from 'react'
import {AppBar, IconButton, FontIcon} from 'material-ui'
import {browserHistory} from 'react-router'

export default class HeaderBar extends React.Component<any,any>{
    _backHistory(){
        browserHistory.goBack()
    }    
    render(){
        return (
            <div className="headerBackBar">
                <AppBar
                    title="Detalhes"
                    iconElementLeft={
                        <IconButton onTouchTap={this._backHistory}>
                            <FontIcon className="fa fa-arrow-left"></FontIcon>
                        </IconButton>
                    }
                ></AppBar>
                {this.props.children}        
            </div>
        )
    }
}