import * as React from 'react'
import instructorsData from '../fakedData/instructorsData'


export default class PlanDetails extends React.Component{
    render() {

        // let {instructorId, planId} = this.props.params

        let planId = 0, instructorId = 0

        let plan = instructorsData[instructorId].professionalData.plans[planId];

        let 
            description = plan.description
            , durationEachClass = plan.durationEachClass
            , numberOfClasses = plan.numberOfClasses
            , price = plan.price
            , details = plan.details
            , observations = plan.observations
        return (
            <div className="grid planDetails">
                
                <h3>{description}</h3>
                <p>{numberOfClasses} aulas com {durationEachClass} horas por R$ {price} </p>
                
                <h4>Descrição</h4>
                <p>{details}</p>

                <h4>Importante</h4>
                <p>{observations}</p>

            </div>
        )
    }
}