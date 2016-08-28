import * as React from 'react'
import { FontIcon, Avatar, FlatButton } from 'material-ui'
import {browserHistory, Link} from 'react-router'
import instructorsData from '../fakedData/instructorsData'



export default class InstructorDetails extends React.Component{
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
                            {subjects.map((item, index)=>{
                                return <li key={index}> <span className="fa fa-graduation-cap"></span> {item} </li>
                            })}
                        </ul>

                    </div>
                    <div className="plans">
                        <h3>Pacotes e valores</h3>
                        {plans.map((plan, index)=>{
                            let 
                                description = plan.description
                                , durationEachClass = plan.durationEachClass
                                , numberOfClasses = plan.numberOfClasses
                                , price = plan.price
                                , details = plan.details
                                , observations = plan.observations //stub    
                                , hourRate = (price/(numberOfClasses*durationEachClass)).toFixed(2) 
                            return (
                                <div key={index} className="description">
                                    <h4>{plan.description}</h4>
                                    <p>{numberOfClasses} aulas com {durationEachClass} horas por R$ {price}</p>
                                    <h5>R$ {hourRate} por hora</h5>
                                    <Link to={`/client/${this.props.params.id}/instructorDetails/${this.props.params.instructorId}/plan/01`}>detalhes</Link>
                                    <p>{plan.details}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="personalDescription">
                        <h3>Descrição Pessoal</h3>
                        <p>{professional.personalDescription}</p>
                    </div>
                    <div className="education">
                        <h3>Education</h3>
                        {education.map((item, index)=>{
                            let 
                                degree = item.degree,
                                university = item.university,
                                start = item.start,
                                area = item.area,
                                end = item.end

                            return(
                                <div key={index} className="item">
                                    <h4>{degree} em {area} - {university}</h4>
                                    <p>{start} - {end}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}