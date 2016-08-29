import * as React from 'react'
import  instructorsData from '../fakedData/instructorsData'
import {List, ListItem, Avatar, Divider} from 'material-ui'
import * as _ from 'lodash'
import { Link } from 'react-router'
import * as faker from 'faker'

export default class ChatList extends React.Component{
  
    _renderedData(){
      var DOM = instructorsData.slice(0,10).map((user, index)=>{

          let
            personal = user.personalData, 
            profile = personal.profile,
            id = personal._id

          let 
            name = profile.name,
            image = profile.profileImageSrc,
            message = faker.lorem.text(10)
            
          return (
            <Link key = {index} to={`/client/01/chatComponent/01`}>
              <ListItem 
                key = {index}
                leftAvatar={<Avatar src={image}></Avatar>}
                primaryText={name}
                secondaryText = {
                  <p>
                     {message} 
                  </p>                
                }
                secondaryTextLines={2}
              />
              <Divider />
            </Link>
          )
      })

      return DOM
    }
  
    render(){
        return <List>{this._renderedData()}</List> 
    }
}
