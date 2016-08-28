import * as React from 'react'
import {Avatar, Paper} from 'material-ui'
import faker from 'faker'

import './style.scss'

export default class MessageContainer extends React.Component{

    _messages(){
        let template = this.props.messages.map((message, index)=>{


            return (
                <Paper zDepth={1} key={index} className="paper" >
                    {message}
                </Paper>
            )
        }) 

        return template
    }

    render(){
        let {image, direction} = this.props
        let avatar

        if(image){
            avatar = (
               <Avatar size={70} src={image} className="avatar" />
            )
        }

        return(
            <div className={`messageContainer ${direction}`}>
                {avatar}             
                <div className="messages">
                    {this._messages()}
                </div>
            </div>
        )
    }        
}