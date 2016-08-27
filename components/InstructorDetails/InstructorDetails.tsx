import * as React from 'react'
import { AppBar, FontIcon, IconButton, Avatar, FlatButton } from 'material-ui'
import {browserHistory} from 'react-router'
import instructorsData from '../fakedData/instructorsData'

export interface InstructorState {
    name: string,
    image: string,
    education: Array<Object>,
    plans: Array<Object>
    subjects: Array<string>,
    personalDescription: string
}


export default class InstructorDetails extends React.Component<{}, InstructorState>{

    _backHistory() {
        browserHistory.push('/client/01/home')
    }


    render() {
        let instructor = instructorsData[0]

        let
            personalData = instructor.personalData,
            profile = personalData.profile,
            professional = instructor.professionalData

        let name = profile.name,
            image = profile.profileImageSrc,
            education = professional.education,
            plans = professional.plans,
            subjects = professional.subjects,
            personalDescription = professional.personalDescription

        let
            recentEducation = _.maxBy(professional.education, 'end'),
            lastDegree = recentEducation.degree,
            lastUniversity = recentEducation.university
            


        return (
            <div className="instructorDetails">
                <AppBar
                    title="Detalhes"
                    iconElementLeft={
                        <IconButton onTouchTap={this._backHistory}>
                            <FontIcon className="fa fa-arrow-left"></FontIcon>
                        </IconButton>
                    }
                    ></AppBar>
                <div className="body grid">
                    <div className="introduction">
                        <Avatar src={image} size={130}/>
                        <h2>{name}</h2>
                        <p>{lastDegree} - {lastUniversity}</p>
                        <FontIcon className="fa fa-heart"/>
                        <FlatButton secondary={true}  icon={<FontIcon className="fa fa-comment-o"/>} label="Conversar"/>
                    </div>
                    <div className="subjects">
                        <h3>Ensina</h3>
                        <ul>
                            {subjects.map((item)=>{
                                return <li> <span className="fa fa-graduation-cap"></span> {item} </li>
                            })}
                        </ul>

                    </div>
                    <div className="plans">
                        <h3>Pacotes e valores</h3>
                        {plans.map((plan)=>{
                            return (
                                <div className="description">
                                    <h4>{plan.description}</h4>
                                    <p>{plan.details}</p> 
                                </div>
                            )
                        })}
                    </div>
                    <div className="personalDescription">
                        <h3>Descrição Pessoal</h3>
                        <p>{professional.personalDescription}</p>
                    </div>
                </div>
            </div>
        )
    }
}