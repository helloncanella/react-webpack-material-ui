import * as React from 'react'
import fakeMeetings from '../fakedData/fakeMeetings'
import MeetingCard from '../MeetingCard/MeetingCard'


export default class ScheduledList extends React.Component{
    
    _meetings(){

        let { subject, start, end, address } = fakeMeetings[0]
        let props = {subject, start, end, address }

        return (
            <MeetingCard {...props} />
        )


    }

    render() {

        return (
            <div className="ScheduledList grid">
                {this._meetings()}
            </div>
        )
    }
}