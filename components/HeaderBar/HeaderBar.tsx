import * as React from 'react'
import {AppBar, IconButton, FontIcon} from 'material-ui'
import {browserHistory} from 'react-router'

export default class HeaderBackBar extends React.Component<any,any>{
    _backHistory(){
        browserHistory.goBack()
    }    
    render(){
        return (
            <AppBar
                title="Detalhes"
                iconElementLeft={
                    <IconButton onTouchTap={this._backHistory}>
                        <FontIcon className="fa fa-arrow-left"></FontIcon>
                    </IconButton>
                }
            ></AppBar>        
        )
    }
}