import * as React from 'react'
import {AppBar, IconButton, FontIcon} from 'material-ui'
import {browserHistory} from 'react-router'
import './style.scss'

export default class HeaderBar extends React.Component{
    _backHistory(){
        browserHistory.goBack()
    }    
    render(){
        return (
            <div className="headerBackBar">
                <AppBar
                    className="appBar"
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