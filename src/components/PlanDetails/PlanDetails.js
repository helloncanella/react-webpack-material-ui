import * as React from 'react'
import instructorsData from '../fakedData/instructorsData'


export default class PlanDetails extends React.Component{
    render() {

        let {instructorId, planId} = this.props.params

        instructorId = 1


        return (
            <div className="planDetails">
                <h1>Olá</h1>
            </div>
        )
    }
}