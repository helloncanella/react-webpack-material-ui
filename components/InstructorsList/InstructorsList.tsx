import * as React from 'react'
import  instructorsData from './instructorsData'
import {List, ListItem, Avatar} from 'material-ui'
import * as _ from 'lodash'


export default class InstructorList extends React.Component<{},{}> {
  
    _renderedData(){
      var DOM = instructorsData.map((instructor)=>{
        
        let 
          profile = instructor.personalData.profile,
          image = profile.profileImageSrc,
          name = profile.name

        let 
          professional = instructor.professionalData,
          key = instructor.professionalData._id,
          recentEducation = _.maxBy(professional.education, 'end'),
          lastDegree = recentEducation.degree,
          lastUniversity = recentEducation.university,
          chepeastPrice = 'R$ '+_.minBy(professional.plans, function(o){return Number(o.price)}).price

          
          return (
            <ListItem 
              key = {key}
              leftAvatar={<Avatar src={image}></Avatar>}
              primaryText={name}
              secondaryText = {
                <p>
                  {lastDegree} pela {lastUniversity}<br />
                  a partir de {chepeastPrice}  
                </p>                
              }
              secondaryTextLines={2}
            />
          )
      })

      return DOM
    }
  
    render(){

        console.log(this._renderedData())
        return <List>{this._renderedData()}</List> 
    }
}
