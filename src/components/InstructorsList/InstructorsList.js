import * as React from 'react'
import  instructorsData from '../fakedData/instructorsData'
import {List, ListItem, Avatar, Divider} from 'material-ui'
import * as _ from 'lodash'
import { Link } from 'react-router'

export default class InstructorList extends React.Component{
  
    _renderedData(){
      var DOM = instructorsData.map((instructor, index)=>{
        
        let 
          profile = instructor.personalData.profile,
          image = profile.profileImageSrc,
          name = profile.name

        let 
          professional = instructor.professionalData,
          instructorKey = instructor.professionalData._id,
          recentEducation = _.maxBy(professional.education, 'end'),
          lastDegree = recentEducation.degree,
          lastUniversity = recentEducation.university,
          area = recentEducation.area,
          chepeastPrice = 'R$ '+_.minBy(professional.plans, function(o){return Number(o.price)}).price

          
          return (
            <Link key = {index} to={`/client/01/instructorDetails/${instructorKey}`}>
              <ListItem 
                key = {index}
                leftAvatar={<Avatar src={image}></Avatar>}
                primaryText={name}
                secondaryText = {
                  <p>
                    {lastDegree} | {lastUniversity}<br />
                    a partir de {chepeastPrice} por hora  
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
