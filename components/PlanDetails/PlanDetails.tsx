import * as React from 'react'
import instructorsData from '../fakedData/instructorsData'


export default class PlanDetails extends React.Component<any, any>{
    render() {

        let {instructorId, planId} = this.props.params

        instructorId = 1


        return (
            <div className="planDetails">
                <h1>Oi</h1>
            </div>
        )
    }
}