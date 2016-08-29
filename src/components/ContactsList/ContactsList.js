import * as React from 'react'
import  instructorsData from '../fakedData/instructorsData'
import {List, ListItem, Avatar, Divider} from 'material-ui'
import * as _ from 'lodash'
import { Link } from 'react-router'
import * as faker from 'faker'

export default class ContactsList extends React.Component{
  
    _renderedData(){
      
      //Get 10 instructors orded by name
      var instructors = _.sortBy(instructorsData.slice(0,10), (instructor)=>{
        return instructor.personalData.profile.name
      });

      var DOM = instructors.map((user, index)=>{

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
