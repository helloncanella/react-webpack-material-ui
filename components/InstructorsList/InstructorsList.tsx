import * as React from 'react'
import  instructorsData from '../fakedData/instructorsData'
import {List, ListItem, Avatar} from 'material-ui'
import * as _ from 'lodash'
import { Link } from 'react-router'

export default class InstructorList extends React.Component<any,{}> {
  
    _renderedData(){
      var DOM = instructorsData.map((instructor)=>{
        
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
          chepeastPrice = 'R$ '+_.minBy(professional.plans, function(o){return Number(o.price)}).price

          
          return (
            <Link to={`/client/01/instructorDetails/${instructorKey}`}>
              <ListItem 
                key = {instructorKey}
                leftAvatar={<Avatar src={image}></Avatar>}
                primaryText={name}
                secondaryText = {
                  <p>
                    {lastDegree} - {lastUniversity}<br />
                    a partir de {chepeastPrice}  
                  </p>                
                }
                secondaryTextLines={2}
              />
            </Link>
          )
      })

      return DOM
    }
  
    render(){
        return <List>{this._renderedData()}</List> 
    }
}
